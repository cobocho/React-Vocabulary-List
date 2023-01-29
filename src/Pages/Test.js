import { useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../Components/TestWord/ProgressBar";
import BigButton from "../Components/UI/Buttons/BigButton";
import Card from "../Components/UI/Card";
import UserInput from "../Components/UI/UserInput";
import NotFound from "./NotFound";

const TestCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form label {
    font-size: 24px;
    margin-bottom: 10px;
  }

  form input {
    margin-bottom: 10px;
  }
`;

const Quiz = styled.strong`
  font-weight: 400;
  font-size: 80px;

  margin-bottom: 20px;
`;

const Test = () => {
  const [searchParams] = useSearchParams();
  const { chapter } = useParams();
  const type = searchParams.get("type");
  const finished = searchParams.get("finished");

  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState([]);

  const answerRef = useRef();

  const navigate = useNavigate();

  const existentChapter = JSON.parse(localStorage.getItem("chapters")).some(
    (chapterItem) => {
      return chapterItem.title === chapter;
    }
  );

  if (!existentChapter) {
    return <NotFound />;
  }

  let quizList = JSON.parse(localStorage.getItem("chapters")).filter(
    (chapterItem) => {
      return chapterItem.title === chapter;
    }
  )[0].words;

  if (finished === "not") {
    quizList = quizList.filter((quiz) => {
      return quiz.finished === false;
    });
  }

  if (progress === quizList.length) {
    console.log(results);
    setTimeout(() => {
      navigate("/result");
    }, 1000);
    return (
      <TestCard>
        <ProgressBar progress={progress} entire={quizList.length} />
      </TestCard>
    );
  }

  let quiz;
  let answer;

  if (type === "meaning") {
    quiz = quizList[progress]?.["word"];
    answer = quizList[progress]?.["meaning"];
  } else if (type === "word") {
    quiz = quizList[progress]?.["meaning"];
    answer = quizList[progress]?.["word"];
  } else if (type === "random") {
    const randomValue = Math.round(Math.random() * 1);
    randomValue === 1
      ? (quiz = quizList[progress]?.["meaning"])
      : (quiz = quizList[progress]?.["word"]);
    randomValue === 1
      ? (answer = quizList[progress]?.["word"])
      : (answer = quizList[progress]?.["meaning"]);
  }

  const submitAnswerHandler = (event) => {
    event.preventDefault();
    const userInput = answerRef.current.value;
    const result = {
      ...quizList[progress],
      correct: userInput === answer,
      userInput,
    };
    answerRef.current.value = "";
    setResults((state) => (state = [...state, result]));
    setProgress((state) => (state = state + 1));
  };

  return (
    <TestCard>
      <ProgressBar progress={progress} entire={quizList.length} />
      <Quiz>{quiz}</Quiz>
      <form onSubmit={submitAnswerHandler}>
        <label htmlFor="test-answer">정답</label>
        <UserInput ref={answerRef} id="test-answer" />
        <BigButton type="submit">제출</BigButton>
      </form>
    </TestCard>
  );
};

export default Test;

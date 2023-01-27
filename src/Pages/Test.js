import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../Components/TestWord/ProgressBar";
import Card from "../Components/UI/Card";

const TestCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const Test = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { chapter } = useParams();
  const type = searchParams.get("type");
  const finished = searchParams.get("finished");

  const [progress, setProgress] = useState(0);

  let quizList = useSelector((state) => state.chapter.chapters).filter(
    (chapterItem) => {
      return chapterItem.title === chapter;
    }
  )[0].words;

  if (finished === "not") {
    quizList = quizList.filter((quiz) => {
      return quiz.finished === false;
    });
  }

  console.log(quizList);

  return (
    <TestCard>
      <ProgressBar progress={2} entire={10} />
    </TestCard>
  );
};

export default Test;

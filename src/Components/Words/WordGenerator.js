import Card from "../UI/Card";

import UserInput from "../UI/UserInput";

import styled from "styled-components";
import CloseButton from "../UI/Buttons/CloseButton";
import BasicButton from "../UI/Buttons/BasicButton";
import { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import WordPartsSelector from "./WordPartsSelector";
import { useDispatch, useSelector } from "react-redux";
import { chapterActions } from "../../store/chapter-slice";
import { wordActions } from "../../store/word-slice";

const WordGeneratorCard = styled(Card)`
  position: relative;
  padding: 30px 42px;
  height: 340px;
  margin-bottom: 16px;

  label {
    display: block;
    font-size: 24px;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    height: 54px;
    margin-bottom: 20px;
    font-size: 36px;
  }

  .word-generator-form {
    display: flex;
  }

  .word-generator-inputs {
    display: inline-block;
    width: 100%;
  }

  .word-generator-close-btn {
    position: absolute;
    top: 0;
    right: 5px;
    font-size: 24px;
  }

  #added-word-btn {
    width: 80px;
    height: 40px;
    font-size: 24px;
    position: absolute;
    bottom: 14px;
    right: 20px;
  }
`;

const WordGenerator = () => {
  const wordRef = useRef();
  const meaningRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { chapter } = useParams();

  const { search } = useLocation();

  const wordGeneratorCloseHandler = () => {
    navigate(`/${chapter}${search}`);
  };

  const wordChangeHandler = () => {
    const enteredWord = wordRef.current.value;
    dispatch(wordActions.setEnteredWord(enteredWord));
  };

  const meaningChangeHandler = () => {
    const enteredMeaning = meaningRef.current.value;
    dispatch(wordActions.setEnteredMeaning(enteredMeaning));
  };

  const title = useParams().chapter;
  const word = useSelector((state) => state.word.enterdWord);
  const meaning = useSelector((state) => state.word.enterdMeaning);
  const part = useSelector((state) => state.word.selectedPart);

  const addWordHandler = () => {
    if (!title || !word || !meaning) {
      alert("모든 값을 입력해주세요!");
      return;
    }
    const addedWord = {
      word: word,
      meaning: meaning,
      part: part,
      finished: false,
    };
    dispatch(chapterActions.addWord({ title, addedWord }));
  };

  return (
    <WordGeneratorCard>
      <CloseButton
        className="word-generator-close-btn"
        onClick={wordGeneratorCloseHandler}
      />
      <form className="word-generator-form">
        <div className="word-generator-inputs">
          <label htmlFor="added-word">단어</label>
          <UserInput
            onChange={wordChangeHandler}
            ref={wordRef}
            type="text"
            id="added-word"
          />
          <label htmlFor="added-word-meaning">의미</label>
          <UserInput
            onChange={meaningChangeHandler}
            ref={meaningRef}
            type="text"
            id="added-word-meaning"
          />
        </div>
        <WordPartsSelector />
      </form>
      <BasicButton onClick={addWordHandler} id="added-word-btn">
        ADD
      </BasicButton>
    </WordGeneratorCard>
  );
};

export default WordGenerator;

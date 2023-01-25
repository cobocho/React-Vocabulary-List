import Card from "../UI/Card";

import UserInput from "../UI/UserInput";

import styled from "styled-components";
import CloseButton from "../UI/Buttons/CloseButton";
import BasicButton from "../UI/Buttons/BasicButton";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WordPartsSelector from "./WordPartsSelector";

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

const WordGenerator = (props) => {
  const wordRef = useRef();
  const meaningRef = useRef();
  const navigate = useNavigate();

  const { chapter } = useParams();

  const onWordGeneratorCloseHandler = () => {
    navigate(`/${chapter}`, { replace: true });
  };

  return (
    <WordGeneratorCard>
      <CloseButton
        className="word-generator-close-btn"
        onClick={onWordGeneratorCloseHandler}
      />
      <form className="word-generator-form">
        <div className="word-generator-inputs">
          <label htmlFor="added-word">단어</label>
          <UserInput ref={wordRef} type="text" id="added-word" />
          <label htmlFor="added-word-meaning">의미</label>
          <UserInput ref={meaningRef} type="text" id="added-word-meaning" />
        </div>
        <WordPartsSelector />
      </form>
      <BasicButton id="added-word-btn">ADD</BasicButton>
    </WordGeneratorCard>
  );
};

export default WordGenerator;

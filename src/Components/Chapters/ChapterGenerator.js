import Card from "../UI/Card";

import UserInput from "../UI/UserInput";

import styled from "styled-components";
import CloseButton from "../UI/Buttons/CloseButton";
import BasicButton from "../UI/Buttons/BasicButton";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { chapterActions } from "../../store/chapter-slice";

const ChaptersGeneratorCard = styled(Card)`
  position: relative;
  padding: 14px 20px;
  max-width: 300px;
  height: 160px;
  margin-bottom: 16px;

  label {
    display: block;
    font-size: 24px;
    margin-bottom: 4px;
  }

  #chapter-generator-close-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

  #added-chapter-btn {
    position: absolute;
    bottom: 14px;
    right: 20px;
  }
`;

const ChaptersGenerator = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onAddChapterHandler = (event) => {
    event.preventDefault();
    dispatch(chapterActions.addChapter(inputRef.current.value));
    inputRef.current.value = "";
  };

  const onCloseChaptersGenerator = () => {
    dispatch(chapterActions.clearAddMode());
  };

  return (
    <ChaptersGeneratorCard>
      <CloseButton
        onClick={onCloseChaptersGenerator}
        id="chapter-generator-close-btn"
      />
      <form>
        <label htmlFor="added-chapter-input">챕터</label>
        <UserInput ref={inputRef} type="text" id="added-chapter-input" />
        <BasicButton id="added-chapter-btn" onClick={onAddChapterHandler}>
          추가
        </BasicButton>
      </form>
    </ChaptersGeneratorCard>
  );
};

export default ChaptersGenerator;

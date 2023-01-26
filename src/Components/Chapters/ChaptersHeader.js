import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { chapterActions } from "../../store/chapter-slice";
import PlusButton from "../UI/Buttons/PlusButton";
import CounterTitle from "../UI/CounterTitle";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ChaptersHeader = (props) => {
  const dispatch = useDispatch();

  const clickChapterAddButtonHandler = () => {
    dispatch(chapterActions.toggleAddMode());
  };

  const counter = useSelector((state) => state.chapter.chapters.length);

  return (
    <HeaderBox>
      <CounterTitle title={"Chapters"} count={counter} />
      <PlusButton onClick={clickChapterAddButtonHandler} />
    </HeaderBox>
  );
};

export default ChaptersHeader;

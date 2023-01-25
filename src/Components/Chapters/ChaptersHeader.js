import { useDispatch, useSelector } from "react-redux";
import { chapterActions } from "../../store/chapter-slice";
import Title from "../UI/CounterTitle";

const ChaptersHeader = (props) => {
  const dispatch = useDispatch();

  const onChapterAddMode = () => {
    dispatch(chapterActions.setAddMode());
  };

  const counter = useSelector((state) => state.chapter.chapters.length);

  return (
    <Title title={"Chapters"} count={counter} onClick={onChapterAddMode} />
  );
};

export default ChaptersHeader;

import { useDispatch } from "react-redux";
import { chapterActions } from "../../store/chapter-slice";
import Title from "../UI/CounterTitle";

const ChaptersHeader = (props) => {
  const dispatch = useDispatch();

  const onChapterAddMode = () => {
    dispatch(chapterActions.setAddMode());
  };

  return <Title title={"Chapters"} count={0} onClick={onChapterAddMode} />;
};

export default ChaptersHeader;

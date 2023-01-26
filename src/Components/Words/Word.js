import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { chapterActions } from "../../store/chapter-slice";
import CloseButton from "../UI/Buttons/CloseButton";
import Card from "../UI/Card";
const { default: styled } = require("styled-components");

const WordBox = styled(Card)`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 16px;

  h3 {
    font-size: 32px;
    letter-spacing: -0.05em;
    margin-bottom: 4px;
  }

  strong {
    font-weight: 400;
    font-size: 24px;
  }

  .word-delete-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

  &.finished {
    opacity: 0.4;
  }
`;

const PartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 24px;
  background-color: #b4ae9f;
  border-radius: 4px;

  font-weight: 700;
  font-size: 12px;

  color: #ffffff;

  margin-bottom: 8px;
`;

const Word = ({ word, meaning, part, finished }) => {
  const dispatch = useDispatch();

  const korPart = useSelector((state) => state.word.parts).filter(
    (partItem) => partItem.type === part
  )[0].desc;

  const currentChapter = useParams().chapter;

  const onDeleteWord = () => {
    dispatch(chapterActions.deleteWord({ title: currentChapter, word }));
  };

  const onFinishToggle = () => {
    dispatch(chapterActions.toggleFinish({ title: currentChapter, word }));
  };

  return (
    <WordBox onClick={onFinishToggle} className={finished && "finished"}>
      <CloseButton onClick={onDeleteWord} className="word-delete-btn" />
      <h3>{word}</h3>
      <PartBox>{korPart}</PartBox>
      <strong>{meaning}</strong>
    </WordBox>
  );
};

export default Word;

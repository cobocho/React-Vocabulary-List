import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { chapterActions } from "../../store/chapter-slice";
import BasicButton from "../UI/Buttons/BasicButton";
import CloseButton from "../UI/Buttons/CloseButton";
import Card from "../UI/Card";

const ChapterCard = styled(Card)`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 20px;
  margin-bottom: 16px;

  h2 {
    font-size: 28px;
    margin-bottom: 2px;
  }

  strong {
    font-weight: 700;
    font-size: 12px;
    color: #c7c7c7;
  }

  .chapter-btns {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .chapter-btns button {
    margin-left: 6px;
  }

  .chapter-delete-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Chapter = ({ title, finished, amount }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChapterClick = () => {
    navigate(`${title}`);
  };

  const onDeleteChapter = (event) => {
    event.stopPropagation();
    dispatch(chapterActions.deleteChapter(title));
  };

  const onEditChapter = (event) => {
    event.stopPropagation();
    const changedTitle = prompt("수정할 타이틀");
    dispatch(
      chapterActions.changeChapterTtile({ existingTitle: title, changedTitle })
    );
  };

  const onTestChapter = (event) => {
    event.stopPropagation();
  };

  return (
    <li>
      <ChapterCard onClick={onChapterClick}>
        <CloseButton onClick={onDeleteChapter} className="chapter-delete-btn" />
        <h2>{title}</h2>
        <strong>
          {finished} / {amount}
        </strong>
        <div className="chapter-btns">
          <BasicButton onClick={onEditChapter}>수정</BasicButton>
          <BasicButton onClick={onTestChapter}>테스트</BasicButton>
        </div>
      </ChapterCard>
    </li>
  );
};

export default Chapter;
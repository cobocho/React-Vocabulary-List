import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ChaptersGenerator from "./ChapterGenerator";
import ChaptersHeader from "./ChaptersHeader";
import Chapter from "./Chapter";
import { useEffect } from "react";
import { chapterActions } from "../../store/chapter-slice";

const ChaptersBox = styled.aside`
  display: inline-block;
  min-width: 300px;
`;

const Chapters = ({ className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const existingChapters = JSON.parse(localStorage.getItem("chapters"));
    if (existingChapters) {
      dispatch(chapterActions.setChapters(existingChapters));
    }
  }, [dispatch]);

  const isAddModeOn = useSelector((state) => state.chapter.addMode);

  let ChapterList = useSelector((state) => state.chapter.chapters);

  if (ChapterList) {
    ChapterList = ChapterList.map((chapter) => {
      return (
        <Chapter
          key={chapter.title}
          title={chapter.title}
          finished={chapter.finished}
          amount={chapter.amount}
        ></Chapter>
      );
    });
  }

  return (
    <ChaptersBox className={className}>
      <ChaptersHeader />
      {isAddModeOn && <ChaptersGenerator />}
      <ul>{ChapterList}</ul>
    </ChaptersBox>
  );
};

export default Chapters;

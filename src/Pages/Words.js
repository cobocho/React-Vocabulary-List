import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PlusButton from "../Components/UI/Buttons/PlusButton";
import CounterTitle from "../Components/UI/CounterTitle";
import Word from "../Components/Words/Word";
import NotFound from "./NotFound";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
`;

const WordList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const ChapterWords = () => {
  const navigate = useNavigate();

  const addWordHandler = () => {
    navigate(`edit`);
  };

  const { chapter } = useParams();

  const chapters = useSelector((state) => state.chapter.chapters);

  const existentChapter = chapters.some((chapterItem, idx) => {
    return chapterItem.title === chapter;
  });

  if (!existentChapter) {
    return <NotFound />;
  }

  const words = chapters.filter((chapterItem) => {
    return chapterItem.title === chapter;
  });

  return (
    <Fragment>
      <HeaderBox>
        <CounterTitle count={words.length} title={"Words"} />
        {<PlusButton onClick={addWordHandler} />}
      </HeaderBox>
      <Outlet />
      <WordList>
        {words[0] &&
          words[0].words.map((item) => {
            return <Word key={item.word} />;
          })}
      </WordList>
    </Fragment>
  );
};

export default ChapterWords;

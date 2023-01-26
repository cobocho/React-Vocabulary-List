import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
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
  console.log(useLocation());

  const [searchParams, setSearchParams] = useSearchParams();

  const { search } = useLocation();

  const addWordHandler = () => {
    navigate(`edit${search}`);
  };

  const { chapter } = useParams();

  const chapters = useSelector((state) => state.chapter.chapters);

  const existentChapter = chapters.some((chapterItem) => {
    return chapterItem.title === chapter;
  });

  if (!existentChapter) {
    return <NotFound />;
  }

  const words = chapters.filter((chapterItem) => {
    return chapterItem.title === chapter;
  })[0];

  const wordCounter = words.words.length - words.finished;

  return (
    <Fragment>
      <HeaderBox>
        <CounterTitle count={wordCounter} title={"Words"} />
        {<PlusButton onClick={addWordHandler} />}
      </HeaderBox>
      <Outlet />
      <WordList>
        {words &&
          words.words.map(({ word, meaning, part, finished }) => {
            return (
              <Word
                key={word}
                word={word}
                meaning={meaning}
                part={part}
                finished={finished}
              />
            );
          })}
      </WordList>
    </Fragment>
  );
};

export default ChapterWords;

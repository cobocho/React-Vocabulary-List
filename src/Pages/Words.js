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
import WordList from "../Components/Words/WordsList";
import NotFound from "./NotFound";

const HeaderBox = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const ShowButton = styled.button`
  display: flex;
  position: absolute;
  top: 9px;
  right: 30px;
  font-size: 22px;
  color: ${(props) => props.color};

  border: none;
  background-color: transparent;

  strong {
    position: relative;
    bottom: 4px;
    font-size: 30px;
    margin-left: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ChapterWords = () => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const { chapter } = useParams();

  const chapters = useSelector((state) => state.chapter.chapters);
  const isAddMode = pathname.split("/").includes("edit");
  const wordsData = chapters.filter((chapterItem) => {
    return chapterItem.title === chapter;
  })[0];
  const [searchParams, setSearchParams] = useSearchParams();
  const clickAddWordButtonHandler = () => {
    if (isAddMode) navigate(`/${chapter}${search}`);
    else navigate(`edit${search}`);
  };

  const isShowAll = searchParams.get("showAll") === "on" ? true : false;

  const toggleShowHandler = () => {
    let changedShowAll;
    if (isShowAll === true) changedShowAll = "off";
    else changedShowAll = "on";
    setSearchParams({ showAll: changedShowAll });
  };

  const existentChapter = chapters.some((chapterItem) => {
    return chapterItem.title === chapter;
  });

  if (!existentChapter) {
    return <NotFound />;
  }

  const wordCounter = wordsData.words.length - wordsData.finished;

  let filteredWord = [...wordsData.words];

  if (!isShowAll) {
    filteredWord = wordsData.words.filter((word) => !word.finished);
  }

  return (
    <Fragment>
      <HeaderBox>
        <CounterTitle count={wordCounter} title={"Words"} />
        <ShowButton
          onClick={toggleShowHandler}
          color={isShowAll ? "#939393" : "#D4D4D4"}
        >
          <p>Show Finished Word</p>
          <strong>???</strong>
        </ShowButton>
        {<PlusButton onClick={clickAddWordButtonHandler} />}
      </HeaderBox>
      <Outlet />
      <WordList words={filteredWord} />
    </Fragment>
  );
};

export default ChapterWords;

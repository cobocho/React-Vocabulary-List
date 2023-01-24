import { useSelector } from "react-redux";
import styled from "styled-components";
import ChaptersGenerator from "./ChapterGenerator";
import ChaptersHeader from "./ChaptersHeader";

const ChaptersBox = styled.aside`
  width: 300px;
`;

const Chapters = () => {
  const isAddModeOn = useSelector((state) => state.chapter.addMode);

  console.log(isAddModeOn);

  return (
    <ChaptersBox>
      <ChaptersHeader />
      {isAddModeOn && <ChaptersGenerator />}
    </ChaptersBox>
  );
};

export default Chapters;

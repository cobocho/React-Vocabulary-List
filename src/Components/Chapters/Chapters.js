import styled from "styled-components";
import ChaptersHeader from "./ChaptersHeader";

const ChaptersBox = styled.aside`
  width: 300px;
`;

const Chapters = () => {
  return (
    <ChaptersBox>
      <ChaptersHeader />
    </ChaptersBox>
  );
};

export default Chapters;

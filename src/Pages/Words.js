import { Fragment } from "react";
import styled from "styled-components";
import PlusButton from "../Components/UI/Buttons/PlusButton";
import CounterTitle from "../Components/UI/CounterTitle";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
`;

const ChapterWords = () => {
  return (
    <Fragment>
      <HeaderBox>
        <CounterTitle count={0} title={"Words"} />
        <PlusButton />
      </HeaderBox>
    </Fragment>
  );
};

export default ChapterWords;

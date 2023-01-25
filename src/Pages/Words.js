import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PlusButton from "../Components/UI/Buttons/PlusButton";
import CounterTitle from "../Components/UI/CounterTitle";
const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ChapterWords = () => {
  const navigate = useNavigate();

  const addWordHandler = () => {
    navigate(`edit`);
  };

  return (
    <Fragment>
      <HeaderBox>
        <CounterTitle count={0} title={"Words"} />
        <PlusButton onClick={addWordHandler} />
      </HeaderBox>
      <Outlet />
    </Fragment>
  );
};

export default ChapterWords;

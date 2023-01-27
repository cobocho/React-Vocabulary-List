import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Card from "../Components/UI/Card";

const TestCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const Test = () => {
  return <TestCard></TestCard>;
};

export default Test;

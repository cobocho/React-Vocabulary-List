import styled from "styled-components";
import BasicButton from "./BasicButton";

const BigButton = styled(BasicButton).attrs({
  className: "test-type-btn",
})`
  width: auto;
  padding: 10px;
  height: 40px;

  background-color: #a0a0a0;

  font-size: 20px;
  font-weight: 700;

  &:hover {
    background-color: #6c6c6c;
  }
`;

export default BigButton;

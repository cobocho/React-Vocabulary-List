import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const VocaHeader = styled.header`
  h1 {
    display: inline;
    font-size: 72px;
    color: black;
    letter-spacing: -0.05em;
    margin-bottom: 18px;
  }

  h1:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <VocaHeader>
      <h1 onClick={onClickHandler}>MY VOCA</h1>
    </VocaHeader>
  );
};

export default Header;

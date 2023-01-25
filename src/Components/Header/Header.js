import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const VocaHeader = styled.h1`
  font-size: 72px;
  color: black;
  letter-spacing: -0.05em;
  margin-bottom: 18px;
`;

const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <header onClick={onClickHandler}>
      <VocaHeader>MY VOCA</VocaHeader>
    </header>
  );
};

export default Header;

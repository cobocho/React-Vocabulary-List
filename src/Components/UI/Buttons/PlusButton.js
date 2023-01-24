import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-size: 40px;
  color: #a9a9a9;
  background-color: transparent;
`;

const PlusButton = ({ onClick }) => {
  return <Button onClick={onClick}>+</Button>;
};

export default PlusButton;

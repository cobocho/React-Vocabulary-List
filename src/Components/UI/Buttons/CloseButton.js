import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-size: 24px;
  color: #a9a9a9;
  background-color: transparent;
`;

const CloseButton = ({ onClick, id }) => {
  return (
    <Button id={id} onClick={onClick}>
      x
    </Button>
  );
};

export default CloseButton;

import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-size: 16px;
  color: #a9a9a9;
  background-color: transparent;
`;

const CloseButton = ({ onClick, id, className }) => {
  return (
    <Button className={className} id={id} onClick={onClick}>
      x
    </Button>
  );
};

export default CloseButton;

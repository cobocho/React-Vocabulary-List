import styled from "styled-components";

const Button = styled.button`
  width: 44px;
  height: 24px;
  border: none;
  color: #ffffff;
  background-color: #727272;
  border-radius: 4px;
  padding: 0;

  &:hover {
    cursor: pointer;
    background-color: #a0a0a0;
  }
`;

const BasicButton = ({ id, className, onClick, children, value }) => {
  return (
    <Button value={value} id={id} className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BasicButton;

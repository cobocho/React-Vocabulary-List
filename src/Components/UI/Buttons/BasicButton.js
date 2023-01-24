import styled from "styled-components";

const Button = styled.button`
  width: 44px;
  height: 24px;
  border: none;
  color: #ffffff;
  background-color: #727272;
  border-radius: 4px;
`;

const BasicButton = ({ id, className, onClick, children }) => {
  return (
    <Button id={id} className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BasicButton;

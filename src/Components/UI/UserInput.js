import { forwardRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding: 0;
  background-color: #eeeeee;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  text-align: center;
`;

const UserInput = forwardRef((props, ref) => {
  return (
    <Input
      ref={ref}
      type={props.type}
      max={props.max}
      min={props.min}
      id={props.id}
    ></Input>
  );
});

export default UserInput;

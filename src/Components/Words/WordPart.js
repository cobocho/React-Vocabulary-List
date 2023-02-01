import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { wordActions } from "../../store/word-slice";

const PartBtn = styled.button`
  width: 60px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: #eeeeee;
  font-size: 16px;

  &:hover {
    background-color: #c6c6c6;
  }
`;

const WordPart = ({ type, desc }) => {
  const dispatch = useDispatch();
  const selectedPart = useSelector((state) => state.word.selectedPart);

  const clickhandler = (event) => {
    event.preventDefault();
    if (type === selectedPart) {
      dispatch(wordActions.setSelectedPart(null));
      return;
    }
    dispatch(wordActions.setSelectedPart(type));
  };

  return (
    <Fragment>
      <PartBtn
        onClick={clickhandler}
        id={type}
        className={type === selectedPart ? "selected" : ""}
      >
        {desc}
      </PartBtn>
    </Fragment>
  );
};

export default WordPart;

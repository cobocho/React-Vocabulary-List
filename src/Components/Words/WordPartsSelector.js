import { useSelector } from "react-redux";
import styled from "styled-components";
import WordPart from "./WordPart";

const PartsBox = styled.div`
  width: 300px;
  height: 100px;
  margin-left: 24px;

  h2 {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .part-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  .selected {
    background-color: #c6c6c6;
    color: #ffffff;
  }
`;

const WordPartsSelector = () => {
  const partsList = useSelector((state) => state.word.parts);
  return (
    <PartsBox>
      <h2>품사</h2>
      <div className="part-list">
        {partsList.map(({ type, desc }) => {
          return <WordPart key={type} type={type} desc={desc} />;
        })}
      </div>
    </PartsBox>
  );
};

export default WordPartsSelector;

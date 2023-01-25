import Card from "../UI/Card";
const { default: styled } = require("styled-components");

const WordBox = styled(Card)`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Word = ({ word, meaning, part, finished }) => {
  return (
    <WordBox>
      <p>{word}</p>
    </WordBox>
  );
};

export default Word;

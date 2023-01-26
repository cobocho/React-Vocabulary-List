import styled from "styled-components";
import Word from "./Word";

const WordListBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const WordList = ({ words }) => {
  return (
    <WordListBox>
      {words &&
        words.map(({ word, meaning, part, finished }) => {
          return (
            <Word
              key={word}
              word={word}
              meaning={meaning}
              part={part}
              finished={finished}
            />
          );
        })}
    </WordListBox>
  );
};

export default WordList;

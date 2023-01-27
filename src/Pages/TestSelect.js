import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import BasicButton from "../Components/UI/Buttons/BasicButton";
import Card from "../Components/UI/Card";

const TestCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const TestSelectorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;

  p {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .test-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .test-selector .test-type-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .test-selector .finished-indludes-btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .selected {
    background-color: #515151;
  }
`;

const TestSelectButton = styled(BasicButton).attrs({
  className: "test-type-btn",
})`
  width: auto;
  padding: 10px;
  height: 50px;

  background-color: #a0a0a0;

  font-size: 20px;
  font-weight: 700;

  &:hover {
    background-color: #6c6c6c;
  }
`;

const CompleteButton = styled(TestSelectButton)`
  font-size: 40px;
  height: 63px;
  background-color: #bbbbbb;
`;

const TestSelect = () => {
  const [testType, setTestType] = useState(null);
  const [finishedIncludes, setFinishedIncludes] = useState(null);

  const typeClickHandler = (event) => {
    setTestType(event.target.value);
  };

  const includesClickHandler = (event) => {
    setFinishedIncludes(event.target.value);
  };

  const testTypes = [
    { type: "word", desc: "단어" },
    { type: "meaning", desc: "의미" },
    { type: "random", desc: "랜덤" },
  ];

  const typeButtons = testTypes.map((typeItem) => {
    return (
      <TestSelectButton
        key={typeItem.type}
        value={typeItem.type}
        onClick={typeClickHandler}
        className={typeItem.type === testType && "selected"}
      >
        {typeItem.desc}
      </TestSelectButton>
    );
  });

  const includes = [
    { includes: "includes", desc: "완료 단어 포함" },
    { includes: "notIncludes", desc: "완료 단어 미포함" },
  ];

  const includesButtons = includes.map((includesItem) => {
    return (
      <TestSelectButton
        key={includesItem.includes}
        value={includesItem.includes}
        onClick={includesClickHandler}
        className={includesItem.includes === finishedIncludes && "selected"}
      >
        {includesItem.desc}
      </TestSelectButton>
    );
  });

  const { chapter } = useParams();

  return (
    <TestCard>
      <TestSelectorBox>
        <p>테스트할 항목을 선택해주세요</p>
        <div className="test-selector">
          <div className="test-type-btns">{typeButtons}</div>
        </div>
        <p>완료된 단어 포함 유무를 선택해주세요</p>
        <div className="test-selector">
          <div className="finished-indludes-btns">{includesButtons}</div>
        </div>
      </TestSelectorBox>
      <Link
        to={`/${chapter}/test?type=${testType}&finished=${finishedIncludes}`}
      >
        <CompleteButton>TEST!</CompleteButton>
      </Link>
    </TestCard>
  );
};

export default TestSelect;

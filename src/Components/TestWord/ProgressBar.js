import styled from "styled-components";

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 14px;
    color: #939393;
    margin-bottom: 4px;
  }
`;

const ProgressBarBackground = styled.div`
  width: 240px;
  height: 20px;
  border-radius: 12px;
  background-color: #eeeeee;
`;

const ProgressBarFill = styled(ProgressBarBackground)`
  width: ${(props) => props.percent};
  height: 100%;
  border-radius: 12px;
  background-color: #000000;

  transition: width 1s ease-in-out;
`;

const ProgressBar = ({ progress, entire }) => {
  const fill = (progress / entire).toFixed(2) * 100 + "%";

  return (
    <ProgressBox>
      <p>
        {progress} / {entire}
      </p>
      <ProgressBarBackground>
        <ProgressBarFill percent={fill} />
      </ProgressBarBackground>
    </ProgressBox>
  );
};

export default ProgressBar;

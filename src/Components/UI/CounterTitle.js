import { Fragment } from "react";
import styled from "styled-components";

import PlusButton from "./Buttons/PlusButton";

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 20px;
    letter-spacing: -0.05em;
    line-height: 27px;
    margin-right: 8px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #000000;
  }

  .counter strong {
    position: relative;
    top: 1px;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;

const CounterTitle = (props) => {
  return (
    <Fragment>
      <TitleBox>
        <div className="title">
          <p>{props.title}</p>
          <div className="counter">
            <strong>{props.count}</strong>
          </div>
        </div>
      </TitleBox>
    </Fragment>
  );
};

export default CounterTitle;

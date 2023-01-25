import Card from "../Components/UI/Card";

const { default: styled } = require("styled-components");

const NotFoundText = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;

  h1 {
    font-size: 72px;
  }
`;

const NotFound = () => {
  return (
    <NotFoundText>
      <h1>Not Found</h1>
    </NotFoundText>
  );
};

export default NotFound;

import Card from "../Components/UI/Card";

const { default: styled } = require("styled-components");

const HomeBox = styled(Card)`
  width: 100%;
  height: 500px;
`;

const Home = () => {
  return <HomeBox></HomeBox>;
};

export default Home;

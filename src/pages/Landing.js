import styled from "styled-components";
import CardList from "../components/CardList";

const Landing = () => {
  return (
    <LandingPage>
      <HeaderClass>Welcome to Pokemon battle</HeaderClass>
      <CardList />
      <h2>Select your first Pokemon</h2>
    </LandingPage>
  );
};

const LandingPage = styled.main`
  display: grid;
  justify-content: center;
`;

const HeaderClass = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.5rem;
`;

export default Landing;

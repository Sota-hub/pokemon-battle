import { useState } from "react";
import styled from "styled-components";
import CardList from "../components/CardList";

const Landing = () => {
  const [userName, setUserName] = useState("");
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");

  return (
    <LandingPage>
      <HeaderClass>Welcome to Pokemon battle</HeaderClass>
      <LandingForm>
        <FormItem>
          <InputLabel>Enter a username to get started</InputLabel>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <InputLabel>Select your first Pokemon</InputLabel>
          <CardList />
        </FormItem>
        <FormItem>
          <InputLabel>Select your second Pokemon</InputLabel>
          <CardList />
        </FormItem>
      </LandingForm>
    </LandingPage>
  );
};

const LandingPage = styled.main`
  display: grid;
  gap: 1rem;
  justify-content: center;
  align-content: baseline;
  height: 100%;
`;

const HeaderClass = styled.h1`
  display: grid;
  align-items: center;
  text-align: center;
  height: 10vh;
  font-size: 1.5rem;
`;

const LandingForm = styled.form`
  display: grid;
`;

const FormItem = styled.div`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  text-transform: capitalize;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 0.4rem;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

const InputLabel = styled.label`
  font-size: 0.7rem;
`;

export default Landing;

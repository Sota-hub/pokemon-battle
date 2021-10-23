import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import CardListButtons from "../components/CardListButtons";
import { userActions } from "../store/userSlice";
import useSound from "use-sound";
import pokemon from "../sounds/Pokemon.mp3";
import ReactAudioPlayer from "react-audio-player";
import title from "../sounds/Title.mp3";
const Landing = () => {
  const [play, { stop }] = useSound(pokemon);
  const [userName, setUserName] = useState("");
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userActions.createUser({
        userName,
        firstChoice: JSON.parse(firstChoice),
        secondChoice: JSON.parse(secondChoice),
      })
    );
    history.push("/ready");
    // play();
  };

  const onClickHandler = () => {
    play();
    setTimeout(() => {
      stop();
    }, 5000);
  };

  return (
    <LandingPage>
      {/* <Audio> */}
      <ReactAudioPlayer src={title} autoPlay controls />
      {/* </Audio> */}
      <HeaderClass>Welcome to Pokemon battle</HeaderClass>
      <LandingForm onSubmit={handleSubmit}>
        <FormItem>
          <InputLabel>Enter a username to get started</InputLabel>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <InputLabel>Select your first Pokemon</InputLabel>
          <CardListButtons choice="firstChoice" setChoice={setFirstChoice} />
        </FormItem>
        <FormItem>
          <InputLabel>Select your second Pokemon</InputLabel>
          <CardListButtons choice="secondChoice" setChoice={setSecondChoice} />
        </FormItem>
        <StartButton type="submit" onClick={onClickHandler}>
          Start
        </StartButton>
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

const StartButton = styled.button`
  text-align: center;
  justify-self: center;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 50%;
  border: none;
`;

const Audio = styled.div`
  display: none;
`;

export default Landing;

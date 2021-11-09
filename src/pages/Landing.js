import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import CardListButtons from "../components/LandingCards/CardListButtons";
import { userActions } from "../store/userSlice";
import useSound from "use-sound";
import pokemon from "../sounds/Pokemon.mp3";
import ReactAudioPlayer from "react-audio-player";
import title from "../sounds/Title.mp3";
import { pickRandomFourMoves } from "../helpers/customFunctions";
import { fetchMove } from "../helpers/customFunctions";

const Landing = () => {
  const [play, { stop }] = useSound(pokemon);
  const [isTouched, setIsTouched] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const enteredNameIsValid = userName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && isTouched;

  const nameInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setUserName("");
    setIsTouched(false);

    const firstPokemon = JSON.parse(firstChoice);
    const secondPokemon = JSON.parse(secondChoice);

    dispatch(
      userActions.createUser({
        userName,
        firstChoice: firstPokemon,
        secondChoice: secondPokemon,
      })
    );

    // ============== Get first and second pokemon's moves information ==============
    const firstUserPokemonMoves = pickRandomFourMoves(firstPokemon.moves);
    const secondUserPokemonMoves = pickRandomFourMoves(firstPokemon.moves);

    const conditions = (url) => {
      if (url.length === 33) return +url.slice(-2, -1);
      if (url.length === 34) return +url.slice(-3, -1);
      if (url.length === 35) return +url.slice(-4, -1);
    };

    const returnData = (data) => {
      return {
        name: data.name,
        power: data.power,
        accuracy: data.accuracy,
        pp: data.pp,
      };
    };

    const firstIds = firstUserPokemonMoves.map((move) => {
      const url = move.move.url;
      return conditions(url);
    });

    const secondIds = secondUserPokemonMoves.map((move) => {
      const url = move.move.url;
      return conditions(url);
    });

    const firstData = await fetchMove(firstIds);
    const secondData = await fetchMove(secondIds);

    const firstMoves = firstData.map((data) => {
      return returnData(data);
    });

    const secondMoves = secondData.map((data) => {
      return returnData(data);
    });
    // ==============================================================================

    dispatch(
      userActions.storeUserFirstPokemonInfo({
        name: firstPokemon.name,
        moves: [...firstMoves],
        hp: firstPokemon.stats[0].base_stat,
        attack: firstPokemon.stats[1].base_stat,
        defence: firstPokemon.stats[2].base_stat,
        speed: firstPokemon.stats[5].base_stat,
      })
    );

    dispatch(
      userActions.storeUserSecondPokemonInfo({
        name: secondPokemon.name,
        moves: [...secondMoves],
        hp: secondPokemon.stats[0].base_stat,
        attack: secondPokemon.stats[1].base_stat,
        defence: secondPokemon.stats[2].base_stat,
        speed: secondPokemon.stats[5].base_stat,
      })
    );

    history.replace("/ready");
  };

  const onClickHandler = () => {
    play();
    setTimeout(() => {
      stop();
    }, 3500);
  };

  return (
    <LandingPage>
      <ReactAudioPlayer
        style={{ display: "none" }}
        src={title}
        autoPlay
        controls
        volume={0.3}
      />
      <HeaderClass>Welcome to Pokemon battle</HeaderClass>
      <LandingForm onSubmit={handleSubmit}>
        <FormItem>
          <InputLabel>Enter a username to get started</InputLabel>
          <Input
            type="string"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onBlur={nameInputBlurHandler}
            required
          />
          {nameInputIsInvalid && <Error>Name must not be empty.</Error>}
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
  height: 100vh;
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
  height: 80vh;
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
  position: relative;
  border: none;
  border-radius: 0.4rem;
  outline: none;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  font: inherit;
  font-size: 0.9rem;
`;

const Error = styled.p`
  color: #b40e0e;
  position: absolute;
  top: 30%;
  right: 22%;
`;

const InputLabel = styled.label`
  font-size: 0.8rem;
`;

const StartButton = styled.button`
  text-align: center;
  justify-self: center;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  width: 30%;
  border: none;
  font: inherit;
  text-transform: uppercase;
`;

export default Landing;

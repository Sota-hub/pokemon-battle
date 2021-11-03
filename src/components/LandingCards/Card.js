import { useState } from "react";

import styled from "styled-components";
import Stats from "../Stats";

const Card = ({ dataItem }) => {
  const [isShown, setIsShown] = useState(false);

  const mouseHover = () => {
    setIsShown(true);
  };

  const mouseLeave = () => {
    setIsShown(false);
  };

  return (
    <CardContainer onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
      <ImageContainer>
        <Image
          src={dataItem.sprites.other["official-artwork"].front_default}
          alt={dataItem.forms[0].name}
        />
      </ImageContainer>
      <p>{dataItem.forms[0].name}</p>
      {isShown && <Stats dataItem={dataItem} />}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 10vh;
  width: auto;
`;

const Image = styled.img`
  max-height: 100%;
`;
export default Card;

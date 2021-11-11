import styled from "styled-components";

const Card = ({ pokemonName, imageSrc }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageSrc} alt={pokemonName} />
      </ImageContainer>
      <p>{pokemonName}</p>
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

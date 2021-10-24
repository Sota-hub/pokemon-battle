import styled from "styled-components";

const Card = ({ dataItem }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={dataItem.sprites.other["official-artwork"].front_default}
          alt={dataItem.forms[0].name}
        />
      </ImageContainer>
      <p>{dataItem.forms[0].name}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
`;

const ImageContainer = styled.div`
  height: 10vh;
  width: auto;
`;

const Image = styled.img`
  max-height: 100%;
`;
export default Card;

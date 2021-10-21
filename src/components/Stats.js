import styled from "styled-components";

const Stats = ({ dataItem }) => {
  console.log(dataItem);
  return (
    <Outer>
      <StatsContainer>
        <StatContainer>
          <OddStatName>No:</OddStatName>
          <OddStatValue>{dataItem.id}</OddStatValue>
        </StatContainer>
        <TypeContainer>
          {dataItem.types.map((type) => (
            <TypeContent>{type.type.name}</TypeContent>
          ))}
        </TypeContainer>
        <StatContainer>
          <EvenStatName>{dataItem.stats[0].stat.name}</EvenStatName>
          <EvenStatValue>{dataItem.stats[0].base_stat}</EvenStatValue>
        </StatContainer>
        <StatContainer>
          <OddStatName>{dataItem.stats[1].stat.name}</OddStatName>
          <OddStatValue>{dataItem.stats[1].base_stat}</OddStatValue>
        </StatContainer>
        <StatContainer>
          <EvenStatName>{dataItem.stats[2].stat.name}</EvenStatName>
          <EvenStatValue>{dataItem.stats[2].base_stat}</EvenStatValue>
        </StatContainer>
        <StatContainer>
          <OddStatName>{dataItem.stats[3].stat.name}</OddStatName>
          <OddStatValue>{dataItem.stats[3].base_stat}</OddStatValue>
        </StatContainer>
        <StatContainer>
          <EvenStatName>{dataItem.stats[4].stat.name}</EvenStatName>
          <EvenStatValue>{dataItem.stats[4].base_stat}</EvenStatValue>
        </StatContainer>
        <StatContainer>
          <OddStatName>{dataItem.stats[5].stat.name}</OddStatName>
          <OddStatValue>{dataItem.stats[5].base_stat}</OddStatValue>
        </StatContainer>
      </StatsContainer>
    </Outer>
  );
};

const Outer = styled.div`
  margin: 10px 5px;
  border: 3px solid #404040;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  animation-name: fadeIn;
  animation-duration: 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StatsContainer = styled.div`
  background: #475e80;
  border: 1.5px solid #475e80;
  border-radius: 4px;
`;

const TypeContainer = styled.div`
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
`;

const StatContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const OddStatName = styled.p`
  padding: 5px;
  margin: 1px 0px;
  color: white;
  background: #7184a0;
  border-right: 5px solid #e1e7ee;
  text-shadow: 1px 1px 2px #5c5b59;
`;

const EvenStatName = styled.p`
  padding: 5px;
  margin: 1px 0px;
  color: white;
  background: #7e93b3;
  border-right: 5px solid #e1e7ee;
  text-shadow: 1px 1px 2px #5c5b59;
`;

const OddStatValue = styled.p`
  padding: 5px;
  margin: 1px 0px;
  text-align: right;
  background: #c3cfe3;
  text-shadow: 1px 1px 2px #999287;
`;

const EvenStatValue = styled.p`
  padding: 5px;
  margin: 1px 0px;
  text-align: right;
  background: #dde4f0;
  text-shadow: 1px 1px 2px #999287;
`;

const TypeContent = styled.div`
  margin: 0px 2px;
  font-size: 12px;
  border: 3px solid white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

export default Stats;

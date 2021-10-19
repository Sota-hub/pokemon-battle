const Card = ({ dataItem }) => {
  return (
    <div>
      <img src={dataItem.sprites.front_default} alt={dataItem.forms[0].name} />
      <p>{dataItem.forms[0].name}</p>
    </div>
  );
};

export default Card;

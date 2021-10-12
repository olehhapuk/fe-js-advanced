function Card(props) {
  console.log(props);

  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <img src={props.image} alt="PC Setup" width={500} />
    </div>
  );
}

export default Card;

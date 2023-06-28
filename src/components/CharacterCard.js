export default function CharacterCard(props) {
  function test() {
    console.log("de");
  }
  return (
    <div className="card" onClick={test}>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

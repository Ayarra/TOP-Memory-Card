export default function CharacterCard({
  id,
  name,
  image,

  handleClick,
}) {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

import CharacterCard from "./CharacterCard";

export default function GameBoard({ characters }) {
  return (
    <div className="gameboard">
      Get points by clicking on an image but don't click on any more than once!
      <div className="gameboardDisplay">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}

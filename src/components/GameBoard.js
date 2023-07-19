import { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";

export default function GameBoard({ updateScore, updateHighScore, loseGame }) {
  // CHARACTERS STATE
  const [characters, setCharacters] = useState([]);
  const [charactersID, setCharactersID] = useState(() => {
    return generateCharactersArray();
  });

  function generateCharactersArray() {
    let randomArr = [];
    for (let i = 0; i < 4; i++) {
      randomArr.push(Math.floor(Math.random() * 100) + 1);
    }

    return randomArr;
  }

  function handleClick(id) {
    setCharacters(
      characters.map((char) => {
        if (char.id === id && !char.clicked) {
          updateScore();
          updateHighScore();

          return { ...char, clicked: true };
        } else if (char.id === id && char.clicked) {
          console.log("test");
          loseGame();
        }
        return char;
      })
    );
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${charactersID}`)
      .then((results) => results.json())
      .then((data) => {
        const newSet = data.map((el) => ({
          id: el.id,
          name: el.name,
          image: el.image,
          clicked: false,
        }));
        setCharacters(newSet);
      });
  }, []);

  console.log(characters);
  return (
    <div className="gameboard">
      <p className="instructions">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div className="gameboardDisplay">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

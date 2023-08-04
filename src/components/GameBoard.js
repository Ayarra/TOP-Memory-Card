import { useEffect, useState } from "react";
import { generateCharactersArray } from "./helpers";

import CharacterCard from "./CharacterCard";

export default function GameBoard({
  scoreGoal,
  handleScoreGoal,
  updateScore,
  updateHighScore,
  loseGame,
}) {
  // CHARACTERS STATE
  const [characters, setCharacters] = useState([]);

  function handleClick(id) {
    const newArray = [...characters];
    // mini algo for shuffling
    let shuffledCharacters = newArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    // handling double click
    setCharacters(
      characters.map((char) => {
        if (char.id === id && !char.clicked) {
          updateScore();
          handleScoreGoal((prevGoal) => prevGoal + 1);
          updateHighScore();

          return { ...char, clicked: true };
        } else if (char.id === id && char.clicked) {
          loseGame();
        }
        return char;
      })
    );
  }

  const initializeCharacters = async (scoreGoal) => {
    const randomCharacters = await getCharacters(scoreGoal);
    setCharacters(randomCharacters);
  };

  async function getCharacters(goal) {
    let randomArr = generateCharactersArray(goal);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomArr}`
    );
    const body = await response.json();
    const results = body.map((el) => ({
      id: el.id,
      name: el.name,
      image: el.image,
      clicked: false,
    }));

    return results;
  }

  useEffect(() => {
    if (!characters.length) {
      initializeCharacters(scoreGoal + 4);
    } else if (scoreGoal === characters.length) {
      initializeCharacters(scoreGoal + 4);
      handleScoreGoal(0);
    }
  }, [characters, scoreGoal]);

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

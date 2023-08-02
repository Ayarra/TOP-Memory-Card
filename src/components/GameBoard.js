import { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";

export default function GameBoard({
  score,
  scoreGoal,
  handleScoreGoal,
  updateScore,
  updateHighScore,
  loseGame,
}) {
  // CHARACTERS STATE
  const [characters, setCharacters] = useState([]);

  function generateCharactersArray(scoreGoal) {
    let randomArr = [];
    for (let i = 0; i < scoreGoal; i++) {
      randomArr.push(Math.floor(Math.random() * 100) + 1);
    }

    return randomArr;
  }

  function handleClick(id) {
    const newArray = [...characters];
    // mini algo for shuffling
    let shuffledCharacters = newArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    // handling double click
    setCharacters(
      shuffledCharacters.map((char) => {
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

  async function fetchCharacters(scoreGoal) {
    let randomArr = generateCharactersArray(scoreGoal);
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${randomArr}`
    );
    const fetchedCharacters = await res.json();

    return fetchedCharacters;
  }

  async function cleanCharacters(scoreGoal) {
    const characters = await fetchCharacters(scoreGoal);
    const newSet = await characters.map((el) => ({
      id: el.id,
      name: el.name,
      image: el.image,
      clicked: false,
    }));
    return newSet;
  }

  const initializeCharacters = async (scoreGoal) => {
    const randomCharacters = await cleanCharacters(scoreGoal);
    setCharacters(await randomCharacters);
  };

  function levelUp(scoreGoal) {
    initializeCharacters(scoreGoal);
  }

  if (!characters.length) {
    initializeCharacters(scoreGoal + 4);
  } else if (scoreGoal === characters.length) {
    levelUp(scoreGoal + 4);
    handleScoreGoal(0);
  }
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

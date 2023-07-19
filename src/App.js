import { useEffect, useRef, useState } from "react";

import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import ScoreBoard from "./components/Scoreboard";

import "./App.css";
import {
  useGameOver,
  useScore,
  useUpdateGameOver,
} from "./Contexts/ScoreContext";

function App() {
  // GLOBAL STATE
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // context
  // const score = useScore();
  // const gameOver = useGameOver();
  // const setGameOver = useUpdateGameOver();

  // function shuffleCharacters(array) {
  //   const newArray = [...array];
  //   let shuffled = newArray
  //     .map((value) => ({ value, sort: Math.random() }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({ value }) => value);

  //   setCharacters(shuffled);
  // }

  function updateScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function updateHighScore() {
    setHighScore((prevHighScore) => prevHighScore + 1);
  }

  function loseGame() {
    setScore(0);
    setGameOver(true);
  }

  return (
    <>
      <ScoreBoard highScore={highScore} score={score} />
      {!gameOver && (
        <GameBoard
          updateScore={updateScore}
          updateHighScore={updateHighScore}
          loseGame={loseGame}
        />
      )}
      {gameOver && <GameOver setGameOver={setGameOver} />}
    </>
  );
}

export default App;

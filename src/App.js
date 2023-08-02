import { useState } from "react";

import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import ScoreBoard from "./components/Scoreboard";

import "./App.css";

function App() {
  // GLOBAL STATE
  const [score, setScore] = useState(0);
  const [scoreGoal, setScoreGoal] = useState(0);

  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [counter, setCounter] = useState();

  function updateScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function updateHighScore() {
    if (score < highScore);
    else setHighScore((prevHigh) => prevHigh + 1);
  }

  function loseGame() {
    if (score > highScore) setHighScore(score);
    setScore(0);
    setScoreGoal(0);
    setGameOver(true);
  }

  return (
    <>
      <ScoreBoard highScore={highScore} score={score} />
      {!gameOver && (
        <GameBoard
          score={score}
          updateScore={updateScore}
          scoreGoal={scoreGoal}
          handleScoreGoal={setScoreGoal}
          updateHighScore={updateHighScore}
          loseGame={loseGame}
          gameOver={gameOver}
        />
      )}
      {gameOver && <GameOver setGameOver={setGameOver} />}
    </>
  );
}

export default App;

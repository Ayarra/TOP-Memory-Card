import { createContext, useContext, useState } from "react";

// Score Context
const ScoreContext = createContext(0);
export function useScore() {
  return useContext(ScoreContext);
}

// UpdateScore Context
const UpdateScoreContext = createContext();

export function useUpdateScore() {
  return useContext(UpdateScoreContext);
}

// Gameover Context
const GameOverContext = createContext(0);

export function useGameOver() {
  return useContext(GameOverContext);
}

// UpdateGameOver Context
const UpdateGameOverContext = createContext(0);

export function useUpdateGameOver() {
  return useContext(UpdateGameOverContext);
}

// Component

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function updateScore(clicked) {
    if (!clicked) setScore((prevScore) => prevScore + 1);
    else {
      setScore(0);
    }
  }
  function UpdateGameOver(state) {
    setGameOver(state);
  }

  return (
    <GameOverContext.Provider value={gameOver}>
      <UpdateGameOverContext.Provider value={UpdateGameOver}>
        <ScoreContext.Provider value={score}>
          <UpdateScoreContext.Provider value={updateScore}>
            {children}
          </UpdateScoreContext.Provider>
        </ScoreContext.Provider>
      </UpdateGameOverContext.Provider>
    </GameOverContext.Provider>
  );
}

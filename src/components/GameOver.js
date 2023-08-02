export default function GameOver({ setGameOver }) {
  return (
    <div className="gameOver">
      <p>Game Over</p>
      <button className="replay" onClick={() => setGameOver()}>
        Replay
      </button>
    </div>
  );
}

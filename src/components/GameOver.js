export default function GameOver({ setGameOver }) {
  return (
    <div>
      Game Over
      <button onClick={() => setGameOver()}>Replay</button>
    </div>
  );
}

export default function ScoreBoardDisplay({ highScore, score }) {
  return (
    <div className="display">
      <div>
        <span>Score</span> {score}
      </div>
      <div>
        <span>Best Score</span> {highScore}
      </div>
    </div>
  );
}

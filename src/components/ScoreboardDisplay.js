// import { useScore } from "../Contexts/ScoreContext";

export default function ScoreBoardDisplay({ highScore, score }) {
  // const score = useScore();
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

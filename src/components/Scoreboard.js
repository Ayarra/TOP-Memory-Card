import logo from "../imgs/Rick-And-Morty-Memory-Game-6-27-2023.png";
import ScoreBoardDisplay from "./ScoreboardDisplay";

export default function ScoreBoard({ highScore, score }) {
  return (
    <div className="scoreboard">
      <img src={logo} alt="Rick and Morty Game Logo" />
      <ScoreBoardDisplay highScore={highScore} score={score} />
    </div>
  );
}

import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/Scoreboard";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1,32")
      .then((results) => results.json())
      .then((data) => {
        const newSet = data.map((el) => ({
          id: el.id,
          name: el.name,
          image: el.image,
        }));
        setCharacters(newSet);
      });
  }, []);

  return (
    <div>
      <ScoreBoard />
      <GameBoard characters={characters} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Enemy from "./components/Enemy";
import Gameboard from "./components/Gameboard";
import Gameover from "./components/Gameover";
import Highscore from "./components/Highscore";
import Player from "./components/Player";

interface Position {
  top: number;
  left: number;
}

const generateRandomPosition = () => ({
  top: Math.floor(Math.random() * (window.innerHeight - 40)),
  left: Math.floor(Math.random() * (window.innerWidth - 40)),
});

const App: React.FC = () => {
  const [playerPosition, setPlayerPosition] = useState<Position>({
    top: 0,
    left: 0,
  });
  const [enemies, setEnemies] = useState<Position[]>(() => {
    const initialEnemies = Array.from({ length: 15 }, generateRandomPosition);
    return initialEnemies;
  });

  const checkCollision = (playerRect: DOMRect, enemyRect: DOMRect) => {
    return !(
      playerRect.right < enemyRect.left ||
      playerRect.left > enemyRect.right ||
      playerRect.bottom < enemyRect.top ||
      playerRect.top > enemyRect.bottom
    );
  };

  useEffect(() => {
    const playerElement = document.getElementById("player");
    if (playerElement) {
      const playerRect = playerElement.getBoundingClientRect();

      enemies.forEach((enemy, index) => {
        const enemyElement = document.getElementById(`enemy-${index}`);
        if (enemyElement) {
          const enemyRect = enemyElement.getBoundingClientRect();
          if (checkCollision(playerRect, enemyRect)) {
            setEnemies((prevEnemies) =>
              prevEnemies.filter((_, i) => i !== index)
            );
          }
        }
      });
    }
  }, [playerPosition, enemies]);

  const score = (15 - enemies.length) * 10;
  const isGameOver = enemies.length === 0;

  return (
    <>
      {isGameOver ? (
        <Gameover />
      ) : (
        <>
          <Highscore score={score} />
          <Gameboard>
            {enemies.map((position, index) => (
              <Enemy
                key={index}
                id={`enemy-${index}`}
                position={position}
                onPositionChange={() => {}}
              />
            ))}
            <Player onPositionChange={setPlayerPosition} id="player" />
          </Gameboard>
        </>
      )}
    </>
  );
};

export default App;

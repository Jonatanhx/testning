// Player.tsx
import React, { useEffect, useRef, useState } from "react";

interface Position {
  top: number;
  left: number;
}

interface PlayerProps {
  onPositionChange: (position: Position) => void;
  id: string;
}

const Player: React.FC<PlayerProps> = ({ onPositionChange, id }) => {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const playerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "w":
      case "W":
        setPosition((prev) => ({ ...prev, top: Math.max(prev.top - 40, 0) }));
        break;
      case "a":
      case "A":
        setPosition((prev) => ({ ...prev, left: Math.max(prev.left - 40, 0) }));
        break;
      case "s":
      case "S":
        setPosition((prev) => ({ ...prev, top: prev.top + 40 }));
        break;
      case "d":
      case "D":
        setPosition((prev) => ({ ...prev, left: prev.left + 40 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    onPositionChange(position);
  }, [position, onPositionChange]);

  return (
    <div
      id={id}
      ref={playerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="bg-red-500"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: "40px",
        height: "40px",
      }}
    />
  );
};

export default Player;

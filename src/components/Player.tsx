// Player.tsx
import { useEffect, useRef, useState } from "react";

export default function Player() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const playerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "w":
      case "W":
        setPosition((prev) => ({ ...prev, top: Math.max(prev.top - 20, 0) }));
        break;
      case "a":
      case "A":
        setPosition((prev) => ({ ...prev, left: Math.max(prev.left - 20, 0) }));
        break;
      case "s":
      case "S":
        setPosition((prev) => ({ ...prev, top: prev.top + 20 }));
        break;
      case "d":
      case "D":
        setPosition((prev) => ({ ...prev, left: prev.left + 20 }));
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

  return (
    <div
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
}

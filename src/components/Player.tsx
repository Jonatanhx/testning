import { useState } from "react";

export default function Player() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "w":
      case "W":
        setPosition((prev) => ({ ...prev, top: prev.top - 20 }));
        break;
      case "a":
      case "A":
        setPosition((prev) => ({ ...prev, left: prev.left - 20 }));
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

  return (
    <main className="bg-blueprint h-screen w-screen">
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative bg-red-500"
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: "40px",
          height: "40px",
        }}
      />
    </main>
  );
}

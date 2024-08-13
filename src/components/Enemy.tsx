// Enemy.tsx
import React from "react";

interface EnemyProps {
  id: string;
  position: { top: number; left: number };
  onPositionChange: (position: { top: number; left: number }) => void;
}

const Enemy: React.FC<EnemyProps> = ({ id, position }) => {
  return (
    <div
      id={id}
      className="bg-yellow-400"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: "15px",
        height: "15px",
      }}
    />
  );
};

export default Enemy;

// Gameboard.tsx
import React from "react";

export default function Gameboard({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-blueprint h-screen w-screen relative overflow-hidden">
      {children}
    </main>
  );
}

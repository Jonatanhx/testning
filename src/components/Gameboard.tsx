import React from "react";

export default function Gameboard({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-screen relative overflow-hidden">
      {children}
    </main>
  );
}

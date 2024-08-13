interface HighscoreProps {
  score: number;
}
export default function Highscore({ score }: HighscoreProps) {
  return (
    <div className="flex items-center justify-center pt-4">
      <h1 className="text-white text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Points: {score}
      </h1>
    </div>
  );
}

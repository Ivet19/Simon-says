import { useState } from "react";
import "./App.css";

const COLORS = ["red", "green", "blue", "yellow"];

function App() {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [face, setFace] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const startGame = () => {
    const first = Math.floor(Math.random() * 4);
    setSequence([first]);
    setUserSequence([]);
    setLevel(1);
    setIsPlaying(true);
    setShowResult(false);
    setScore(0);
    setFace("");
    setTimeout(() => playSequence([first]), 500);
  };

  // Muestra la secuencia al usuario
  const playSequence = (seq: number[]) => {
    let i = 0;
    const interval = setInterval(() => {
      setActiveIndex(seq[i]);
      setTimeout(() => setActiveIndex(null), 400);
      i++;
      if (i >= seq.length) {
        clearInterval(interval);
      }
    }, 700);
  };

  const handleUserClick = (idx: number) => {
    if (!isPlaying || activeIndex !== null) return;
    const newUserSeq = [...userSequence, idx];
    setUserSequence(newUserSeq);

    if (sequence[newUserSeq.length - 1] !== idx) {
      finishGame(newUserSeq.length - 1);
      return;
    }

    if (newUserSeq.length === sequence.length) {
      if (sequence.length === 10) {
        finishGame(10);
        return;
      }

      const next = Math.floor(Math.random() * 4);
      const newSeq = [...sequence, next];
      setSequence(newSeq);
      setUserSequence([]);
      setLevel(sequence.length + 1);
      setTimeout(() => playSequence(newSeq), 800);
    }
  };

  const finishGame = (finalLevel: number) => {
    setIsPlaying(false);
    setShowResult(true);
    setScore(finalLevel);
    if (finalLevel < 5) setFace("😢");
    else if (finalLevel < 9) setFace("😊");
    else setFace("🤩");
  };

  return (
    <div className="simon-container">
      <h1>Simon Says</h1>
      <div className="buttons-row">
        {COLORS.map((color, idx) => (
          <button
            key={color}
            className={`simon-btn ${color} ${
              activeIndex === idx ? "active" : ""
            }`}
            onClick={() => handleUserClick(idx)}
            disabled={!isPlaying || activeIndex !== null}
          />
        ))}
      </div>
      <div className="controls">
        {!isPlaying && !showResult && (
          <button onClick={startGame}>Iniciar Juego</button>
        )}
        {isPlaying && <p>Nivel: {level}</p>}
        {showResult && (
          <div>
            <p>Tu nota: {score}/10</p>
            <span style={{ fontSize: "3rem" }}>{face}</span>
            <div>
              <button onClick={startGame}>Jugar de nuevo</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// components/Timer.tsx
"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  todo: {
    id: string;
    title: string;
    duration: number;
    completed: boolean;
    started: boolean;
  };
  onComplete: (id: string) => void;
  onExit: () => void;
}

export default function Timer({ todo, onComplete, onExit }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(todo.duration * 60); // duration in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(todo.id);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onComplete, todo.id]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="timer-screen">
      <h1>{todo.title}</h1>
      <div className="timer">{formatTime(timeLeft)}</div>
      <button onClick={onExit}>Exit</button>
    </div>
  );
}

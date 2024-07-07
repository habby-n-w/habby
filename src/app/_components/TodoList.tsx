// components/TodoList.tsx
"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";
import Timer from "./Timer";

interface Todo {
  id: string;
  title: string;
  duration: number; // duration in minutes
  completed: boolean;
  started: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState<number | string>("");
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const addTodo = () => {
    if (title && duration) {
      setTodos([
        ...todos,
        { id: uuidv4(), title, duration: Number(duration), completed: false, started: false },
      ]);
      setTitle("");
      setDuration("");
    }
  };

  const startTodo = (todo: Todo) => {
    setCurrentTodo(todo);
  };

  const completeTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true, started: true } : todo
    ));
    setCurrentTodo(null);
  };

  const exitTimer = () => {
    setCurrentTodo(null);
  };

  return (
    <div className="todo-list">
      {currentTodo ? (
        <Timer todo={currentTodo} onComplete={completeTodo} onExit={exitTimer} />
      ) : (
        <>
          <h1 className="title">To Do List</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="task-input"
            />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="duration-select"
            >
              <option value="" disabled>Select Duration</option>
              <option value="30">30 mins</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="180">3 hours</option>
            </select>
            <button onClick={addTodo}><AiOutlinePlus /></button>
          </div>
          <ul className="todo-items">
            {todos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <span>{todo.title}</span>
                <span>{todo.duration} mins</span>
                {!todo.completed && !todo.started && (
                  <button onClick={() => startTodo(todo)} className="start-button">Start Now</button>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

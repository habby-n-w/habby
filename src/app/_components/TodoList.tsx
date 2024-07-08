"use client";
import { useTodoStore } from "@/store/todoStore";
import { BadgeCheck, Ban } from "lucide-react";
import { useEffect, useState } from "react";
import CompleteTask from "./completeTask";

type Todo = {
  id: string;
  title: string;
  duration: number;
  completed: boolean;
  started: boolean;
};

const TodoList = () => {
  const { todos, toggleTodo } = useTodoStore();
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [timer, setTimer] = useState(0);

  // Function to start timer for selected todo
  const startTimer = (todo: Todo) => {
    setSelectedTodo(todo);
    setTimer(todo.duration * 60); // Convert duration to seconds
    toggleTodo(todo.id); // Mark todo as started
  };

  // Function to stop timer
  const stopTimer = () => {
    setSelectedTodo(null);
    setTimer(0);
  };

  const formatTimer = (timeInSeconds: number) => {
    if (timeInSeconds <= 0) return "00:00";

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Effect to handle timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && selectedTodo !== null) {
      // Timer ended
      stopTimer();
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex flex-col gap-3 items-center justify-center max-w-[1000px] w-full p-5">
      {!selectedTodo && <CompleteTask />}

      {!selectedTodo && (
        <div className="text-2xl font-bold text-left md:text-center w-full mt-4">
          Todos
        </div>
      )}
      {!selectedTodo && (
        <div className="space-y-2 md:w-1/2 w-full mt-2">
          {todos.map((todo: Todo) => (
            <div
              key={todo.id}
              className="bg-slate-50 border-2 border-slate-100 shadow-xl flex items-center justify-between p-6 rounded-xl cursor-pointer hover:bg-slate-100"
              onClick={() => {
                if (selectedTodo && selectedTodo.id === todo.id) {
                  stopTimer(); // Clicking again stops the timer
                } else {
                  startTimer(todo); // Clicking starts the timer for this todo
                }
              }}
            >
              <div>
                <div className="text-2xl font-semibold">{todo.title}</div>
                <div>{todo.duration} minutes</div>
              </div>

              <div>
                {todo.completed ? (
                  <BadgeCheck className="h-7 w-7" fill="lightgreen" />
                ) : (
                  <Ban className="text-red-500 h-7 w-7" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedTodo && (
        <div className="mt-10 md:w-1/2 w-full">
          <div className="flex flex-col w-full items-center justify-center p-4 rounded-md">
            <div className="flex flex-col items-center justify-center">
              {timer > 0 ? (
                <div className="flex flex-col items-center justify-center gap-5">
                  <div className="h-80 w-80 rounded-full text-center flex items-center justify-center p-20 text-7xl font-semibold bg-purpleapp shadow-xl shadow-purple-300 text-white">
                    {formatTimer(timer)}
                  </div>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => stopTimer()}
                  >
                    Stop
                  </button>
                </div>
              ) : (
                <BadgeCheck className="text-green-500 h-7 w-7" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;

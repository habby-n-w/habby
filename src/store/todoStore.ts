import { create } from 'zustand';

export interface Todo {
  id: string;
  title: string;
  duration: number;
  completed: boolean;
  started: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id'>) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

// Function to generate incremental IDs
let currentId = 1;
const generateId = () => {
  const id = String(currentId);
  currentId += 1;
  return id;
};

// Create the Zustand store
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, { ...todo, id: generateId() }],
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

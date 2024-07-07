import {create }from 'zustand';
interface Todo {
    id: string;
    title: string;
    duration: number; 
    completed: boolean;
    started: boolean;
  }
  

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

// Create the Zustand store
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
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

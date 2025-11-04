import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { combine } from "zustand/middleware";
import type { ITodo } from "@/types";

const initialState: { todos: ITodo[] } = {
  todos: [],
};
const useTodosStore = create(
  immer(
    combine(initialState, (set) => ({
      actions: {
        createTodo: (content: string) => {
          set((state) => {
            state.todos.push({
              id: new Date().getTime(),
              content,
            });
          });
        },
        deleteTodo: (targetId: number) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== targetId);
          });
        },
      },
    })),
  ),
);

export const useTodos = () => {
  const todos = useTodosStore((store) => store.todos);
  return todos;
};

export const useCreateTodo = () => {
  const createTodo = useTodosStore((store) => store.actions.createTodo);
  return createTodo;
};

export const useDeleteTodo = () => {
  const deleteTodo = useTodosStore((store) => store.actions.deleteTodo);
  return deleteTodo;
};

import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { ITodo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * HOOK: 할 일 단건 수정
 */
export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updatedTodo) => {
      const prevTodos = queryClient.getQueryData<ITodo[]>(QUERY_KEYS.todo.list);
      queryClient.setQueryData<ITodo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) {
          return [];
        }

        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });

      return {
        prevTodos,
      };
    },
    onError: (err, variable, context) => {
      if (context && context.prevTodos) {
        queryClient.setQueryData<ITodo[]>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
  });
}

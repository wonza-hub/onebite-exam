import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { ITodo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedTodo) => {
      // queryClient.setQueryData<ITodo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
      //   if (!prevTodos) {
      //     return [];
      //   }
      //   return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      // });

      // 쿼리 정규화 적용
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.todo.detail(deletedTodo.id),
      });
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [];
          return prevTodoIds.filter((id) => id !== deletedTodo.id);
        },
      );
    },
  });
}

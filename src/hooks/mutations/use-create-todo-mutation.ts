import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { ITodo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * CREATE: 할 일
 */
export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      // 캐시 무효화
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });

      // 캐시 직접 수정
      // queryClient.setQueryData<ITodo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
      //   if (!prevTodos) return [newTodo];
      //   return [...prevTodos, newTodo];
      // });

      // 캐시 정규화
      // 개별 아이템에 대한 갱신
      queryClient.setQueryData<ITodo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      // 목록 id 캐시에 대한 갱신
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [newTodo.id];
          return [...prevTodoIds, newTodo.id];
        },
      );
    },
  });
}

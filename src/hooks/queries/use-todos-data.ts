import { fetchTodos } from "@/api/fetch-todos";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import type { ITodo } from "@/types";

export function useTodosData() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: QUERY_KEYS.todo.list,
    // queryFn:fetchTodos,
    // REFACTOR: 캐시 정규화
    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo) => {
        queryClient.setQueryData<ITodo>(QUERY_KEYS.todo.detail(todo.id), todo);
      });
      return todos.map((todo) => todo.id);
    },
  });
}

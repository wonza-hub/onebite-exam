import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";

export function useTodoDataById(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.todo.detail(id),
    queryFn: () => fetchTodoById(id),
  });
}

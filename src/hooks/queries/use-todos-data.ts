import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";

export function useTodosData() {
  return useQuery({
    queryKey: QUERY_KEYS.todo.list,
    queryFn: fetchTodos,
  });
}

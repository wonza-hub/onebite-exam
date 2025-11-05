import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => fetchTodoById(id),
  });
}

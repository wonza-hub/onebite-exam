import { API_URL } from "@/lib/constants";
import type { ITodo } from "@/types";

export async function fetchTodoById(id: string) {
  const response = await fetch(`${API_URL}/todos/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }
  const data: ITodo = await response.json();

  return data;
}

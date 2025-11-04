import type { ITodo } from "@/types";
import { API_URL } from "@/lib/constants";

export async function fetchTodos() {
  const response = await fetch(`${API_URL}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data: ITodo[] = await response.json();

  return data;
}

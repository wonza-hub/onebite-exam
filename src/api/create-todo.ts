import { API_URL } from "@/lib/constants";
import type { ITodo } from "@/types";

export async function createTodo(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({ content, isDone: false }),
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  const data: ITodo = await response.json();

  return data;
}

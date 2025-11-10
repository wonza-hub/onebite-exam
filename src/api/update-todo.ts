import { API_URL } from "@/lib/constants";
import type { ITodo } from "@/types";

/**
 * API: 할 일 단건 수정
 */
export async function updateTodo(todo: Partial<ITodo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error("Update Todo Failed");

  const data: ITodo = await response.json();

  return data;
}

import { Button } from "../ui/button";
import { Link } from "react-router";
import type { ITodo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";

/**
 * COMPONENT: 할 일 단건
 * @param param0
 * @returns
 */
export default function TodoItem({ id, content, isDone }: ITodo) {
  const { mutate } = useUpdateTodoMutation();

  const handleDeleteTodo = () => {};

  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5">
        <input type="checkbox" checked={isDone} onClick={handleCheckboxClick} />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button variant="destructive" onClick={handleDeleteTodo}>
        삭제
      </Button>
    </div>
  );
}

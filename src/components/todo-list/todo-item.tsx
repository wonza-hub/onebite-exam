import { Button } from "../ui/button";
import { Link } from "react-router";
import type { ITodo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";

/**
 * COMPONENT: 할 일 단건
 */
export default function TodoItem({ id, content, isDone }: ITodo) {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo } = useUpdateTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5">
        <input
          disabled={isDeleteTodoPending}
          type="checkbox"
          checked={isDone}
          onClick={handleCheckboxClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button variant="destructive" onClick={handleDeleteClick}>
        삭제
      </Button>
    </div>
  );
}

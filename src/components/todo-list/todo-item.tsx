import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function TodoItem({
  id,
  content,
}: {
  id: number;
  content: string;
}) {
  const deleteTodo = useDeleteTodo();
  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button variant="destructive" onClick={handleDeleteTodo}>
        삭제
      </Button>
    </div>
  );
}

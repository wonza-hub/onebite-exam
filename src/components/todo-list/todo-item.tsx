import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";

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
      {content}
      <Button variant="destructive" onClick={handleDeleteTodo}>
        삭제
      </Button>
    </div>
  );
}

import { useParams } from "react-router";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";

export default function TodoDetailPage() {
  const { id } = useParams();
  const { data: todo, isLoading, isError } = useTodoDataById(String(id));

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <p>{todo?.content}</p>
    </div>
  );
}

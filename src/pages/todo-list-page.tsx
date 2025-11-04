import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import type { ITodo } from "@/types";
import { useTodosData } from "@/hooks/queries/use-todos-data";

export default function TodoListPage() {
  const { data: todos, isLoading, isError } = useTodosData();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List Page</h1>
      <TodoEditor />
      {todos?.map((todo: ITodo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}

import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/use-todos-data";

export default function TodoListPage() {
  const { data: todoIds, isLoading, isError } = useTodosData();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List Page</h1>
      <TodoEditor />
      {/* {todos?.map((todo: ITodo) => (
        <TodoItem key={todo.id} {...todo} />
      ))} */}
      {/* REFACTOR: 캐시 정규화 적용 */}
      {todoIds?.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
}

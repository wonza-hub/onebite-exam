import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  const [content, setContent] = useState("");
  const { mutate, isPending } = useCreateTodoMutation();

  const handleAddTodo = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요."
        id="name"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button disabled={isPending} onClick={handleAddTodo}>
        추가
      </Button>
    </div>
  );
}

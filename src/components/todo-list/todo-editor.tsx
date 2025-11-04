import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  const [content, setContent] = useState("");
  const createTodo = useCreateTodo();

  const handleAddTodo = () => {
    if (content.trim() === "") return;
    createTodo(content);
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
      <Button onClick={handleAddTodo}>추가</Button>
    </div>
  );
}

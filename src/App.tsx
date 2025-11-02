import { cn } from "@/lib/utils";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Toaster, toast } from "sonner";

function App() {
  const isActive = true;
  return (
    <>
      <div className={cn("h-10 w-10 bg-red-500", isActive && "bg-blue-500")}>
        isActive
      </div>
      <Toaster />
      <Button
        variant="destructive"
        onClick={() => {
          toast("Hello World");
        }}
      >
        Click me
      </Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Input placeholder="Enter your name" />
      <Textarea placeholder="Enter your name" />
      <h1 className="text-3xl font-bold text-red-500 underline">Hello World</h1>
    </>
  );
}

export default App;

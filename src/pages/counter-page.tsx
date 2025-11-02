import CounterViewer from "@/components/counter/count-viewer";
import CounterController from "@/components/counter/count-controller";

export default function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <CounterViewer />
      <CounterController />
    </div>
  );
}

import { useCounterStore } from "@/store/count";

export default function CounterViewer() {
  const { count } = useCounterStore();

  return <p>{count}</p>;
}

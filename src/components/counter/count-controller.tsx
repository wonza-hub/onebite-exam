import { Button } from "../ui/button";
import { useCounterStore } from "@/store/count";

export default function CounterController() {
  //   const { increase, decrease } = useCounterStore();
  const increase = useCounterStore((store) => store.increase);
  const decrease = useCounterStore((store) => store.decrease);

  return (
    <div>
      <Button onClick={increase}>Increase</Button>
      <Button onClick={decrease}>Decrease</Button>
    </div>
  );
}

import { Button } from "../ui/button";
import { useCounterStore } from "@/store/count";

export default function CounterController() {
  //   const { increase, decrease } = useCounterStore();

  // 셀렉터로 스토어에서 일부 상태만 가져오기
  //   const increase = useCounterStore((store) => store.increase);
  //   const decrease = useCounterStore((store) => store.decrease);

  // 액션 함수 가져오기
  const { increase, decrease } = useCounterStore((store) => store.actions);

  return (
    <div>
      <Button onClick={increase}>Increase</Button>
      <Button onClick={decrease}>Decrease</Button>
    </div>
  );
}

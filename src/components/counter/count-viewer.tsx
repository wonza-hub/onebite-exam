import { useCounterCount } from "@/store/count";

export default function CounterViewer() {
  // 스토어의 셀렉터 훅 가져오기
  const count = useCounterCount();

  return <p>{count}</p>;
}

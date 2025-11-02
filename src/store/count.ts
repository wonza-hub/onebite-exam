import { create } from "zustand";

type TCounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
};
export const useCounterStore = create<TCounterStore>((set, get) => ({
  count: 0,
  increase: () => {
    // const count = get().count;
    // set({ count: count + 1 });
    set((store) => ({
      count: store.count + 1,
    }));
  },
  decrease: () => {
    set((store) => ({
      count: store.count - 1,
    }));
  },
}));

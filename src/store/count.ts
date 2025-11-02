import { create } from "zustand";
import { combine } from "zustand/middleware";

// type TCounterStore = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };
// export const useCounterStore = create<TCounterStore>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       // const count = get().count;
//       // set({ count: count + 1 });
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

// 미들웨어 combine
const initialState = {
  count: 0,
};
export const useCounterStore = create(
  combine(initialState, (set, get) => ({
    actions: {
      increase: () => {
        set((state) => ({
          count: state.count + 1,
        }));
      },
      decrease: () => {
        set((state) => ({
          count: state.count - 1,
        }));
      },
    },
  })),
);

export const useCounterCount = () => {
  return useCounterStore((store) => store.count);
};

export const useCounterActions = () => {
  return useCounterStore((store) => store.actions);
};

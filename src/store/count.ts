import { create } from "zustand";
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

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
// const initialState = {
//   count: 0,
// };
// export const useCounterStore = create(
//   combine(initialState, (set, get) => ({
//     actions: {
//       increase: () => {
//         set((state) => ({
//           count: state.count + 1,
//         }));
//       },
//       decrease: () => {
//         set((state) => ({
//           count: state.count - 1,
//         }));
//       },
//     },
//   })),
// );

// // 미들웨어 immer + combine
// const initialState = {
//   count: 0,
// };
// export const useCounterStore = create(
//   immer(
//     combine(initialState, (set, get) => ({
//       actions: {
//         increase: () => {
//           set((state) => {
//             state.count += 1;
//           });
//         },
//         decrease: () => {
//           set((state) => {
//             state.count -= 1;
//           });
//         },
//       },
//     })),
//   ),
// );

// // 미들웨어: subscribeWithSelector + immer + combine
// const initialState = {
//   count: 0,
// };
// export const useCounterStore = create(
//   subscribeWithSelector(
//     immer(
//       combine(initialState, (set, get) => ({
//         actions: {
//           increase: () => {
//             set((state) => {
//               state.count += 1;
//             });
//           },
//           decrease: () => {
//             set((state) => {
//               state.count -= 1;
//             });
//           },
//         },
//       })),
//     ),
//   ),
// );

// useCounterStore.subscribe(
//   // 셀렉터
//   (store) => store.count,
//   // 리스너
//   (count, prevCount) => {
//     const store = useCounterStore.getState();
//     // useCounterStore.setState({
//     //   count:count+1
//     // })
//   },
// );

// 미들웨어: persist + subscribeWithSelector + immer + combine
const initialState = {
  count: 0,
};
export const useCounterStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine(initialState, (set, get) => ({
            actions: {
              increase: () => {
                set((state) => {
                  state.count += 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "counter",
        partialize: (state) => ({
          count: state.count,
        }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: "counter" },
  ),
);

export const useCounterCount = () => {
  return useCounterStore((store) => store.count);
};

export const useCounterActions = () => {
  return useCounterStore((store) => store.actions);
};

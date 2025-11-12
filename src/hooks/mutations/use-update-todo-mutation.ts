import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { ITodo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * HOOK: 할 일 단건 수정
 */
export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      // 낙관적 업데이트
      // await queryClient.cancelQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });

      // const prevTodos = queryClient.getQueryData<ITodo[]>(QUERY_KEYS.todo.list);
      // queryClient.setQueryData<ITodo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
      //   if (!prevTodos) {
      //     return [];
      //   }

      //   return prevTodos.map((prevTodo) =>
      //     prevTodo.id === updatedTodo.id
      //       ? { ...prevTodo, ...updatedTodo }
      //       : prevTodo,
      //   );
      // });

      // return {
      //   prevTodos,
      // };

      // 낙관적 업데이트 + 쿼리 정규화
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.detail(updatedTodo.id),
      });
      const prevTodo = queryClient.getQueryData<ITodo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
      );
      queryClient.setQueryData<ITodo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
        (prevTodo) => {
          if (!prevTodo) {
            return;
          }
          return {
            ...prevTodo,
            ...updatedTodo,
          };
        },
      );

      return {
        prevTodo,
      };
    },
    onError: (error, variable, context) => {
      // 낙관적 업데이트
      // if (context && context.prevTodos) {
      //   queryClient.setQueryData<ITodo[]>(
      //     QUERY_KEYS.todo.list,
      //     context.prevTodos,
      //   );
      // }
      // 낙관적 업데이트 + 쿼리 정규화
      if (context && context.prevTodo) {
        queryClient.setQueryData<ITodo>(
          QUERY_KEYS.todo.detail(context.prevTodo.id),
          context.prevTodo,
        );
      }
    },
    // 쿼리 정규화 시에는 개별 캐시는 disabled이므로 무효화 무의미
    // onSettled: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: QUERY_KEYS.todo.list,
    //   });
    // },
  });
}

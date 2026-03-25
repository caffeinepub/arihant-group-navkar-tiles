import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Requirement } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      requirement,
      message,
    }: {
      name: string;
      phone: string;
      requirement: Requirement;
      message: string;
    }) => {
      await actor?.submitForm(name, phone, requirement, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
  });
}

export function useGetSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export { Requirement };

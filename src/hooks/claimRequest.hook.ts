import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { addClaimRequest } from "../services/ClaimRequest";
import { TClaimRequest } from "../types";

export const useClaimRequest = () => {
  const toastId = 1;

  return useMutation({
    mutationFn: async (postData: TClaimRequest) => await addClaimRequest(postData),
    onSuccess: () => {
      toast.success("Successfully created claim request", { id: toastId });
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message, { id: toastId });
    },
    onMutate: () => {
      toast.loading("Claiming request...", { id: toastId });
    },
  });
};

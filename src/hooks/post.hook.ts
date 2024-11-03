import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPost } from "../services/post";

export const useCreatePost = () => {
  const toastId = 1;

  return useMutation({
  
    mutationFn: async (postData:FormData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post Created Successfully", { id: toastId });
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message, { id: toastId });
    },
    onMutate: () => {
      toast.loading("Creating Post...", { id: toastId });
    },
  });
};

import { toast } from "sonner";

export const useToastPromise = () => {
  const toastPromise = async (
    promise,
    payload,
    isPending,
    data,
    isError,
    loadingMessage,
    successMessage,
    errorMessage
  ) => {
      const loading = toast.loading(loadingMessage || "Loading...");
      await promise(payload as Record<string, unknown>) as Record<
      string,
      unknown
      >;


      

      
      if (isError) {
        toast.error(errorMessage || "Error",{id:loading});
       return data
      }
     





  };

  return { toastPromise };
};

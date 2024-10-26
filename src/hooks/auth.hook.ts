import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { loginUser, registerUser } from "../services/AuthService";
import { toast } from "sonner";

export const useUserRegistration = () => {
  const toastId = 1;

  return useMutation({
    mutationFn: async (user: FieldValues) => await registerUser(user),
    onSuccess: () => {
      toast.success("User Registered Successfully", { id: toastId });
    },

    onError: (error) => {
      toast.error(error.message, { id: toastId });
    },
    onMutate: () => {
      toast.loading("Registering user...", { id: toastId });
    },
  });
};
export const useUserLogin = () => {
  const toastId = 1;

  return useMutation({
    mutationFn: async (user: FieldValues) => await loginUser(user),
    onSuccess: () => {
      toast.success("User Logged in Successfully", { id: toastId });
    },

    onError: (error) => {
      toast.error(error.message, { id: toastId });
    },
    onMutate: () => {
      toast.loading("Logging in...", { id: toastId });
    },
  });
};

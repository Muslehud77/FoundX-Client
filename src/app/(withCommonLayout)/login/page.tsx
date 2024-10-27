"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import { Spinner } from "@nextui-org/spinner";
import Loading from "@/src/components/UI/Loading";
import { useRouter, useSearchParams } from "next/navigation";


const LoginPage = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const router = useRouter();

  const { mutate: userLogin, isPending, isError, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    userLogin(data);
  };

  if (!isError && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <>
      <Loading isPending={isPending} />
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FXForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <FXInput name="email" label="Email" type="email" />
            </div>
            <div className="py-3">
              <FXInput name="password" label="Password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          <div className="text-center">
            Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

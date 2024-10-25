"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import registerValidationSchema from "@/src/schemas/register.schema";
import { registerUser } from "@/src/services/AuthService";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";

import Link from "next/link";

import { FieldValues, SubmitHandler } from "react-hook-form";

export default function RegisterPage() {


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const profilePhoto =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

    const user = {
      ...data,
      profilePhoto,
    };

    await registerUser(user);

  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm
          defaultValues={{
            name: "Musleh",
            email: "musleh@gmail.com",
            mobileNumber: "01711223344",
            password: "123456",
          }}
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}

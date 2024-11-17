"use client";
import {Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

type FXTextAreaProps = {
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  size?: "md" | "sm" | "lg" | undefined;
  required?: boolean;
  name: string;
  label: string;
  type?: string;
};

const FXTextArea = ({
  variant = "bordered",
  size = "md",
  required = false,
  name,
  label,
  type,
}: FXTextAreaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();


  const currentValue = useWatch({
    name
  })

  return (
    <Textarea
      {...register(name)}
      errorMessage={errors[name]?.message as string}
      isInvalid={!!errors[name]}
      name={name}
      label={label}
      type={type}
      variant={variant}
      size={size}
      required={required}
      value={currentValue || ""}
    />
  );
};

export default FXTextArea;

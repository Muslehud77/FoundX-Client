"use client"
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

type FXInputProps = {
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  size?: "md" | "sm" | "lg" | undefined;
  required?: boolean;
  name: string;
  label: string;
  type?: string;
};

const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  name,
  label,
  type,
}: FXInputProps) => {


    const {register} = useFormContext()

  return (
    <Input
    {...register(name)}
      name={name}
      label={label}
      type={type}
      variant={variant}
      size={size}
      required={required}
    />
  );
};

export default FXInput;
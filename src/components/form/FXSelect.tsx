"use client";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

type FXSelectProps = {
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  size?: "md" | "sm" | "lg" | undefined;
  required?: boolean;
  isLoading?: boolean;
  name: string;
  label: string;
  type?: string;
  options: { key: string; label: string }[];
};

const FXSelect = ({
  variant = "bordered",
  size = "md",
  required = false,
  isLoading=false,
  name,
  label,
  type,
  options,
}: FXSelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      isLoading={isLoading}
      errorMessage={errors[name]?.message as string}
      {...register(name)}
      items={options}
      size={size}
      label={label}
      variant={variant}
      className="min-w-full sm:min-w-[225px]"
    >
      {(option) => <SelectItem key={option.key}>{option.label}</SelectItem>}
    </Select>
  );
};

export default FXSelect;

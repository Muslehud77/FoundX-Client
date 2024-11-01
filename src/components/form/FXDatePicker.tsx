"use client";
import { DatePicker } from "@nextui-org/date-picker";

import { Controller } from "react-hook-form";

type FXDatePickerProps = {
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  size?: "md" | "sm" | "lg" | undefined;
  required?: boolean;
  name: string;
  label: string;
  type?: string;
};

const FXDatePicker = ({
  variant = "bordered",
  size = "md",
  required = false,
  name,
  label,
}: FXDatePickerProps) => {

  return (
    <Controller
      name={name}
      render={(
        { field: { onChange, value  } }
      ) => (
        <DatePicker
        onChange={onChange}
        value={value}
        //   isInvalid={!!errors[name]}
        //   errorMessage={errors[name]?.message as string}
          label={label}
          variant={variant}
          size={size}
        />
      )}
    />
  );
};

export default FXDatePicker;

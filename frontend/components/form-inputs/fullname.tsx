import React from "react";
import { useFormContext } from "react-hook-form";
import { minLengthError } from ".";
import { FormInputInterface } from "./interfaces";

export const FullName: FormInputInterface = ({
  label,
  name,
  showLabel = true,
}) => {
  const { register } = useFormContext();
  return (
    <label className="label-style">
      {showLabel && label}
      <input
        type="text"
        className="input-style"
        {...register(name, {
          required: true,
          minLength: {
            value:8,
            message:minLengthError(8,label)
          },
        })}
      />
    </label>
  );
};

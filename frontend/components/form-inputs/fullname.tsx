import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useFormContext } from "react-hook-form";
import { minLengthError, requiredError } from ".";
import { FormInputInterface } from "./interfaces";

export const FullName: FormInputInterface = ({
  label,
  name,
  showLabel = true,
}) => {
  const { register,formState } = useFormContext();
  const {errors} = formState
  return (
    <label className="label-style">
      {showLabel && label}
      <input
        type="text"
        className="input-style"
        {...register(name, {
          required: requiredError(label),
          minLength: {
            value:8,
            message:minLengthError(8,label)
          },
        })}
      />
      <ErrorMessage errors={errors} name={name} />
    </label>
  );
};

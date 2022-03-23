import React from "react";
import { useFormContext } from "react-hook-form";
import { requiredError } from ".";
import { FormInputInterface } from "./interfaces";

export const Age: FormInputInterface = ({ label, name, showLabel = true }) => {
  const { register } = useFormContext();
  return (
    <label htmlFor="" className="label-style">
      {showLabel && label}
      <input
        type="number"
        className="input-style"
        {...register(name, {
          required: requiredError(label,false),
          min: 14,
        })}
      />
    </label>
  );
};

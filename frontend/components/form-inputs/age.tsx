import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useFormContext } from "react-hook-form";
import { minLengthError, requiredError } from ".";
import { FormInputInterface } from "./interfaces";

export const Age: FormInputInterface = ({ label, name, showLabel = true }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <label htmlFor="" className="label-style">
      {showLabel && label}
      <input
        type="number"
        className="input-style"
        {...register(name, {
          required: requiredError(label, false),
          min: {
            value:14,
            message:"Edad minima 14 años"
          },
          valueAsNumber:true
        })}
      />
      <ErrorMessage errors={errors} name={name} />
     
    </label>
  );
};

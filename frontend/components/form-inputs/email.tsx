import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useFormContext } from "react-hook-form";
import { invalidError, requiredError } from ".";
import type { FormInputInterface } from "./interfaces";
export const Email: FormInputInterface = ({ label, name }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <label className="label-style">
      {label}
      <input
        type="email"
        className="input-style"
        {...register(name, {
          required: requiredError(label),
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: invalidError(label),
          },
        })}
      />
      <ErrorMessage errors={errors} name={name} />
    </label>
  );
};

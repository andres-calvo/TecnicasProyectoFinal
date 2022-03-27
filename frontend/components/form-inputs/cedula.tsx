import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInputInterface } from "./interfaces";

export const Cedula: FormInputInterface = ({
  label,
  showLabel = true,
  name,
}) => {
  const { register } = useFormContext();

  return (
    <label className="label-style">
      {showLabel && label}
      <input
        className="input-style"
        type="number"
        id=""
        {...register(name, {
          required: {
            value: true,
            message: "La cedula es requerida",
          },
        })}
      />
    </label>
  );
};

import React, { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { SelectInputInterface } from "./interfaces";

export const Select: FunctionComponent<SelectInputInterface> = ({
  label,
  name,
  options,
  showLabel = true,
}) => {
  const { register } = useFormContext();
  return (
    <label className="label-style">
      {showLabel && label}
      <select
        className="input-style"
        {...register(name, {
          required: true,
        })}
      >
        {options.map((opt) => (
          <option {...opt} key={opt.value} />
        ))}
      </select>
    </label>
  );
};

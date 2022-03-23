import React, { FunctionComponent } from "react";
import { Select } from "./select";

export const WorkStatus: FunctionComponent = () => {
  return (
    <Select
      label="Trabaja"
      name="work"
      options={[
        { label: "Si", value: "Si" },
        { label: "No", value: "No" },
      ]}
    />
  );
};

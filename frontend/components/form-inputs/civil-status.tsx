import React, { FunctionComponent } from "react";
import { Select } from "./select";

export const CivilStatus:FunctionComponent = () => {
  return (
    <Select
      label="Estado civil"
      name="civilstatus"
      options={[
        {
          label: "Casado",
          value: "Casado",
        },
        { label: "Soltero", value: "Soltero" },
      ]}
    />
  );
};

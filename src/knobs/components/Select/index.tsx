import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@material-ui/core";

interface SelectCustomProps {
  label: string;
  selectProps: SelectProps;
  items: Array<{
    value: any;
    name: string;
  }>;
}

const KnobSelect: React.FunctionComponent<SelectCustomProps> = (
  props: SelectCustomProps
) => {
  return (
    <>
      <InputLabel>{props.label}</InputLabel>
      <Select {...props.selectProps}>
        {props.items &&
          props.items.map((elm) => (
            <MenuItem key={elm.name} value={elm.value}>
              {elm.name}{" "}
            </MenuItem>
          ))}
      </Select>
    </>
  );
};

export default KnobSelect;

import { TextField } from "@mui/material";
import { FC } from "react";

type InputMode = "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;

interface MyInputProps {
  inputMode: InputMode;
  isDisabled?: boolean;
}

export const MyInputText: FC<MyInputProps> = (props: MyInputProps) => {

  return (
    <TextField
        isDisabled={props.isDisabled}
      {...props}
    />
  )
}
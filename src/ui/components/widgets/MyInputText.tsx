import { TextField } from "@mui/material";
import { FC } from "react";
import { useStyle } from "../../styles/useSxStyle";

type InputMode = "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;

interface MyInputProps {
  type?: string;
  inputMode: InputMode;
  placeholder: string;
  disabled?: boolean;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MyInputText: FC<MyInputProps> = (
  { disabled = false, name, value, type, inputMode, placeholder, onChange }: MyInputProps) => {
    const sx = useStyle();
  return (
    <TextField
      type={type}
      inputMode={inputMode}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      value={value}
      sx={sx.inputText}
      onChange={onChange}
    />
  )
}
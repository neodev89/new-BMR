import InputTextStyled from "./InputTextStyled";
import { OutlinedInput } from "@mui/material";
import { InputTextProps } from "./InputProps";

export const MyInputText = (props: InputTextProps) => {
    const {
        label,
        tooltip,
        inputMode,
        required,
        className,
        placeholder,
        onChange,
        ...otherProps
    } = props;
    return (
        <InputTextStyled
            inputMode={inputMode}
            required={required}
            className={className}
        >
            <OutlinedInput
                placeholder={placeholder}
                onChange={onChange}
                {...otherProps}
            />
        </InputTextStyled>
    )
}

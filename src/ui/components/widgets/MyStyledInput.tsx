import { TextFieldProps } from "@mui/material";
import { InputTextProps } from "./InputProps";
import styled from "@emotion/styled";
import { yellow } from "@mui/material/colors";
import { MyInputText } from "./MyInputText";

export const MyStyledInput = styled(MyInputText)<InputTextProps & TextFieldProps>(({
    // Aggiungi qui eventuali stili personalizzati
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    border: '1px solid transparent',
    borderRadius: '8px',
    backgroundColor: yellow[200],
    height: '40px',
    width: '100%',
    margin: '5px 0',
  '&:hover': {
    backgroundColor: yellow[400],
  },
  '& .MuiOutlinedInput-root': {
    width: '100%',
    '& fieldset': {
      border: '1px solid transparent',
    }
  }
  }));

  
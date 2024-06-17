import { FormControl } from '@mui/material/'
import { styled } from '@mui/material/'

const InputTextStyled = styled(FormControl)(({ inputMode }) => ({
  '.MuiOutlinedInput-root': {
    margin: '5px 0',
    backgroundColor: 'white',
    borderRadius: '14px / 13px',
    height: inputMode === 'text' ? '' : '42px',
    width: '100%',
    fontSize: 14,
    '& fieldset': {
      border: '1px solid transparent',
      backgroundColor: 'rgba(236, 246, 253, 1)',
    },
    '& input': {
      zIndex: 1,
    },

    '&.Mui-focused fieldset': {
      border: '1px solid transparent',
    },
  },
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  'input[type=number]': { MozAppearance: 'textfield' },
  width: '100%',
}))

export default InputTextStyled
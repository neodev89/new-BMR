import { FormControl } from '@mui/material/'
import { styled } from '@mui/material/'

const InputTextStyled = styled(FormControl)(({ inputMode }) => ({
  '.MuiFormHelperText-root': { margin: 0, marginTop: '2px' },
  '.MuiOutlinedInput-root': {
    margin: '5px 0',
    backgroundColor: 'white',
    borderRadius: '14px / 13px',
    height: inputMode === 'text' ? '' : '42px',
    width: '100%',
    fontSize: 14,
    '& fieldset': {
      border: 'none',
      backgroundColor: 'rgba(236, 246, 253, 1)',
    },
    '& input': {
      zIndex: 1,
    },
    '& .MuiIconButton-root': {
      zIndex: 1,
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
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
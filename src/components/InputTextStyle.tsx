import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'

const InputTextStyled = styled(FormControl)(({ inputMode }) => ({
  '.MuiFormHelperText-root': { margin: 0, marginTop: '2px' },
  '.MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '14px / 13px',
    height: inputMode === 'text' ? '' : '42px',
  },
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  'input[type=number]': { MozAppearance: 'textfield' },
  width: '100%',
}))

export default InputTextStyled
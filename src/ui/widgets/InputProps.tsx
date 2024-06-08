import { InputLabelProps } from '@mui/material'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

export type InputTextProps = OutlinedInputProps & {
  label?: string
  tooltip?: string
  helperText?: string
  password?: boolean
  InputLabelProps?: InputLabelProps
  onChange: () => void
}


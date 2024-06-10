import { InputLabelProps } from '@mui/material'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { ChangeEventHandler } from 'react'

export type InputTextProps = OutlinedInputProps & {
  label?: string
  tooltip?: string
  helperText?: string
  password?: boolean
  InputLabelProps?: InputLabelProps
  onChange: ChangeEventHandler<HTMLInputElement>
}

import { ChangeEventHandler } from 'react'

export interface InputTextProps {
  value?: string
  inputMode: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

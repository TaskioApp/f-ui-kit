/** @format */

import { ReactElement } from 'react'
import { Input } from './Input'
import { OtpInput } from './OtpInput'
import { InputIcon } from './Input/InputIcon'

export const FormElement = ({ children }: { children: ReactElement }) => children

FormElement.Input = Input
FormElement.OtpInput = OtpInput
FormElement.InputIcon = InputIcon

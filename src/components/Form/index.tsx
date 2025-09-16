/** @format */

import { ReactElement } from 'react'
import { Input } from './Input'
import { OtpInput } from './OtpInput'

export const FormElement = ({ children }: { children: ReactElement }) => children

FormElement.Input = Input
FormElement.OtpInput = OtpInput

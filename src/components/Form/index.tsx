/** @format */

import { ReactElement } from 'react'
import { Input } from './Input'
import { TextArea } from './TextArea'

export const FormElement = ({ children }: { children: ReactElement }) => children

FormElement.Input = Input
FormElement.TextArea = TextArea

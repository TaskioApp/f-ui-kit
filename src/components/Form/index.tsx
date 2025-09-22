/** @format */

import { ReactElement } from 'react'
import { Input } from './Input'
import { OtpInput } from './OtpInput'
import { InputIcon } from './Input/InputIcon'

const BaseFormElement = ({ children }: { children: ReactElement }) => <div className=''>{children}</div>

export const FormElement = Object.assign(BaseFormElement, {
	Input,
	OtpInput,
	InputIcon
})

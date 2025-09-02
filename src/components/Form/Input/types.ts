/** @format */

import { Size } from '@/types/size.type'
import { InputHTMLAttributes, ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, FormState, ControllerFieldState } from 'react-hook-form'

export type InputTypes = 'text' | 'password'

export type InputProps<IFormInput extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
	field: ControllerRenderProps<FieldValues, string>
	formState: FormState<IFormInput>
	fieldState: ControllerFieldState
	label?: string
	required?: boolean
	type?: InputTypes
	placeholder?: string
	hiddenLabel?: boolean
	className?: string
	icon?: ReactNode
	inputSize?: Size
}

/** @format */

import { Size } from '@/types/size.type'
import { InputHTMLAttributes, ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, ControllerFieldState, Path, UseFormStateReturn } from 'react-hook-form'

export type InputTypes = 'text' | 'password'

export type InputProps<IFormInput extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
	field: ControllerRenderProps<IFormInput, Path<IFormInput>>
	formState: UseFormStateReturn<IFormInput>
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

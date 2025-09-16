/** @format */

import { Size } from '@/types/size.type'
import { InputHTMLAttributes } from 'react'
import { ControllerRenderProps, FieldValues, ControllerFieldState, Path, UseFormStateReturn } from 'react-hook-form'

export type InputTypes = 'number'

export type InputHandle = {
	focus: (index?: number) => void
	reset: () => void
	getValue: () => string
}

export type InputProps<IFormInput extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
	field: ControllerRenderProps<IFormInput, Path<IFormInput>>
	formState: UseFormStateReturn<IFormInput>
	fieldState: ControllerFieldState
	label?: string
	required?: boolean
	placeholder?: string
	hiddenLabel?: boolean
	className?: string
	inputSize?: Size
	length?: number
}

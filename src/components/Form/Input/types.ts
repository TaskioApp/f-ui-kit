/** @format */

import { InputHTMLAttributes, ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, FormState, ControllerFieldState } from 'react-hook-form'

export type InputTypes = 'text' | 'password'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	field: ControllerRenderProps<FieldValues, string>
	formState: Record<string, any>
	fieldState: ControllerFieldState
	label?: string
	required?: boolean
	type?: InputTypes
	placeholder?: string
	hiddenLabel?: boolean
	className?: string
	icon?: ReactNode
}

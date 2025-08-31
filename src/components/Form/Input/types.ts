/** @format */

import { InputHTMLAttributes, ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, FormState } from 'react-hook-form'
import { IconBaseProps, IconType } from 'react-icons'

export type InputTypes = 'text' | 'password'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	field: ControllerRenderProps<FieldValues, string>
	formState?: FormState<FieldValues>
	fieldState?: object
	label?: string
	required?: boolean
	type?: InputTypes
	placeholder?: string
	hiddenLabel?: boolean
	className?: string
	icon: ReactNode
}

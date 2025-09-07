/** @format */

import classnames from 'classnames'
import { InputProps } from './types'
import { FieldValues } from 'react-hook-form'
import { Size } from '@/types/size.type'
import { JSX, useMemo } from 'react'
const SizeClasses: Record<Size, string> = {
	xs: 'input-xs',
	sm: 'input-sm',
	md: 'input-md',
	lg: 'input-lg'
}

export const Input = <T extends FieldValues>({
	field,
	formState,
	fieldState,
	label,
	required = false,
	type = 'text',
	placeholder = undefined,
	hiddenLabel = false,
	className = '',
	inputSize = 'md',
	icon,
	...rest
}: InputProps<T>): JSX.Element => {
	const classNames = classnames(`input ${icon ? 'pl-5!' : ''}`, { [`${SizeClasses[inputSize]}`]: inputSize })

	const errorMessage = useMemo(() => {
		const message = fieldState?.error?.message
		if (!message || !label) return ''

		return message.replace(field.name, label)
	}, [fieldState?.error?.message, label, field.name])

	return (
		<div className='relative group'>
			<label htmlFor={field.name} className='label'>
				{label}
			</label>
			<input
				id={field.name}
				type={type}
				className={`w-full ${classNames}`}
				name={field.name}
				value={field.value}
				placeholder={placeholder ? placeholder : label}
				onChange={field.onChange}
				onBlur={field.onBlur}
				{...rest}
			/>
			<span className='icon-container'>{icon}</span>
			{required && <span className='star'>*</span>}
			{errorMessage && <span className='text-error! text-[0.8rem]!'>{errorMessage}</span>}
		</div>
	)
}

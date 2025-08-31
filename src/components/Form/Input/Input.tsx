/** @format */

import classnames from 'classnames'
import { InputProps } from './types'
import { FieldValues } from 'react-hook-form'

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
	icon,
	...rest
}: InputProps<T>) => {
	const classNames = classnames(`input ${icon ? 'pl-5!' : ''}`)
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
			/>
			<span className='icon-container'>{icon}</span>
			{required && <span className='star'>*</span>}
			{fieldState?.error?.message && <span className='text-error! text-[0.8rem]!'>{fieldState?.error?.message}</span>}
		</div>
	)
}

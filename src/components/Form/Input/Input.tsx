/** @format */

import classnames from 'classnames'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
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
}: InputProps) => {
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
		</div>
	)
}

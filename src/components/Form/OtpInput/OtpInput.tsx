/** @format */

import classnames from 'classnames'
import { InputProps } from './types'
import { FieldValues } from 'react-hook-form'
import { Size } from '@/types/size.type'
import { JSX, useEffect, useMemo, useRef, useState } from 'react'

const SizeClasses: Record<Size, string> = {
	xs: 'input-xs',
	sm: 'input-sm',
	md: 'input-md',
	lg: 'input-lg'
}

export const OtpInput = <T extends FieldValues>({
	field,
	formState,
	fieldState,
	label,
	required = false,
	length = 5,
	className = '',
	inputSize = 'md'
}: InputProps<T>): JSX.Element => {
	const [values, setValues] = useState<string[]>(Array(length).fill(''))
	const inputsRef = useRef<(HTMLInputElement | null)[]>([])

	const errorMessage = useMemo(() => {
		const message = fieldState?.error?.message
		if (!message || !label) return ''
		return message.replace(field.name, label)
	}, [fieldState?.error?.message, label, field.name])

	const handleChange = (index: number, value: string) => {
		if (!/^[0-9]?$/.test(value)) return
		const newValues = [...values]
		newValues[index] = value
		setValues(newValues)

		field.onChange(newValues.join(''))

		if (value && index < length - 1) {
			inputsRef.current[index + 1]?.focus()
		}
	}

	const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Backspace' && !values[index] && index > 0) {
			inputsRef.current[index - 1]?.focus()
		}
	}

	useEffect(() => {
		const val = field.value || ''
		const newValues = Array.from({ length }, (_, i) => val[i] || '')
		setValues(newValues)
	}, [field.value, length])

	const classNames = classnames(`input ${className}`, {
		[`${SizeClasses[inputSize]}`]: inputSize
	})

	return (
		<div className='relative group'>
			{!errorMessage && (
				<label htmlFor={field.name} className='label'>
					{label}
				</label>
			)}

			<div className='flex gap-2'>
				{Array.from({ length }).map((_, i) => (
					<input
						key={i}
						ref={el => {
							inputsRef.current[i] = el
						}}
						id={`${field.name}-${i}`}
						type='text'
						inputMode='numeric'
						maxLength={1}
						className={classnames('text-center flex-1 min-w-0', classNames)}
						value={values[i]}
						onChange={e => handleChange(i, e.target.value)}
						onKeyDown={e => handleKeyDown(i, e)}
					/>
				))}
			</div>

			{required && <span className='star'>*</span>}
			{errorMessage && <div className='text-error! text-[0.6rem]! absolute top-0'>{errorMessage}</div>}
		</div>
	)
}

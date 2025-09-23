/** @format */

import { JSX } from 'react'
import { ButtonProps } from './types'
import { Size } from '@/types/size.type'

import classnames from 'classnames'
import { Loading } from '@taskio/ui-kit'

const SizeClasses: Record<Size, string> = {
	xs: 'btn-xs',
	sm: 'btn-sm',
	md: 'btn-md',
	lg: 'btn-lg'
}

export const Button: React.FC<ButtonProps> = ({
	isOutline = false,
	isLink = false,
	variant = 'primary',
	size = 'md',
	shadow = false,
	isLoading = false,
	loadingType = 'ring',
	children,
	icon,
	...rest
}: ButtonProps): JSX.Element => {
	const classNames = classnames(
		'btn relative',
		{ 'btn-outline': isOutline },
		{ 'btn-link': isLink },
		{ [`btn-${variant}`]: variant },
		{ [`${SizeClasses[size]}`]: size },
		{ 'btn-shadow': shadow }
	)
	return (
		<button className={classNames} {...rest}>
			<span className={`flex items-center  ${isLoading ? 'blur-[1px]' : ''}`}>
				{icon && <span className='mr-1'>{icon}</span>}
				{children}
			</span>
			{isLoading && (
				<span className='loading-container'>
					<Loading type={loadingType} variant='ghost' />
				</span>
			)}
		</button>
	)
}

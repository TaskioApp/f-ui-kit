/** @format */

import { JSX } from 'react'
import { ButtonProps, ButtonShape } from './types'
import { Size } from '@/types/size.type'

import classnames from 'classnames'

const SizeClasses: Record<Size, string> = {
	tiny: 'btn-tiny',
	small: 'btn-small',
	normal: 'btn-normal',
	large: 'btn-large'
}

const ShapeClasses: Record<ButtonShape, string> = {
	default: '',
	full: 'btn-block',
	square: 'btn-square',
	wide: 'btn-wide'
}

export const Button: React.FC<ButtonProps> = ({
	isOutline = false,
	shape = 'default',
	isLink = false,
	variant = 'primary',
	size = 'normal',
	children
}: ButtonProps): JSX.Element => {
	const classNames = classnames(
		'btn',
		{ 'btn-outline': isOutline },
		{ 'btn-link': isLink },
		{ [`btn-${variant}`]: variant },
		{ [`${SizeClasses[size]}`]: size },
		{ [`${ShapeClasses[shape]}`]: shape }
	)
	return <button className={classNames}>{children}</button>
}

/** @format */

import classNames from 'classnames'
import { LoadingProps } from './types'
import { Size } from '@/types/size.type'

const SizeClasses: Record<Size, string> = {
	xs: 'loading-xs',
	sm: 'loading-sm',
	md: 'loading-md',
	lg: 'loading-lg'
}

export const Loading: React.FC<LoadingProps> = ({ type = 'spinner', variant = 'info', size = 'md' }: LoadingProps) => {
	const classes = classNames(
		'loading',
		{ [`loading-${variant}`]: variant },
		{ [`loading-${type}`]: type },
		{ [`${SizeClasses[size]}`]: size }
	)

	return <span className={classes}></span>
}

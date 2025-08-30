/** @format */

import { Size } from '@/types/size.type'
import { Variant } from '@/types/variant.type'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutline?: boolean
	isLink?: boolean
	shape?: ButtonShape
	variant?: Variant
	size?: Size
}
export type ButtonShape = 'default' | 'wide' | 'full' | 'square'

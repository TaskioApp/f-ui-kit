/** @format */

import { Size } from '@/types/size.type'
import { Variant } from '@/types/variant.type'
import { ButtonHTMLAttributes } from 'react'
import { LoadingTypes } from '../Loading/types'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutline?: boolean
	isLink?: boolean
	variant?: Variant
	size?: Size
	shadow?: boolean
	loadingType?: LoadingTypes
	isLoading?: boolean
	onClick?: () => void
}

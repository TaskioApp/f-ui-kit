/** @format */

import { Size } from '@/types/size.type'
import { Variant } from '@/types/variant.type'

export type LoadingTypes = 'spinner' | 'ring'

export type LoadingProps = {
	variant?: Variant
	size?: Size
	type?: LoadingTypes
	className?: string
}

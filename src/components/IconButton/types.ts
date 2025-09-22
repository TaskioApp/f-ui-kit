/** @format */

import { TooltipPlacement } from '@heroui/tooltip'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'

export type IconButtonProps = {
	icon: ReactElement<IconType>
	title?: string
	tooltipPlacement?: TooltipPlacement
}

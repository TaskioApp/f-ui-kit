/** @format */

import { Tooltip } from '@heroui/tooltip'
import { IconButtonProps } from './types'

export const IconButton = ({ icon, title, tooltipPlacement = 'top' }: IconButtonProps) => {
	return (
		<Tooltip content={title} placement={tooltipPlacement} className='text-xs'>
			<span className='cursor-pointer'>{icon}</span>
		</Tooltip>
	)
}

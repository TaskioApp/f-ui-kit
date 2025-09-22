/** @format */

import { IconButtonProps } from '@/components/IconButton/types'
import { ReactElement } from 'react'

export const ActionButtons = ({ children }: { children: ReactElement<IconButtonProps>[] }) => {
	return <div className='flex justify-center gap-2'>{children}</div>
}

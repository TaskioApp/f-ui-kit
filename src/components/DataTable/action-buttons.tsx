/** @format */

import { ReactElement } from 'react'
import { IconType } from 'react-icons'

interface DataTableActionButtonsProps {
	children: ReactElement<IconType> | ReactElement<IconType>[]
}

export const DataTableActionButtons = ({ children }: DataTableActionButtonsProps) => {
	return <div className='flex space-x-1 justify-center'>{children}</div>
}

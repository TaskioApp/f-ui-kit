/** @format */

import { IconType } from 'react-icons'

type InputIconProps = {
	Icon: IconType
	size?: number
	color?: string
}

export const InputIcon: React.FC<InputIconProps> = ({ Icon, size = 20, color = '#3c3c3c' }: InputIconProps) => {
	return <Icon size={20} color={color} />
}

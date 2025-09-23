/** @format */
import { Icon } from '../Icons'
import { Button as BaseButton } from './Button'
import { ButtonProps } from './types'

export const Button = Object.assign(BaseButton, {
	Search: (props: ButtonProps) => (
		<BaseButton {...props} icon={<Icon.Search />}>
			Search
		</BaseButton>
	),
	Reset: (props: ButtonProps) => (
		<BaseButton {...props} variant='error' icon={<Icon.Close />}>
			Remove
		</BaseButton>
	)
})

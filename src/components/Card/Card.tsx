/** @format */

import { CardProps } from './types'

export const Card = ({ children, icon, title, footer, className }: CardProps) => {
	return (
		<div className={`card ${className}`}>
			<div className='card-title'>
				{icon && <span className='me-1'>{icon}</span>} {title}
			</div>
			<div className='card-body'>{children}</div>
			{footer && <div className='card-footer'>{footer}</div>}
		</div>
	)
}

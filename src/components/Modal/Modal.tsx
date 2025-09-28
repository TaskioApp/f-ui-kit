/** @format */

import { ModalProps } from './types'

export const Modal = ({ children, icon, title, footer, className }: ModalProps) => {
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

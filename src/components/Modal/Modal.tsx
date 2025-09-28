/** @format */

import { FC } from 'react'
import { ModalProps } from './types'

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className='modal'>
			<div className='modal-body'>
				<div className='modal-header'>
					<h3>{title}</h3>
					<button className='modal-close-button' onClick={onClose}>
						✕
					</button>
				</div>
				<div className='p-4'>{children}</div>
			</div>
		</div>
	)
}

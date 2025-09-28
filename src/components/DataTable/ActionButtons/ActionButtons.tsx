/** @format */

import { ComponentProps } from 'react'
import { IconType } from 'react-icons'
import { MdEdit, MdDeleteForever, MdViewAgenda } from 'react-icons/md'
import { IconButton } from '../../IconButton'

export const Edit = ({ ...rest }: ComponentProps<IconType>) => (
	<IconButton icon={<MdEdit size={20} color='orange' {...rest} />} title='Edit' />
)
export const Delete = ({ ...rest }: ComponentProps<IconType>) => (
	<IconButton icon={<MdDeleteForever size={20} color='red' {...rest} />} title='Delete' />
)
export const View = ({ ...rest }: ComponentProps<IconType>) => (
	<IconButton icon={<MdViewAgenda size={20} color='green' {...rest} />} title='View' />
)

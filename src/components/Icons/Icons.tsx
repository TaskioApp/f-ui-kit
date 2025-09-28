/** @format */

import { ComponentProps } from 'react'
import { IconType } from 'react-icons'
import { MdClose, MdManageSearch, MdInfo } from 'react-icons/md'

export const Search = ({ ...rest }: ComponentProps<IconType>) => <MdManageSearch size={20} {...rest} />
export const Close = ({ ...rest }: ComponentProps<IconType>) => <MdClose size={20} {...rest} />
export const Info = ({ ...rest }: ComponentProps<IconType>) => <MdInfo size={20} {...rest} />

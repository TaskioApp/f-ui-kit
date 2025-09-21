/** @format */

import { ColumnDef, RowData } from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'

export type TableProps<TData extends RowData> = {
	data?: PaginationResponse<TData>
	columns: ColumnDef<TData, unknown>[]
	title?: string
	isLoading: boolean
	setFilters: Dispatch<SetStateAction<PaginationRequest>>
}

export type PaginationResponse<T> = {
	data: T[]
	links: Links
	meta: Meta
}

export type PaginationLink = {
	url: string | null
	label: string
	page: number | null
	active: boolean
}

export type Links = {
	first: string
	last: string
	prev: string | null
	next: string | null
}

export type Meta = {
	current_page: number
	from: number | null
	last_page: number
	links: PaginationLink[]
	path: string
	per_page: number
	to: number | null
	total: number
}

export type PaginationRequest = {
	per_page: number
	page_size: number
	page: number
}

/** @format */

import { createColumnHelper } from '@tanstack/react-table'
import { ReactElement, ReactNode } from 'react'
import { DataTable } from '..'
import { IconButtonProps } from '@/components/IconButton/types'

/* -------------------- Row -------------------- */
export type RowProps<T extends object> = {
	columnHelper: ReturnType<typeof createColumnHelper<T>>
	data?: {
		meta: {
			current_page: number
			per_page: number
		}
	}
}

export const RowColumn = <T extends object>({ columnHelper, data }: RowProps<T>) =>
	columnHelper.display({
		id: 'rowNumber',
		header: '#',
		cell: ({ row }) => {
			const currentPage = data?.meta?.current_page ?? 1
			const pageSize = data?.meta?.per_page ?? 15
			return (currentPage - 1) * pageSize + row.index + 1
		}
	})

/* -------------------- Action Columns -------------------- */

export type ActionColumnsProps<T extends object> = {
	columnHelper: ReturnType<typeof createColumnHelper<T>>
	cell: (row: T) => ReactNode
}

export const ActionColumn = <T extends { id: number }>({ columnHelper, cell }: ActionColumnsProps<T>) =>
	columnHelper.accessor((row: T) => row.id, {
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => (
			<div className='flex justify-center gap-1'>{cell(row.original) as ReactElement<IconButtonProps>}</div>
		)
	})

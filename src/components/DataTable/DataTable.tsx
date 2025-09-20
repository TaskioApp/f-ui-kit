/** @format */

import { flexRender, getCoreRowModel, RowData, useReactTable } from '@tanstack/react-table'
import { Dispatch, JSX, SetStateAction } from 'react'
import { Meta, PaginationRequest, TableProps } from './types'
import { Loading } from '@taskio/ui-kit'

export const DataTable = <TData extends RowData>({
	data,
	setFilters,
	columns,
	title,
	isLoading = true
}: TableProps<TData>): JSX.Element => {
	const table = useReactTable({
		data: data?.data ?? [],
		columns,
		getCoreRowModel: getCoreRowModel()
	})

	return (
		<>
			<div className='overflow-x-auto'>
				{title && (
					<div className='flex items-center'>
						<div className='flex-grow border-t border-gray-400'></div>
						<h1 className='px-4 text-xl font-bold'>
							{isLoading && <Loading />} {title}
						</h1>
						<div className='flex-grow border-t border-gray-400'></div>
					</div>
				)}

				{isLoading && !title && <Loading />}
				{!isLoading && (
					<table className='taskio-table mt-4'>
						<thead>
							{table.getHeaderGroups().map(headerGroup => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map(header => (
										<th key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody>
							{table.getRowModel().rows.map(row => (
								<tr key={row.id}>
									{row.getVisibleCells().map(cell => (
										<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
			{data?.meta && <Pagination meta={data?.meta} setFilters={setFilters} />}
		</>
	)
}

const Pagination = ({ meta, setFilters }: { meta: Meta; setFilters: Dispatch<SetStateAction<any>> }) => {
	return (
		<div className='taskio-pagination'>
			<div className='taskio-pagination-button'>
				<button
					onClick={() => setFilters((p: PaginationRequest) => ({ ...p, page: 1 }))}
					disabled={meta?.current_page === 1}
					className='border p-1 rounded disabled:opacity-50'>
					{'<<'}
				</button>

				<button
					onClick={() => setFilters((p: PaginationRequest) => ({ ...p, page: meta?.current_page - 1 }))}
					disabled={meta?.current_page === 1}
					className='border p-1 rounded disabled:opacity-50'>
					{'<'}
				</button>

				<button
					onClick={() => setFilters((p: PaginationRequest) => ({ ...p, page: meta?.current_page + 1 }))}
					disabled={meta?.current_page === meta?.last_page}
					className='border p-1 rounded disabled:opacity-50'>
					{'>'}
				</button>

				<button
					onClick={() => setFilters((p: PaginationRequest) => ({ ...p, page: meta?.last_page }))}
					disabled={meta?.current_page === meta?.last_page}
					className='border p-1 rounded disabled:opacity-50'>
					{'>>'}
				</button>
			</div>

			<div className='taskio-pagination-page'>
				<span>
					Page {meta?.current_page} of {meta?.total}
				</span>
				<div className='right-side'>
					<span>
						<span className='hidden md:inline'>| </span> Go to page:
						<input
							type='number'
							defaultValue={meta?.current_page}
							max={meta?.last_page}
							min={1}
							onChange={e => {
								const page = Number(e.target.value)
								setFilters((p: PaginationRequest) => ({ ...p, page }))
							}}
							className='border p-1 rounded w-16 ml-1'
						/>
					</span>

					<select
						value={meta?.per_page}
						onChange={e => setFilters((p: PaginationRequest) => ({ ...p, per_page: Number(e.target.value) }))}
						className='border p-1 rounded'>
						{[10, 15, 20, 30, 50].map(size => (
							<option key={size} value={size}>
								Show {size}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	)
}

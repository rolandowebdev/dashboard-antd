import { Table as AntTable, TablePaginationConfig } from 'antd'

type TableProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any[]
	loading: boolean
	columnsData: { title: string; dataIndex: string }[]
	pagination?: TablePaginationConfig
}

export const Table = ({
	data,
	loading,
	columnsData,
	pagination,
}: TableProps) => {
	return (
		<AntTable
			bordered
			columns={columnsData}
			loading={loading}
			dataSource={data}
			pagination={pagination ? pagination : false}
		/>
	)
}

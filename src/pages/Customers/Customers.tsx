import { Space, Typography } from 'antd'
import { Table } from '../../components'
import { fetchCustomers } from '../../lib/fetchData'
import { Users } from '../../types'
import { usersTable } from '../../utils'
import { UseQueryResult, useQuery } from 'react-query'

export const Customers = () => {
	const { data: users, isLoading }: UseQueryResult<Users> = useQuery<Users>(
		'users',
		fetchCustomers
	)

	return (
		<Space size={0} direction='vertical' style={{ width: '100%' }}>
			<Typography.Title level={3}>Orders</Typography.Title>
			<Table
				data={users?.users || []}
				loading={isLoading}
				columnsData={usersTable}
				pagination={{ pageSize: 5 }}
			/>
		</Space>
	)
}

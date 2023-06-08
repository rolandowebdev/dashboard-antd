import { Space, Typography } from 'antd'
import { UseQueryResult, useQuery } from 'react-query'
import { Table } from '../../components'
import { Content } from '../../layout'
import { fetchCustomers } from '../../lib'
import { Users } from '../../types'
import { usersTable } from '../../utils'

export const Customers = () => {
	const { data: users, isLoading }: UseQueryResult<Users> = useQuery<Users>(
		'users',
		fetchCustomers
	)

	return (
		<Content>
			<Space size={2} direction='vertical' style={{ width: '100%' }}>
				<Typography.Title level={3}>Customers</Typography.Title>
				<Table
					data={users?.users || []}
					loading={isLoading}
					columnsData={usersTable}
					pagination={{ pageSize: 5 }}
				/>
			</Space>
		</Content>
	)
}

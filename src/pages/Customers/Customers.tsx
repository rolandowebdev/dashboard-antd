import { Space, Typography } from 'antd'
import { Table } from '../../components'
import { Users } from '../../types'
import { usersTable } from '../../utils'
import { UseQueryResult, useQuery } from 'react-query'
import { fetchCustomers } from '../../lib'
import { Content } from '../../layout'

export const Customers = () => {
	const { data: users, isLoading }: UseQueryResult<Users> = useQuery<Users>(
		'users',
		fetchCustomers
	)

	return (
		<Content>
			<Space size={0} direction='vertical' style={{ width: '100%' }}>
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

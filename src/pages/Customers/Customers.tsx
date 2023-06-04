import { Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { Table } from '../../components'
import { fetchCustomers } from '../../lib/fetchData'
import { User } from '../../types'
import { usersTable } from '../../utils'

export const Customers = () => {
	const [users, setUsers] = useState<User[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)
		fetchCustomers().then((res) => setUsers(res.users))
		setLoading(false)
	}, [])

	return (
		<Space size={0} direction='vertical' style={{ width: '100%' }}>
			<Typography.Title level={3}>Orders</Typography.Title>
			<Table
				data={users}
				loading={loading}
				columnsData={usersTable}
				pagination={{ pageSize: 5 }}
			/>
		</Space>
	)
}

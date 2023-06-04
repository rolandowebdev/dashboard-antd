import { Card, Space, Statistic } from 'antd'
import { ReactNode } from 'react'

type MenuCardProps = {
	title: string
	value: number
	icon: ReactNode
}

export const MenuCard = ({ title, value, icon }: MenuCardProps) => {
	return (
		<Card bordered>
			<Space direction='horizontal' size={24}>
				{icon}
				<Statistic title={title} value={value} />
			</Space>
		</Card>
	)
}

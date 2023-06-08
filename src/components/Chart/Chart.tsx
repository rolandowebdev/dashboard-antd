import { Card, Typography } from 'antd'
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ChartDataSource } from '../../types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type ChartProps = {
	isLoading: boolean
	isError: boolean
	error: Error | null
	dataSource: ChartDataSource
}

export const Chart = ({
	isLoading,
	isError,
	error,
	dataSource,
}: ChartProps) => {
	return (
		<Card loading={isLoading}>
			{isError ? (
				<Typography.Text>{error?.message}</Typography.Text>
			) : (
				<Bar
					options={{
						responsive: true,
						plugins: {
							legend: { position: 'bottom' },
							title: { display: true, text: 'Order Revenue' },
						},
					}}
					data={dataSource}
				/>
			)}
		</Card>
	)
}

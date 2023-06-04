import { Card } from 'antd'
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { fetchRevenue } from '../../lib/fetchData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const Chart = () => {
	const [reveneuData, setReveneuData] = useState<{
		labels: string[]
		datasets: { label: string; data: number[] }[]
	}>({
		labels: [],
		datasets: [],
	})

	const fetchData = async () => {
		try {
			const res = await fetchRevenue()
			const labels = res.carts.map((cart) => `User-${cart.userId}`)
			const data = res.carts.map((cart) => cart.discountedTotal)

			const dataSource = {
				labels,
				datasets: [{ label: 'Revenue', data, backgroundColor: '#001529' }],
			}

			setReveneuData(dataSource)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Card style={{ height: 298 }}>
			<Bar
				options={{
					responsive: true,
					plugins: {
						legend: { position: 'bottom' },
						title: { display: true, text: 'Order Revenue' },
					},
				}}
				data={reveneuData}
			/>
		</Card>
	)
}

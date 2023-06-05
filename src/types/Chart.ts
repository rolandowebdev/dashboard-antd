export type ChartDataSource = {
	labels: string[]
	datasets: {
		label: string
		data: number[]
		backgroundColor: string
	}[]
}

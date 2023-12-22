import {useEffect, useContext} from 'react'

import Chart from 'chart.js/auto'

const months = [{name: 'January', days: 31}, 
	{name: 'February', days: 28}, 
	{name: 'March', days: 31}, 
	{name: 'April', days: 30}, 
	{name: 'May', days: 31}, 
	{name: 'June', days: 30}, 
	{name: 'July', days: 31},
	{name: 'August', days: 31}, 
	{name: 'September', days: 30}, 
	{name: 'October', days: 31}, 
	{name: 'November', days: 30}, 
	{name: 'December', days: 31}]

function findIndexOfRank(rank, ranks){
	let i = 0

	while(i < ranks.length){
		if(ranks[i].rank == rank){
			return i
		}
		i++
	}
}

function getXAxisLabels(props, currentMonth){

	const datesToDisplay = []

	const date = new Date()
	let day = date.getDate()

	let i = 0;

	//TOOD: The max number of days can be a setting? passed in via props
	while(i < currentMonth.days){
		if(day > currentMonth.days){
			day = 1
		}
		datesToDisplay.push(day)
		day++
		i++
	}

	return datesToDisplay
}

//TODO: Fix the issue of if the user refreshes while on the Home page, the y-axis labels do not render
//TODO: Add Settings option to display weeks or months
export default function RankChart(props){

	const settings = props.settings

	const currentMonth = months[new Date().getMonth()]

	const datesToDisplay = getXAxisLabels(props, currentMonth)

	const divisions = [1, 2, 3, 4]
	const ranks = [
		{rank: 'Iron', divisions: divisions},
		{rank: 'Bronze', divisions: divisions},
		{rank: 'Silver', divisions: divisions},
		{rank: 'Gold', divisions: divisions},
		{rank: 'Platinum', divisions: divisions},
		{rank: 'Emerald', divisions: divisions},
		{rank: 'Diamond', divisions: divisions},
		{rank: 'Master'},
		{rank: 'Grandmaster'},
		{rank: 'Challenger'}]
	const divisionLp = 100 //The amount of LP needed to go up/down an entire division (ie from Platinum 3 to Platinum 2 is 100LP)

	let start = findIndexOfRank(settings.general.current_rank, ranks)
	let end = findIndexOfRank(settings.general.goal_rank, ranks)
	// const rankRange = ranks.splice(findIndexOfRank(settings.general.current_rank, ranks), findIndexOfRank(settings.general.goal_rank, ranks) + 1)
	// console.log('rank range: ', rankRange)

	const userData = [0, 25, 100, 200, 225, 250, 200, 250, 300, 200, 300, 375, 400, 400, 350, 400, 425, 450, 500, 400, 425, 400, 500, 600, 700, 650, 700, 625, 600, 700, 725, 800]

	const rankData = {
		labels: datesToDisplay,
		datasets: [
			{
				label: 'LP',
				data: userData,
				borderWidth: 5,
				borderColor: '#3dd8f4',
				backgroundColor: '#3dd8f4'
			},
		]
	}

	useEffect(() => {
		const ctx = document.getElementById('rank-chart')

		const ranksToDisplay = []

		while(start <= end){
			if(ranks[start].divisions){
				let div = 0
				while(div < divisions.length){
					ranksToDisplay.push(ranks[start].rank + ' ' + ranks[start].divisions[div])
					div++
				}
			}else{
				ranksToDisplay.push(ranks[start].rank)
			}
			start++

			console.log('ranksToDisplay: ', ranksToDisplay)
		}


		//ANIMATION CONFIGURATION

		const totalDuration = 2500;
		const delayBetweenPoints = totalDuration / userData.length;
		const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
		const animation = {
		  x: {
		    type: 'number',
		    easing: 'linear',
		    from: NaN, // the point is initially skipped
		    delay(ctx) {
		      if (ctx.type !== 'data' || ctx.xStarted) {
		        return 0;
		      }
		      ctx.xStarted = true;
		      return ctx.index * delayBetweenPoints;
		    }
		  },
		  y: {
		    type: 'number',
		    easing: 'linear',
		    from: previousY,
		    delay(ctx) {
		      if (ctx.type !== 'data' || ctx.yStarted) {
		        return 0;
		      }
		      ctx.yStarted = true;
		      return ctx.index * delayBetweenPoints;
		    }
		  }
		};



		new Chart(ctx, {
			type: 'line',
			data: rankData,
			options: {
				animation,
				responsive: true,
				parsing:{
					xAxisKey:'rank'
				},
				plugins:{
					legend:{
						display: false
					}
				},
				scales: {
					x: {
						text: currentMonth,
						grid: {
							display: false
						},
						ticks:{
							font:{
								size: 14,
								weight: 'bold'
							}
						}
					},
					y: {
						ticks: {
							callback: function(val, index, ticks){
								return ranksToDisplay[index]
							},
							count: ranksToDisplay.length,
							stepSize: 25,
							font: {
								size: 14,
								weight: 'bold'
							}
						},
						grid: {
							display: false
						},
						max: 1000,
						beginAtZero: true
					}
				}
			},

		})
	},[])

	return(
		<div style={{width:'100%', marginTop:'5rem'}}>
			<canvas id="rank-chart"></canvas>
		</div>
	)
}
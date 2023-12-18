export default function RankSection(props){

	const division = props.data.division

	let displayLevel = true

	if(division == 'Master' || division == 'Grandmaster' || division == 'Challenger'){
		displayLevel = false
	}

	return(
		<div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'start'}}>
			<h1 style={{textAlign:'left', width:'50%'}}>{props.goal ? 'Goal Rank' : 'Current Rank'}</h1>
			<img src={`/ranks/opgg/${division.toLowerCase()}.png`} style={{width:'200px'}}/>
			<div style={{textAlign:'start', width:'25%'}}>
				<h3>{division} {displayLevel ? props.data.level : null}</h3>
				<div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
					<p>{props.data.lp}LP</p>
				</div>
			</div>
		</div>
	)
}
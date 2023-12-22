export default function RankSection(props){

	const division = props.data.division

	let displayLevel = true

	if(division == 'Master' || division == 'Grandmaster' || division == 'Challenger'){
		displayLevel = false
	}

	return(
		<div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
			{/*<h1 style={{textAlign:'left', width:'50%'}}>{props.goal ? 'Goal Rank' : 'Current Rank'}</h1>*/}
			<img src={`/ranks/opgg/${division.toLowerCase()}.png`} style={{width:'400px'}}/>
			<div style={{fontSize:'32px', marginTop:'-25%'}}>
				<h3>{division} {displayLevel ? props.data.level : null}</h3>
				<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
					<p>{props.data.lp}LP</p>
				</div>
			</div>
		</div>
	)
}
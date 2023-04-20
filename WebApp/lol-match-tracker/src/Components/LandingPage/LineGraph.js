function LineGraph(props) {

    let circleXs = []
    let circleYs = []

    for(const i in props.points)
    {
        let temp = props.points[i].split(",")
        circleXs.push(temp[0])
        circleYs.push(temp[1])
    }

    //TODO: The circle components can be generated via a map()
  return (
    <div className="graph-container">
        <div className="graph-axis">
        <svg xmlns="http://www.w3.org/2000/svg" className="graph">
            <polyline points={`${props.points}`} fill="none" stroke="green" stroke-width="5"></polyline>
            <circle cx={circleXs[0]} cy={circleYs[0]} r={props.circle_radius} fill="green"></circle>
            <circle cx={circleXs[1]} cy={circleYs[1]} r={props.circle_radius} fill="green"></circle>
            <circle cx={circleXs[2]} cy={circleYs[2]} r={props.circle_radius} fill="green"></circle>
            <circle cx={circleXs[3]} cy={circleYs[3]} r={props.circle_radius} fill="green"></circle>
            {/* <circle cx={circleXs[4]} cy={circleYs[4]} r={props.circle_radius} fill="green"></circle> */}
          </svg>
        </div>
    </div>
  );
}

export default LineGraph;

export default function ItemClassFilter(props){
    //Potential future props:
    //Order - Pass in an array that specifies the order
    //Default - Pass in a "default" role that's already applying the filter
    return(
        <div>
            <button onClick={() => props.doFilter("All")}>All</button>
            <button onClick={() => props.doFilter("Mage")}>Mage</button>
            <button onClick={() => props.doFilter("Tank")}>Tank</button>
            <button onClick={() => props.doFilter("Bruiser")}>Bruiser</button>
            <button onClick={() => props.doFilter("ADC")}>ADC</button>
            <button onClick={() => props.doFilter("Assassin")}>Assassin</button>
            <button onClick={() => props.doFilter("Support")}>Support</button>
        </div>
    )
}
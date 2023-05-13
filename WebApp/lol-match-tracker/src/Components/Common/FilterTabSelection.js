export default function FilterTabSelection(props){

    const markFilterTypes = (itemType) => {
        const container = document.getElementById(`${props.itemType}-item-filter-container`)

        for(let filter of container.children){
            console.log("filter: ", filter)
            if(filter.id == `filter-${itemType}`){
                filter.className = "item-filter-selection item-filter-enabled"
            }
            else{
                filter.className = "item-filter-selection item-filter-disabled"
            }
        }
    }

    return(
        <div id={`filter-${props.filterSelection}`} className="item-filter-selection" onClick={() => {
            props.doFilter(props.filterSelection)
            markFilterTypes(props.filterSelection)
        }}>{props.filterSelection}</div>
    )
}
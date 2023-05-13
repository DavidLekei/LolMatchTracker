import './Item.css'

import FilterTabSelection from '../../../Common/FilterTabSelection'

export default function ItemClassFilter(props){
    //Potential future props:
    //Order - Pass in an array that specifies the order
    //Default - Pass in a "default" role that's already applying the filter
    return(
        <div id={`${props.itemType}-item-filter-container`} className="item-filter-container">
            {/* <div id="filter-All" className="item-filter-selection" onClick={() => {
                props.doFilter("All")
                markFilterTypes("All")
            }}>All</div> */}
            <FilterTabSelection itemType={props.itemType} filterSelection="All" doFilter={props.doFilter} />
            <FilterTabSelection itemType={props.itemType} filterSelection="Mage" doFilter={props.doFilter} />
            <FilterTabSelection itemType={props.itemType} filterSelection="Tank" doFilter={props.doFilter} />
            <FilterTabSelection itemType={props.itemType} filterSelection="Bruiser" doFilter={props.doFilter} />
            <FilterTabSelection itemType={props.itemType} filterSelection="ADC" doFilter={props.doFilter} />
            <FilterTabSelection itemType={props.itemType} filterSelection="Assassin" doFilter={props.doFilter} />
            <FilterTabSelection itemType={props.itemType} filterSelection="Support" doFilter={props.doFilter} />
        </div>
    )
}
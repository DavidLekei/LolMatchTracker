import React from 'react'

function showSearchOptions(tableId){
    let table = document.getElementById(tableId)
    console.log('Table to search: ', table)
}

//TODO: Make a more generic CSS class for the image size, or pass it in via props, in order to set the size
//      ie: 'match-filter-img' is the class that causes the icon to scale down
export default function SearchButton(props){

    return(
        <div className="search-btn-img match-filter-img" onClick={() => {
            showSearchOptions(props.tableId)
        }}>
            <img src={`/icons/search.png`}></img>
        </div>
    )
}
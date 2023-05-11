import {useState} from 'react'

import Item from './Item'
import ItemClassFilter from './ItemClassFilter'

var mageItems = []
var tankItems = []
var bruiserItems = []
var adcItems = []
var assassinItems = []
var supportItems = []
var itemsAdded = false

function addItemToClassList(item){

    //Guard to ensure this function is only called once upon component initial creation
    if(itemsAdded){
        return
    }

    if(item.class.includes("Mage")){
        mageItems.push(item)
    }

    if(item.class.includes("Tank")){
        tankItems.push(item);
    }

    if(item.class.includes("Bruiser")){
        bruiserItems.push(item);
    }

    if(item.class.includes("ADC")){
        adcItems.push(item);
    }

    if(item.class.includes("Assassin")){
        assassinItems.push(item);
    }

    if(item.class.includes("Support")){
        supportItems.push(item);
    }
}

export default function ItemsContainer(props){

    const allItems = props.items.map((item) => {
        return <Item type={props.type} name={item.name} img={item.img} onclick={props.itemOnClick} classes={item.class}/>
    })

    props.items.forEach((item) => {
        addItemToClassList(item)
    })

    itemsAdded = true

    const [items, filterItems] = useState(allItems)
   
    const createItem = (item) => {
        return <Item type={props.type} name={item.name} img={item.img} onclick={props.itemOnClick} classes={item.class} />
    }

    //TODO: This function could be cleaned up by implementing some kind of hash table that takes in the itemClass and returns the appropriate __Items array
    //      IE: If we do itemHashMap.get(itemClass).map(...) for example, then we can clean up all of these if/else statements
    const doFilter = (itemClass) => {
        console.log("Applying Filter For: ", itemClass)

        if(itemClass == "Mage"){
            filterItems(mageItems.map((item) => createItem(item)))
        }

        else if(itemClass == "All"){
            filterItems(allItems)
        }

        else if(itemClass == "Tank"){
            filterItems(tankItems.map((item) => createItem(item)))
        }

        else if(itemClass == "Bruiser"){
            filterItems(bruiserItems.map((item) => createItem(item)))
        }

        else if(itemClass == "ADC"){
            filterItems(adcItems.map((item) => createItem(item)))
        }

        else if(itemClass == "Assassin"){
            filterItems(assassinItems.map((item) => createItem(item)))
        }

        else if(itemClass == "Support"){
            filterItems(supportItems.map((item) => createItem(item)))
        }

    }

    console.log("Mage Items: ", mageItems)

    return(
        <div style={{width:"70%"}}>
            <h2>{props.type}</h2>
            <ItemClassFilter doFilter={doFilter}/>
            <div id={`${props.type}-container`} style={{display:"flex", flexDirection:"row", flexWrap:"wrap", outline:"2px solid blue"}}>
                {items}
            </div>
        </div>
    )
}
import {useState} from 'react'

import Item from './Item'
import ItemClassFilter from './ItemClassFilter'

export default function ItemsContainer(props){
    
    //These need to be declared WITHIN the function scope, or else they're treated essentially as global variables, which will result in 
    //all of the "ItemsContainer" components sharing the same list of items
    var mageItems = []
    var tankItems = []
    var bruiserItems = []
    var adcItems = []
    var assassinItems = []
    var supportItems = []
    var itemsAdded = false
    //
    //Function declarations
    //
    const createItem = (item) => {
        return <Item type={props.type} name={item.name} img={item.img} onclick={props.itemOnClick} classes={item.class} />
    }

    const addItemToClassList = (item) => {
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

    const resetMarks = (itemType) => {
        let container = document.getElementById(`${itemType}-container`)

        console.log("Getting Container for Type: ", itemType)

        for(let item of container.children){
            item.className = `item ${itemType}-item`
        }
    }

    //TODO: This function could be cleaned up by implementing some kind of hash table that takes in the itemClass and returns the appropriate __Items array
    //      IE: If we do itemHashMap.get(itemClass).map(...) for example, then we can clean up all of these if/else statements
    const doFilter = (itemClass) => {
        console.log(`[${props.type}] - Applying Filter For: `, itemClass)

        if(itemClass == "Mage"){
            console.log("mageItems before map: ", mageItems)
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

        resetMarks(props.type)
    }

    //
    //End of Function Declarations
    //

    console.log('props.items: ', props.items)

    const allItems = props.items.map((item) => {
        return <Item type={props.type} name={item.name} img={item.img} onclick={props.itemOnClick} classes={item.class}/>
    })

    console.log('allItems: ',allItems)

    props.items.forEach((item) => {
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
    })

    //State declaration
    const [items, filterItems] = useState(allItems)

    console.log("Items: ", items)

    itemsAdded = true

    return(
        <div style={{width:"70%"}}>
            <h2>{props.type}</h2>
            <ItemClassFilter itemType={props.type} doFilter={doFilter}/>
            <div id={`${props.type}-container`} style={{display:"flex", flexDirection:"row", flexWrap:"wrap", outline:"2px solid blue"}}>
                {items}
            </div>
        </div>
    )
}
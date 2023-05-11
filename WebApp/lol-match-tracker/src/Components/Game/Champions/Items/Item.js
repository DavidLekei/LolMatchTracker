export default function Item(props){
    return(
        <div id={props.name} className={`item item-${props.type}`} style={{width:"48px", height:"48px", margin:"10px"}} onClick={() => props.onclick(props.name)}>
            <img
                loading="lazy"
                src={`/game/item/${props.img}`}
                width="48"
                alt=""
            />
        </div>
    )
}
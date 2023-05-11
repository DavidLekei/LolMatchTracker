export default function Item(props){
    return(
        <div id={props.name} className={`item item-${props.type}`} style={{width:"64px", height:"64px", margin:"10px"}} onClick={() => props.onclick(props.name)}>
            <img
                loading="lazy"
                src={`/game/item/${props.img}`}
                width="64"
                alt=""
            />
        </div>
    )
}
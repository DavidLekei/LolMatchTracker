export default function ChampionInfo(props){

    const summs = props.summoners.map((summ, index) => {
        return <img className={`${props.enemy ? 'enemy-match-info-img': 'match-info-img'}`} src={`/game/summoners/${summ}.png`} />
    })

    const runes = props.runes.map((rune, index) => {
        return <img className={`${props.enemy ? 'enemy-match-info-img': 'match-info-img'}`} src={`/game/perk-images/Styles/${rune}.png`} />
    })

    const items = props.items.map((item, index) => {
        let itemImg
        if(item == 0){
            return <div className={`match-info-img empty-item-${props.outcome}`}> </div>
        }else{
            itemImg = `/game/item/${item}.png`
        }
        return <img className={`${props.enemy ? 'enemy-match-info-img': 'match-info-img'}`} src={itemImg} />
    })

    return(
        <div className={`column champion-info`} style={props.style}>
            <div className="row">
                <img className={`${props.enemy ? 'enemy-match-info-img enemy-champ-img img-container' : 'match-info-img champ-img img-container'}`} src={`/game/champion/${props.name}.png`} />
                <div className="column img-container">
                    {summs}
                </div>
                <div className="column">
                    {runes}
                </div>
            </div>
            <div className="row items">
                {items}
            </div>
        </div>
    )
}
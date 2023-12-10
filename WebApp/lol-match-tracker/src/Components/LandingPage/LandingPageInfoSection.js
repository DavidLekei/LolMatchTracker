import './LandingPage.css'

export default function LandingPageInfoSection(props){

        if(props.textSide == "right"){
            return(
                <section className="lp-main-attraction">
                    <img className="lp-main-attraction-image" src={props.image} />
                    <div className="lp-main-attraction-text">
                        <h2>{props.heading}</h2>
                        <p>{props.subtext}</p>
                        <p>{props.subtext2}</p>
                    </div>
                </section>
            )
        }
        else{
            return(
                <section className="lp-main-attraction">
                    <div className="lp-main-attraction-text">
                        <h2>{props.heading}</h2>
                        <p>{props.subtext}</p>
                        <p>{props.subtext2}</p>
                    </div>
                    <img className="lp-main-attraction-image" src={props.image} />
                </section>
            )
        }
    

}
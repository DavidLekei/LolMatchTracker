import React, {Component} from 'react';

import LineGraph from './LineGraph'

import './LandingPage.css'

class LandingPageHeader extends Component{

    render(){
        if(this.props.textSide == "right")
        {
            return(
                <section className="lp-main-header last">
                    <div className="lp-main-header-graph">
                        <LineGraph points={["10,360", "250,250", "500,180", "670,10"]} circle_radius="8"></LineGraph>
                    </div>
                    <div className={`lp-main-header-text ${this.props.textSide}`}>
                        <h1>{this.props.text}</h1>
                    </div>
                </section>
            )
        }
        else{
            return(
                <section className="lp-main-header">
                    <div className={`lp-main-header-text ${this.props.textSide}`}>
                        <h1>{this.props.text}</h1>
                    </div>
                    <div className="lp-main-header-image">
                        <div className="lp-main-img-slice">
                            <img src="/ranks/2023/platinum-center.png"></img>
                        </div>
                        <div className="lp-main-img-slice">
                            <img src="/ranks/2023/diamond-center.png"></img>
                        </div>
                        <div className="lp-main-img-slice">
                            <img src="/ranks/2023/master-center.png"></img>
                        </div>
                        <div className="lp-main-img-slice">
                            <img src="/ranks/2023/grandmaster-center.png"></img>
                        </div>
                        <div className="lp-main-img-slice">
                            <img src="/ranks/2023/challenger-center.png"></img>
                        </div>
                    </div>
                </section>
            )
        }
    }

}

export default LandingPageHeader;
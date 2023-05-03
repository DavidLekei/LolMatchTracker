import React, {Component} from 'react';

import './LandingPage.css'

class LandingPageInfoSection extends Component{

    render(){

        if(this.props.textSide == "right"){
            return(
                <section className="lp-main-attraction">
                    <div className="lp-main-attraction-image">
                        <h2>IMG</h2>
                    </div>
                    <div className="lp-main-attraction-text">
                        <h2>{this.props.heading}</h2>
                        <p>This is some filler text describing what can be done on the App. This is some filler text describing what can be done on the App. This is some filler text describing what can be done on the App.</p>
                    </div>
                </section>
            )
        }
        else{
            return(
                <section className="lp-main-attraction">
                    <div className="lp-main-attraction-text">
                        <h2>{this.props.heading}</h2>
                        <p>This is some filler text describing what can be done on the App.</p>
                    </div>
                    <div className="lp-main-attraction-image">
                        <h2>IMG</h2>
                    </div>
                </section>
            )
        }
    }

}

export default LandingPageInfoSection;
import React, {Component} from 'react';

import './LandingPage.css'

import AppToolbar from '../Toolbar/AppToolbar';
import LandingPageHeader from './LandingPageHeader'
import LandingPageInfoSection from './LandingPageInfoSection'

class LandingPage extends Component{

    render(){
        return(
            <div className="lp-main">
                <AppToolbar loggedIn={false}/>
                <LandingPageHeader text="Improve." textSide="left"/>
                <LandingPageHeader text="Consistently." textSide="right"/>
                <LandingPageInfoSection heading="Track your progress" textSide="left">
                </LandingPageInfoSection>
                <LandingPageInfoSection heading="Take detailed notes" textSide="right">
                </LandingPageInfoSection>
                <LandingPageInfoSection heading="Stay focused" textSide="left">
                </LandingPageInfoSection>
            </div>
        )
    }

}

export default LandingPage;
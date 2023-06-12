import React from 'react'

import AppToolbar from '../Toolbar/AppToolbar';
import LandingPageHeader from './LandingPageHeader'
import LandingPageInfoSection from './LandingPageInfoSection'

export default function LandingPageHero(props){
    return(
        <div>
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
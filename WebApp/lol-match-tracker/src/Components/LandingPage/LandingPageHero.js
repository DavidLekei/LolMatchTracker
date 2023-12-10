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

                <LandingPageInfoSection 
                    heading="Track your progress"
                    subtext="With live match and rank data pulled from Riot's API, we can track the progress you're making towards your goals."
                    textSide="left"
                    image="/LandingPage/stats.png"
                >
                </LandingPageInfoSection>

                <LandingPageInfoSection 
                    heading="Record your games, watch them anywhere!" 
                    subtext="Record directly from the browser. No need to install third-party recording software."
                    subtext2="Recordings get stored securely on our servers, allowing you to watch them back any time, any place!"
                    textSide="right" 
                    image="/LandingPage/video-player.png"
                    >
                </LandingPageInfoSection>

                <LandingPageInfoSection 
                    heading="Stay focused" 
                    subtext="Have two monitors? Ever feel yourself getting distracted by Discord, Reddit, etc. when you should be playing with intensity?"
                    subtext2="Focus mode puts your browser into full screen, and shows you your current learning objectives, allowing you to play to your full potential!"
                    textSide="left"
                    image="/LandingPage/journey.png"
                    >
                </LandingPageInfoSection>
        </div>
    )
}
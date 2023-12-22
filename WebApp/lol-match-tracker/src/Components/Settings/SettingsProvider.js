import {useState, useEffect, useContext, createContext} from 'react'

import API from '../../API/api'

export const SettingsContext = createContext({});

//TODO: If user refreshes the page, settings are displayed as default, even though the API call to get/set the users settings works, the Settings page doesn't update
export default function SettingsProvider(props){

    const api = API()

    const defaultSettings = {
        'general': {
            'dark_mode':false,
            'show_lp_changes':true,
            'starting_rank': '',
            'starting_lp': '',
            'current_rank' : 'Platinum',
            'current_lp': 0,
            'goal_rank': '',
            'goal_lp' : '',
        },
        'account': {
            'riot_account_name':'',
        },
        'home': {
            'num_recent': 3,
            'num_notes': 5,
        },
        'matches': {

        },
        'recording': {
            'record_audio': true,
            'enable_focus_mode': true,
            'download_recording': false,
            'link_recording_to_most_recent': true,
        },
        'quick_actions': {
            'every_page': false,
            'enabled': [
                'Record',
                'Journey',
                'Note',
            ]
        }
    }

    const [settings, setSettings] = useState(defaultSettings)

    useEffect(() => {
        api.getSettings((settings) => {
            console.log('getSettings callback called: ', settings)
            setSettings(settings)
        })
    }, [])
        
    return (
        <SettingsContext.Provider 
            value={settings}>
            {props.children}
        </SettingsContext.Provider>
    )
}
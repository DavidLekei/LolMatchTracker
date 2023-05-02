import {React, useState} from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const handleChange = (event, value, reason) => {
    console.log("TEST");
}

export default function ChampionSelectField(props){

    const [selectedChampion, updateSelectedChampion] = useState(null);

    const options = champions.map((champion) => {
        const firstLetter = champion.name[0];
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...champion,
        }
    });

    let addButton;
    let championImg;

    if(props.button === true)
    {
        addButton = <input type="button" label="+"></input>
    }

    if(selectedChampion != null && selectedChampion != "")
    {
        championImg = <img src={`/game/champion/${selectedChampion}.png`}/>
    }

    return (
        <div className = "modal-filter-dropdown-container align-column-start"><Autocomplete
            id={props.id}
            options={options.sort((a,b) => a.firstLetter.localeCompare(b.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.name}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label={props.label} 
            onSelect={(event) => {
                updateSelectedChampion(document.getElementById(event.target.id).value) 
            }}
            />
        }
        />
        {addButton}
        {championImg}
        </div>
    )
}

const champions = [
{name: "Aatrox"},
{name: "Ahri"},
{name: "Akali"},
{name: "Akshan"},
{name: "Alistar"},
{name: "Amumu"},
{name: "Anivia"},
{name: "Annie"},
{name: "Aphelios"},
{name: "Ashe"},
{name: "Aurelion Sol"},
{name: "Azir"},
{name: "Bard"},
{name: "Bel'Veth"},
{name: "Blitzcrank"},
{name: "Brand"},
{name: "Braum"},
{name: "Caitlyn"},
{name: "Camille"},
{name: "Cassiopeia"},
{name: "Cho'Gath"},
{name: "Corki"},
{name: "Darius"},
{name: "Diana"},
{name: "Dr. Mundo"},
{name: "Draven"},
{name: "Ekko"},
{name: "Elise"},
{name: "Evelynn"},
{name: "Ezreal"},
{name: "Fiddlesticks"},
{name: "Fiora"},
{name: "Fizz"},
{name: "Galio"},
{name: "Gangplank"},
{name: "Garen"},
{name: "Gnar"},
{name: "Gragas"},
{name: "Graves"},
{name: "Gwen"},
{name: "Hecarim"},
{name: "Heimerdinger"},
{name: "Illaoi"},
{name: "Irelia"},
{name: "Ivern"},
{name: "Janna"},
{name: "Jarvan IV"},
{name: "Jax"},
{name: "Jayce"},
{name: "Jhin"},
{name: "Jinx"},
{name: "K'Sante"},
{name: "Kai'Sa"},
{name: "Kalista"},
{name: "Karma"},
{name: "Karthus"},
{name: "Kassadin"},
{name: "Katarina"},
{name: "Kayle"},
{name: "Kayn"},
{name: "Kennen"},
{name: "Kha'Zix"},
{name: "Kindred"},
{name: "Kled"},
{name: "Kog'Maw"},
{name: "LeBlanc"},
{name: "Lee Sin"},
{name: "Leona"},
{name: "Lillia"},
{name: "Lissandra"},
{name: "Lucian"},
{name: "Lulu"},
{name: "Lux"},
{name: "Malphite"},
{name: "Malzahar"},
{name: "Maokai"},
{name: "Master Yi"},
{name: "Miss Fortune"},
{name: "Mordekaiser"},
{name: "Morgana"},
{name: "Nami"},
{name: "Nasus"},
{name: "Nautilus"},
{name: "Neeko"},
{name: "Nidalee"},
{name: "Nilah"},
{name: "Nocturne"},
{name: "Nunu & Willump"},
{name: "Olaf"},
{name: "Orianna"},
{name: "Ornn"},
{name: "Pantheon"},
{name: "Poppy"},
{name: "Pyke"},
{name: "Qiyana"},
{name: "Quinn"},
{name: "Rakan"},
{name: "Rammus"},
{name: "Rek'Sai"},
{name: "Rell"},
{name: "Renata Glasc"},
{name: "Renekton"},
{name: "Rengar"},
{name: "Riven"},
{name: "Rumble"},
{name: "Ryze"},
{name: "Samira"},
{name: "Sejuani"},
{name: "Senna"},
{name: "Seraphine"},
{name: "Sett"},
{name: "Shaco"},
{name: "Shen"},
{name: "Shyvana"},
{name: "Singed"},
{name: "Sion"},
{name: "Sivir"},
{name: "Skarner"},
{name: "Sona"},
{name: "Soraka"},
{name: "Swain"},
{name: "Sylas"},
{name: "Syndra"},
{name: "Tahm Kench"},
{name: "Taliyah"},
{name: "Talon"},
{name: "Taric"},
{name: "Teemo"},
{name: "Thresh"},
{name: "Tristana"},
{name: "Trundle"},
{name: "Tryndamere"},
{name: "Twisted Fate"},
{name: "Twitch"},
{name: "Udyr"},
{name: "Urgot"},
{name: "Varus"},
{name: "Vayne"},
{name: "Veigar"},
{name: "Vel'Koz"},
{name: "Vex"},
{name: "Vi"},
{name: "Viego"},
{name: "Viktor"},
{name: "Vladimir"},
{name: "Volibear"},
{name: "Warwick"},
{name: "Wukong"},
{name: "Xayah"},
{name: "Xerath"},
{name: "Xin Zhao"},
{name: "Yasuo"},
{name: "Yone"},
{name: "Yorick"},
{name: "Yuumi"},
{name: "Zac"},
{name: "Zed"},
{name: "Zeri"},
{name: "Ziggs"},
{name: "Zilean"},
{name: "Zoe"},
{name: "Zyra"},
]
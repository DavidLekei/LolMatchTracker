import {React, useState} from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

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
        championImg = <div className="champ-img-container"><img src={`/game/champion/${selectedChampion}.png`}/></div>
    }

    return (
        <div className = "modal-filter-dropdown-container align-column-start">
            <Autocomplete
                id={props.id}
                options={options.sort((a,b) => a.firstLetter.localeCompare(b.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.name}
                sx={{ width: 200 }}
                renderOption={(props, option) => {                    
                    return (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`/game/champion/${option.imgName}.png`}
                                alt=""
                            />
                            {option.name}
                        </Box>
                    )
                }}
                onChange={(event, value, reason) => {
                    if(value != null)
                        updateSelectedChampion(value.imgName)
                    else
                        updateSelectedChampion(null)
                }}
                renderInput={(params) => <TextField {...params} label={props.label} 
                    inputProps={{
                        ...params.inputProps,
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
    {name: "Aatrox", imgName: "Aatrox"},
    {name: "Ahri", imgName: "Ahri"},
    {name: "Akali", imgName: "Akali"},
    {name: "Akshan", imgName: "Akshan"},
    {name: "Alistar", imgName: "Alistar"},
    {name: "Amumu", imgName: "Amumu"},
    {name: "Anivia", imgName: "Anivia"},
    {name: "Annie", imgName: "Annie"},
    {name: "Aphelios", imgName: "Aphelios"},
    {name: "Ashe", imgName: "Ashe"},
    {name: "Aurelion Sol", imgName: "AurelionSol"},
    {name: "Azir", imgName: "Azir"},
    {name: "Bard", imgName: "Bard"},
    {name: "Bel'Veth", imgName: "BelVeth"},
    {name: "Blitzcrank", imgName: "Blitzcrank"},
    {name: "Brand", imgName: "Brand"},
    {name: "Braum", imgName: "Braum"},
    {name: "Caitlyn", imgName: "Caitlyn"},
    {name: "Camille", imgName: "Camille"},
    {name: "Cassiopeia", imgName: "Cassiopeia"},
    {name: "Cho'Gath", imgName: "ChoGath"},
    {name: "Corki", imgName: "Corki"},
    {name: "Darius", imgName: "Darius"},
    {name: "Diana", imgName: "Diana"},
    {name: "Dr. Mundo", imgName: "DrMundo"},
    {name: "Draven", imgName: "Draven"},
    {name: "Ekko", imgName: "Ekko"},
    {name: "Elise", imgName: "Elise"},
    {name: "Evelynn", imgName: "Evelynn"},
    {name: "Ezreal", imgName: "Ezreal"},
    {name: "Fiddlesticks", imgName: "Fiddlesticks"},
    {name: "Fiora", imgName: "Fiora"},
    {name: "Fizz", imgName: "Fizz"},
    {name: "Galio", imgName: "Galio"},
    {name: "Gangplank", imgName: "Gangplank"},
    {name: "Garen", imgName: "Garen"},
    {name: "Gnar", imgName: "Gnar"},
    {name: "Gragas", imgName: "Gragas"},
    {name: "Graves", imgName: "Graves"},
    {name: "Gwen", imgName: "Gwen"},
    {name: "Hecarim", imgName: "Hecarim"},
    {name: "Heimerdinger", imgName: "Heimerdinger"},
    {name: "Illaoi", imgName: "Illaoi"},
    {name: "Irelia", imgName: "Irelia"},
    {name: "Ivern", imgName: "Ivern"},
    {name: "Janna", imgName: "Janna"},
    {name: "Jarvan IV", imgName: "JarvanIV"},
    {name: "Jax", imgName: "Jax"},
    {name: "Jayce", imgName: "Jayce"},
    {name: "Jhin", imgName: "Jhin"},
    {name: "Jinx", imgName: "Jinx"},
    {name: "K'Sante", imgName: "KSante"},
    {name: "Kai'Sa", imgName: "KaiSa"},
    {name: "Kalista", imgName: "Kalista"},
    {name: "Karma", imgName: "Karma"},
    {name: "Karthus", imgName: "Karthus"},
    {name: "Kassadin", imgName: "Kassadin"},
    {name: "Katarina", imgName: "Katarina"},
    {name: "Kayle", imgName: "Kayle"},
    {name: "Kayn", imgName: "Kayn"},
    {name: "Kennen", imgName: "Kennen"},
    {name: "Kha'Zix", imgName: "KhaZix"},
    {name: "Kindred", imgName: "Kindred"},
    {name: "Kled", imgName: "Kled"},
    {name: "Kog'Maw", imgName: "KogMaw"},
    {name: "LeBlanc", imgName: "LeBlanc"},
    {name: "Lee Sin", imgName: "LeeSin"},
    {name: "Leona", imgName: "Leona"},
    {name: "Lillia", imgName: "Lillia"},
    {name: "Lissandra", imgName: "Lissandra"},
    {name: "Lucian", imgName: "Lucian"},
    {name: "Lulu", imgName: "Lulu"},
    {name: "Lux", imgName: "Lux"},
    {name: "Malphite", imgName: "Malphite"},
    {name: "Malzahar", imgName: "Malzahar"},
    {name: "Maokai", imgName: "Maokai"},
    {name: "Master Yi", imgName: "MasterYi"},
    {name: "Miss Fortune", imgName: "MissFortune"},
    {name: "Mordekaiser", imgName: "Mordekaiser"},
    {name: "Morgana", imgName: "Morgana"},
    {name: "Nami", imgName: "Nami"},
    {name: "Nasus", imgName: "Nasus"},
    {name: "Nautilus", imgName: "Nautilus"},
    {name: "Neeko", imgName: "Neeko"},
    {name: "Nidalee", imgName: "Nidalee"},
    {name: "Nilah", imgName: "Nilah"},
    {name: "Nocturne", imgName: "Nocturne"},
    {name: "Nunu & Willump", imgName: "NunuWillump"},
    {name: "Olaf", imgName: "Olaf"},
    {name: "Orianna", imgName: "Orianna"},
    {name: "Ornn", imgName: "Ornn"},
    {name: "Pantheon", imgName: "Pantheon"},
    {name: "Poppy", imgName: "Poppy"},
    {name: "Pyke", imgName: "Pyke"},
    {name: "Qiyana", imgName: "Qiyana"},
    {name: "Quinn", imgName: "Quinn"},
    {name: "Rakan", imgName: "Rakan"},
    {name: "Rammus", imgName: "Rammus"},
    {name: "Rek'Sai", imgName: "RekSai"},
    {name: "Rell", imgName: "Rell"},
    {name: "Renata Glasc", imgName: "RenataGlasc"},
    {name: "Renekton", imgName: "Renekton"},
    {name: "Rengar", imgName: "Rengar"},
    {name: "Riven", imgName: "Riven"},
    {name: "Rumble", imgName: "Rumble"},
    {name: "Ryze", imgName: "Ryze"},
    {name: "Samira", imgName: "Samira"},
    {name: "Sejuani", imgName: "Sejuani"},
    {name: "Senna", imgName: "Senna"},
    {name: "Seraphine", imgName: "Seraphine"},
    {name: "Sett", imgName: "Sett"},
    {name: "Shaco", imgName: "Shaco"},
    {name: "Shen", imgName: "Shen"},
    {name: "Shyvana", imgName: "Shyvana"},
    {name: "Singed", imgName: "Singed"},
    {name: "Sion", imgName: "Sion"},
    {name: "Sivir", imgName: "Sivir"},
    {name: "Skarner", imgName: "Skarner"},
    {name: "Sona", imgName: "Sona"},
    {name: "Soraka", imgName: "Soraka"},
    {name: "Swain", imgName: "Swain"},
    {name: "Sylas", imgName: "Sylas"},
    {name: "Syndra", imgName: "Syndra"},
    {name: "Tahm Kench", imgName: "TahmKench"},
    {name: "Taliyah", imgName: "Taliyah"},
    {name: "Talon", imgName: "Talon"},
    {name: "Taric", imgName: "Taric"},
    {name: "Teemo", imgName: "Teemo"},
    {name: "Thresh", imgName: "Thresh"},
    {name: "Tristana", imgName: "Tristana"},
    {name: "Trundle", imgName: "Trundle"},
    {name: "Tryndamere", imgName: "Tryndamere"},
    {name: "Twisted Fate", imgName: "TwistedFate"},
    {name: "Twitch", imgName: "Twitch"},
    {name: "Udyr", imgName: "Udyr"},
    {name: "Urgot", imgName: "Urgot"},
    {name: "Varus", imgName: "Varus"},
    {name: "Vayne", imgName: "Vayne"},
    {name: "Veigar", imgName: "Veigar"},
    {name: "Vel'Koz", imgName: "VelKoz"},
    {name: "Vex", imgName: "Vex"},
    {name: "Vi", imgName: "Vi"},
    {name: "Viego", imgName: "Viego"},
    {name: "Viktor", imgName: "Viktor"},
    {name: "Vladimir", imgName: "Vladimir"},
    {name: "Volibear", imgName: "Volibear"},
    {name: "Warwick", imgName: "Warwick"},
    {name: "Wukong", imgName: "Wukong"},
    {name: "Xayah", imgName: "Xayah"},
    {name: "Xerath", imgName: "Xerath"},
    {name: "Xin Zhao", imgName: "XinZhao"},
    {name: "Yasuo", imgName: "Yasuo"},
    {name: "Yone", imgName: "Yone"},
    {name: "Yorick", imgName: "Yorick"},
    {name: "Yuumi", imgName: "Yuumi"},
    {name: "Zac", imgName: "Zac"},
    {name: "Zed", imgName: "Zed"},
    {name: "Zeri", imgName: "Zeri"},
    {name: "Ziggs", imgName: "Ziggs"},
    {name: "Zilean", imgName: "Zilean"},
    {name: "Zoe", imgName: "Zoe"},
    {name: "Zyra", imgName: "Zyra"},    
]
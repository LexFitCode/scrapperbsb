import fs from "fs/promises";
import * as odds from "../data/20250330/Braves@PadresplayersWithRival.json" with { type : "json"}
export async function setRival(date, away, home){
    let players = []
    const oddsLocal = Object.values(odds)
    const oddsLocalB = Object.values(oddsLocal[0])
    oddsLocalB.forEach(element =>{
        if(element.team === home){
            element.rival = away
            players.push(element)
        } else {
            element.rival = home
            players.push(element)
        }
    })
    console.log(players, "setRivalPitcher")
    await fs.writeFile(
    "data/"+ date + "/" + away + "@" + home +"playersWithRivalPitcher.json",
    JSON.stringify(players)
    );
}
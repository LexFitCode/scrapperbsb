import fs from "fs/promises";
import * as odds from "../data/20250330/Braves@PadresplayersWithRival.json" with { type : "json"}
export async function setPitcherRival(date, away, home){
    let pitchers = []
    let players = []
    const oddsLocal = Object.values(odds)
    const oddsLocalB = Object.values(oddsLocal[0])
    oddsLocalB.forEach(element =>{
        if(element.position === "pitcher"){
            pitchers.push(element)
        } 
    })
    oddsLocalB.forEach(element =>{
        pitchers.forEach(pitcher =>{
            if (element.position === "hitter" && pitcher.team === element.rival){
                element.rivalPitcher = pitcher.name
                element.rivalPitcherThrow = pitcher.perfil
                players.push(element)
            } else if(element.position === "pitcher"){
                players.push(element)
            }
        })
    })
    console.log(players, "setRivalPitcher")
    await fs.writeFile(
    "data/"+ date + "/" + away + "@" + home +"playersWithRivalPitcher.json",
    JSON.stringify(players)
    );
}
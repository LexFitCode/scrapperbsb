import { getOdds } from "./fromWeb/getOdds.js"
import { setTeam } from "./fromData/setTeam.js"
import { setRival } from "./fromData/setRival.js"
import { setPitcherRival } from "./fromData/setPitcherRival.js"

const date = 20250330
const away = "Braves"
const home = "Padres"
const url  = "https://lexfitcode.github.io/bsb/game1"


function fullCycle(){
  //getOdds(date, url, away, home)
  //setTeam(date, away, home)
  //setRival(date, away, home)
  setPitcherRival(date, away, home)
}


fullCycle()



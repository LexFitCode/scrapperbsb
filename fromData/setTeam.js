import fs from "fs/promises";

import * as ari from "../roster/folderApp/DiamondBacks.json" with { type : "json"}
import * as ath from "../roster/folderApp/Athletics.json" with { type : "json"}
import * as atl from "../roster/folderApp/Braves.json" with { type : "json"}
import * as bal from "../roster/folderApp/Orioles.json" with { type : "json"}
import * as bos from "../roster/folderApp/Red Sox.json" with { type : "json"}
import * as chc from "../roster/folderApp/Cubs.json" with { type : "json"}
import * as chw from "../roster/folderApp/White Sox.json" with { type : "json"}
import * as cin from "../roster/folderApp/reds.json" with { type : "json"}
import * as cle from "../roster/folderApp/Guardians.json" with { type : "json"}
import * as col from "../roster/folderApp/Rockies.json" with { type : "json"}
import * as det from "../roster/folderApp/Tigers.json" with { type : "json"}
import * as hou from "../roster/folderApp/Astros.json" with { type : "json"}
import * as kc from "../roster/folderApp/Royals.json" with { type : "json"}
import * as laa from "../roster/folderApp/Angels.json" with { type : "json"}
import * as lad from "../roster/folderApp/Dodgers.json" with { type : "json"}
import * as mia from "../roster/folderApp/Marlins.json" with { type : "json"}
import * as mil from "../roster/folderApp/Brewers.json" with { type : "json"}
import * as nym from "../roster/folderApp/Mets.json" with { type : "json"}
import * as nyy from "../roster/folderApp/Yankees.json" with { type : "json"}
import * as phi from "../roster/folderApp/Phillies.json" with { type : "json"}
import * as pit from "../roster/folderApp/Pirates.json" with { type : "json"}
import * as sd from "../roster/folderApp/Padres.json" with { type : "json"}
import * as sea from "../roster/folderApp/Mariners.json" with { type : "json"}
import * as sf from "../roster/folderApp/Giants.json" with { type : "json"}
import * as stl from "../roster/folderApp/Cardinals.json" with { type : "json"}
import * as tb from "../roster/folderApp/Rays.json" with { type : "json"}
import * as tex from "../roster/folderApp/Rangers.json" with { type : "json"}
import * as tor from "../roster/folderApp/Blue jays.json" with { type : "json"}
import * as wsh from "../roster/folderApp/White Sox.json" with { type : "json"}

import * as odds from "../data/20250330/Braves@Padresodds.json" with { type : "json"}

export async function setTeam(date, away, home ){
    
    let players = []
    const oddsLocal = Object.values(odds)
    const oddsLocalB = Object.values(oddsLocal[0])
    console.log(oddsLocalB)
    for(let i = 0 ; i < oddsLocalB.length ; i++){
    if (!players.includes(oddsLocalB[i].name)){
        players.push(oddsLocalB[i].name)
      }
    }
    
    const playersComplete = setTeamFromRoster(players)
    

      await fs.writeFile(
        "data/"+ date + "/" + away + "@" + home +"players.json",
        JSON.stringify(playersComplete)
      );
  }


function setTeamFromRoster(names){
    let data = []
    const arizonaPitchers = ari.default.pitchers
    const yankeesPitchers = nyy.default.pitchers
    const brewersPitchers = mil.default.pitchers
    const atheleticsPitchers = ath.default.pitchers
    const bravesPitchers = atl.default.pitchers
    const oriolesPitchers = bal.default.pitchers
    const redSoxPitchers = bos.default.pitchers
    const cubsPitchers = chc.default.pitchers
    const whiteSoxPitchers = chw.default.pitchers
    const redsPitchers = cin.default.pitchers
    const guardiansPitchers = cle.default.pitchers
    const rockiesPitchers = col.default.pitchers
    const tigersPitchers = det.default.pitchers
    const astrosPitchers = hou.default.pitchers
    const royalsPitchers = kc.default.pitchers
    const angelsPitchers = laa.default.pitchers
    const dodgersPitchers = lad.default.pitchers
    const marlinsPitchers = mia.default.pitchers
    const metsPitchers = nym.default.pitchers
    const philliesPitchers = phi.default.pitchers
    const piratesPitchers = pit.default.pitchers
    const padresPitchers = sd.default.pitchers
    const marinersPitchers = sea.default.pitchers
    const giantsPitchers = sf.default.pitchers
    const cardinalsPitchers = stl.default.pitchers
    const raysPitchers = tb.default.pitchers
    const rangersPitchers = tex.default.pitchers
    const bluejaysPitchers = tor.default.pitchers
    const nationalsPitchers = wsh.default.pitchers
    const arizonaCatchers = ari.default.catchers
    const yankeesCatchers = nyy.default.catchers
    const brewersCatchers = mil.default.catchers
    const atheleticsCatchers = ath.default.catchers
    const bravesCatchers = atl.default.catchers
    const oriolesCatchers = bal.default.catchers
    const redSoxCatchers = bos.default.catchers
    const cubsCatchers = chc.default.catchers
    const whiteSoxCatchers = chw.default.catchers
    const redsCatchers = cin.default.catchers
    const guardiansCatchers = cle.default.catchers
    const rockiesCatchers = col.default.catchers
    const tigersCatchers = det.default.catchers
    const astrosCatchers = hou.default.catchers
    const royalsCatchers = kc.default.catchers
    const angelsCatchers = laa.default.catchers
    const dodgersCatchers = lad.default.catchers
    const marlinsCatchers = mia.default.catchers
    const metsCatchers = nym.default.catchers
    const philliesCatchers = phi.default.catchers
    const piratesCatchers = pit.default.catchers
    const padresCatchers = sd.default.catchers
    const marinersCatchers = sea.default.catchers
    const giantsCatchers = sf.default.catchers
    const cardinalsCatchers = stl.default.catchers
    const raysCatchers = tb.default.catchers
    const rangersCatchers = tex.default.catchers
    const bluejaysCatchers = tor.default.catchers
    const nationalsCatchers = wsh.default.catchers
    const arizonaInfielders = ari.default.infielders
const yankeesInfielders = nyy.default.infielders
const brewersInfielders = mil.default.infielders
const atheleticsInfielders = ath.default.infielders
const bravesInfielders = atl.default.infielders
const oriolesInfielders = bal.default.infielders
const redSoxInfielders = bos.default.infielders
const cubsInfielders = chc.default.infielders
const whiteSoxInfielders = chw.default.infielders
const redsInfielders = cin.default.infielders
const guardiansInfielders = cle.default.infielders
const rockiesInfielders = col.default.infielders
const tigersInfielders = det.default.infielders
const astrosInfielders = hou.default.infielders
const royalsInfielders = kc.default.infielders
const angelsInfielders = laa.default.infielders
const dodgersInfielders = lad.default.infielders
const marlinsInfielders = mia.default.infielders
const metsInfielders = nym.default.infielders
const philliesInfielders = phi.default.infielders
const piratesInfielders = pit.default.infielders
const padresInfielders = sd.default.infielders
const marinersInfielders = sea.default.infielders
const giantsInfielders = sf.default.infielders
const cardinalsInfielders = stl.default.infielders
const raysInfielders = tb.default.infielders
const rangersInfielders = tex.default.infielders
const bluejaysInfielders = tor.default.infielders
const nationalsInfielders = wsh.default.infielders
const arizonaoutfielders = ari.default.outfielders
const yankeesoutfielders = nyy.default.outfielders
const brewersoutfielders = mil.default.outfielders
const atheleticsoutfielders = ath.default.outfielders
const bravesoutfielders = atl.default.outfielders
const oriolesoutfielders = bal.default.outfielders
const redSoxoutfielders = bos.default.outfielders
const cubsoutfielders = chc.default.outfielders
const whiteSoxoutfielders = chw.default.outfielders
const redsoutfielders = cin.default.outfielders
const guardiansoutfielders = cle.default.outfielders
const rockiesoutfielders = col.default.outfielders
const tigersoutfielders = det.default.outfielders
const astrosoutfielders = hou.default.outfielders
const royalsoutfielders = kc.default.outfielders
const angelsoutfielders = laa.default.outfielders
const dodgersoutfielders = lad.default.outfielders
const marlinsoutfielders = mia.default.outfielders
const metsoutfielders = nym.default.outfielders
const philliesoutfielders = phi.default.outfielders
const piratesoutfielders = pit.default.outfielders
const padresoutfielders = sd.default.outfielders
const marinersoutfielders = sea.default.outfielders
const giantsoutfielders = sf.default.outfielders
const cardinalsoutfielders = stl.default.outfielders
const raysoutfielders = tb.default.outfielders
const rangersoutfielders = tex.default.outfielders
const bluejaysoutfielders = tor.default.outfielders
const nationalsoutfielders = wsh.default.outfielders
const arizonaDesignatedHitter = ari.default.designatedHitter
const yankeesDesignatedHitter = nyy.default.designatedHitter
const brewersDesignatedHitter = mil.default.designatedHitter
const atheleticsDesignatedHitter = ath.default.designatedHitter
const bravesDesignatedHitter = atl.default.designatedHitter
const oriolesDesignatedHitter = bal.default.designatedHitter
const redSoxDesignatedHitter = bos.default.designatedHitter
const cubsDesignatedHitter = chc.default.designatedHitter
const whiteSoxDesignatedHitter = chw.default.designatedHitter
const redsDesignatedHitter = cin.default.designatedHitter
const guardiansDesignatedHitter = cle.default.designatedHitter
const rockiesDesignatedHitter = col.default.designatedHitter
const tigersDesignatedHitter = det.default.designatedHitter
const astrosDesignatedHitter = hou.default.designatedHitter
const royalsDesignatedHitter = kc.default.designatedHitter
const angelsDesignatedHitter = laa.default.designatedHitter
const dodgersDesignatedHitter = lad.default.designatedHitter
const marlinsDesignatedHitter = mia.default.designatedHitter
const metsDesignatedHitter = nym.default.designatedHitter
const philliesDesignatedHitter = phi.default.designatedHitter
const piratesDesignatedHitter = pit.default.designatedHitter
const padresDesignatedHitter = sd.default.designatedHitter
const marinersDesignatedHitter = sea.default.designatedHitter
const giantsDesignatedHitter = sf.default.designatedHitter
const cardinalsDesignatedHitter = stl.default.designatedHitter
const raysDesignatedHitter = tb.default.designatedHitter
const rangersDesignatedHitter = tex.default.designatedHitter
const bluejaysDesignatedHitter = tor.default.designatedHitter
const nationalsDesignatedHitter = wsh.default.designatedHitter
    names.forEach(pitcher=>{
        arizonaPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        yankeesPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        brewersPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        atheleticsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        bravesPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        oriolesPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        redSoxPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        cubsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        whiteSoxPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        redsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        guardiansPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        rockiesPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        tigersPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        astrosPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        royalsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        angelsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        dodgersPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        marlinsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        metsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        philliesPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        piratesPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        padresPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        marinersPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        giantsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        cardinalsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        raysPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        rangersPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        bluejaysPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        nationalsPitchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "pitcher"
                data.push(element)
            }
        });
        arizonaCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        yankeesCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        brewersCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        atheleticsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bravesCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        oriolesCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redSoxCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cubsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        whiteSoxCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        guardiansCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rockiesCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        tigersCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        astrosCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        royalsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        angelsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        dodgersCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marlinsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        metsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        philliesCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        piratesCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        padresCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marinersCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        giantsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cardinalsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        raysCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rangersCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bluejaysCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        nationalsCatchers.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        arizonaInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        yankeesInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        brewersInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        atheleticsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bravesInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        oriolesInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redSoxInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cubsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        whiteSoxInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        guardiansInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rockiesInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        tigersInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        astrosInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        royalsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        angelsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        dodgersInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marlinsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        metsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        philliesInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        piratesInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        padresInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marinersInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        giantsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cardinalsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        raysInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rangersInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bluejaysInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        nationalsInfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        arizonaoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        yankeesoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        brewersoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        atheleticsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bravesoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        oriolesoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redSoxoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cubsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        whiteSoxoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        guardiansoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rockiesoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        tigersoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        astrosoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        royalsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        angelsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        dodgersoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marlinsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        metsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        philliesoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        piratesoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        padresoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marinersoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        giantsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cardinalsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        raysoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rangersoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bluejaysoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        nationalsoutfielders.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        arizonaDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        yankeesDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        brewersDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        atheleticsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bravesDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        oriolesDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redSoxDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cubsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        whiteSoxDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        redsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        guardiansDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rockiesDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        tigersDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        astrosDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        royalsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        angelsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        dodgersDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marlinsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        metsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        philliesDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        piratesDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        padresDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        marinersDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        giantsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        cardinalsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        raysDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        rangersDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        bluejaysDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
        nationalsDesignatedHitter?.forEach(element => {
            if(pitcher === element.name){
                element.position = "hitter"
                data.push(element)
            }
        });
    })
    
    return data
}

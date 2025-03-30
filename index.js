import puppeteer from "puppeteer";
import fs from "fs/promises";

export async function getOdds(date, url) {
  const browser = await puppeteer.launch({
    slowMo: 100,
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);
  const market = await page.evaluate(() => {
    const names = document.querySelectorAll(".general");
    const teams = document.querySelectorAll(".sph-FixturePodHeader_TeamName");
    const team = [...teams].map((t)=>{
      const singleTeam = t.innerHTML
      return singleTeam
    })
    const market = [...names].map((player) => {
      const marketData = player.querySelector(
        ".cm-MarketGroupWithIconsButton_Text"
      )?.innerText;
      const singleNames = player.querySelectorAll(
        ".srb-ParticipantLabelWithTeam_Name"
      );
      const dataNames = [...singleNames].map((player) => {
        const singleName = player.innerText;
        return { singleName };
      });
      const singleOddsOver = player.querySelectorAll(
        ".over .odds"
      );
      const singleOddsOverOne = [...singleOddsOver].map((player) => {
        const singleOddOverLine = player.querySelector('.gl-ParticipantCenteredStacked_Handicap')?.innerText
        const singleOddOverOdd = player.querySelector('.gl-ParticipantCenteredStacked_Odds')?.innerText
        return { singleOddOverLine, singleOddOverOdd };
      });
      const singleOddsUnder = player.querySelectorAll(
        ".under .odds"
      );
      const singleOddsUnderOne = [...singleOddsUnder].map((player) => {
        const singleOddUnderLine = player.querySelector('.gl-ParticipantCenteredStacked_Handicap')?.innerText
        const singleOddUnderOdd = player.querySelector('.gl-ParticipantCenteredStacked_Odds')?.innerText
        return { singleOddUnderLine, singleOddUnderOdd };
      });

      return {  market : marketData, data : { dataNames, singleOddsOverOne, singleOddsUnderOne} };
    });
    return market;
  });
  console.log(market)
  const playerOdds = await map(market);
  //const fileName = await selectName(market[0].marketData)

  await fs.writeFile(
    "folder/"+ date + "/odds.json",
    JSON.stringify(playerOdds)
  );

  await browser.close();
}

async function map(market) {
    let playerOdd = []
    let name
    let line
    let overOdd
    let underOdd
    //  market.length
    for(let i = 0 ; i <  market.length; i++){
        for(let j  = 0 ;j < market[i].data.dataNames.length; j++){
            name = market[i].data.dataNames[j]?.singleName
            if(name !== undefined){
              line =  market[i].data.singleOddsOverOne[j]?.singleOddOverLine
              overOdd =  market[i].data.singleOddsOverOne[j]?.singleOddOverOdd
              underOdd =  market[i].data.singleOddsUnderOne[j]?.singleOddUnderOdd
              playerOdd.push({market: market[i].market,name,line,overOdd,underOdd})
            }
        }
    }
    return playerOdd
}




getOdds(20250330, "https://lexfitcode.github.io/bsb/game1")
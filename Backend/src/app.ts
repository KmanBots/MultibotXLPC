const express = require('express');
// const dotenv = require('dotenv');
const {OsrsPlayer} = require('./models/player');
const {connectToTestDB} = require('./db');

const app = express()

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post('/osrs-players', (req, res) => {
  // const newOsrsPlayer = new OsrsPlayer({
  //   name: req.body.name,
  //   combatLevel: req.body.combatLevel
  // });

  // newOsrsPlayer.save()
  //   .then(osrsPlayer => res.json(osrsPlayer))
  //   .catch(err => res.status(400).json(err));

  //   return res.json(newOsrsPlayer);

  res.send(true);
});

module.exports = {app}


//  app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// })


// connectToTestDB().then(()=> app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// }))

// getUserStats("Bucket Boi");

// async function getUserStats(username: string) {
//   // Make a GET request to the official OSRS API's /player/:username endpoint
//   const response = await superagent.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username}`);
//   // Split the response by newline to get an array of stat strings
//   const statStrings = response.text.split('\n');

//   // Create an empty stats object
//   const stats: { [key: string]: any } = {};

//   // Iterate through the stat strings and add them to the stats object
//   statStrings.forEach((statString, index) => {
//     // Split the stat string by comma to get the stat name and value
//     const [name, value] = statString.split(',');

//     // Add the stat to the stats object
//     stats[name] = {
//       name,
//       value: Number(value),
//     };
//   });

//   console.log(stats)
//   // Return the stats object
//   return stats;
// }

// // const statIdMap = {

// // }

// // // Attack	121,578	99	15,746,110
// // // Defence	141,643	99	13,934,064
// // // Strength	125,631	99	17,714,020
// // // Hitpoints	160,893	99	23,868,341
// // // Ranged	145,487	99	21,204,568
// // // Prayer	115,726	98	11,863,460
// // // Magic	50,587	99	20,638,592
// // // Cooking	414,093	90	5,355,519
// // // Woodcutting	754,620	73	1,064,629
// // // Fletching	309,691	90	5,346,652
// // // Fishing	619,094	76	1,455,247
// // // Firemaking	359,785	90	5,364,231
// // // Crafting	192,932	90	5,383,941
// // // Smithing	217,127	85	3,325,149
// // // Mining	694,134	72	900,721
// // // Herblore	512,873	71	844,182
// // // Agility	95,054	89	5,048,618
// // // Thieving	392,394	75	1,272,828
// // // Slayer	613,847	78	1,757,333
// // // Farming	335,096	87	4,126,976
// // // Runecraft	246,445	77	1,478,422
// // // Hunter	186,334	84	3,149,446
// // // Construction	223,897	83	2,910,579

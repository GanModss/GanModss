global.prefa = ['','!','.',',','🐤','🗿']
global.falown = "6285654001429‼️"
global.falmurbug = "6285654001429"
global.inputnum = "*Syntax Error!*\n\n"
global.falgrup = "ACCES NOT ACCEPTED‼️"
global.imagemenu = ["https://files.catbox.moe/t5g78q.jpg", "https://files.catbox.moe/mqnzs6.jpg", "https://files.catbox.moe/ji96bn.jpg"];

global.owner = [
  "6285654001429", //should start with country code
  ""  //second number if available
]


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
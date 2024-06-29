const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "STRAVA V2.5"
global.ownerName = "KEGAN"
global.ownerBot = "6283131485975"
global.ownerNumber = ["6283131485975"] 

global.Auto_Typing = true // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

// Admin Create Panel
global.domain = "https://putratejiphost.zeroneoffc.me" // Ganti Domain Lu
global.key_plta = "ptla_64OWLYG2yhdcERrqmGuwKW2XB2lsbPnOyf4c8WanL3L" // Isi Apikey Plta Lu
global.key_pltc = "ptlc_QCbDYImLLt3oO6xwfNrN2D0cxyiOh1Jn1Ms6jz24K0y" // Isi Apikey Pltc Lu
global.nama_host = "loli" // Ganti Nama Store Atau nama Host Lu
global.locID = '1'
global.eggID = '15'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
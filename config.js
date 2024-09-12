//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2349115983460" 
global.namaCreator = "Joshua" 
global.autoJoin = false 
global.antilink = true 
global.versisc = '6.0' 
global.codeInvite = "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH"
global.isLink = 'https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.author = "Josh BOT" 
global.jumlah = "5" 
global.namabot = "Josh BOT" 
global.domain = 'https://kingsam.sellerpanelerol.me' // your domian
global.apikey = 'ptla_VRxkhvalZQ3EhHyAax9QYxgT5cbsx2MrO69gBpVZmmd' // Isi Apikey Plta Lu
global.capikey = 'ptlc_sQ3d4GxCiztyV5DbhUJSWtvnSCyKzeMXoWIr2lVyqal' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

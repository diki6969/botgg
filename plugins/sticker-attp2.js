import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/ttp2?apikey=SGWN&text=${response[0]}&apikey=SGWN`
  conn.sendFile(m.chat, res, 'Ikyy.webp', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['attp2 <teks>']
handler.tags = ['sticker' , 'premium']
handler.command = /^(attp2)$/i
handler.limit = true
handler.premium = true

export default handler
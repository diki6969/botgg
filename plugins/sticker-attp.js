import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
    await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, global.API('lol', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
export default handler

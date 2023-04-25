const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'default' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.imgur.com/Z9lNphI.jpeg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? '╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝐌 𝐔𝐦𝐚𝐫♕' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝐌 𝐔𝐦𝐚𝐫♕' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'Replit' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=4vgAFbZT#-dZfpP214waGc6dWl1tY29_OsFCiwvk7b2tJdSHWDa4' : process.env.SESSION_ID
};

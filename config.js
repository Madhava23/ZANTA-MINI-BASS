const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // 🔑 Essential Session & Owner Settings
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94763559656",
    SESSION_ID: process.env.SESSION_ID ||"𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=558f1297cf2f4fb1",

    // 🤖 Default Fallback Settings
    DEFAULT_BOT_NAME: process.env.DEFAULT_BOT_NAME || "ZANTA-MD",
    DEFAULT_OWNER_NAME: process.env.DEFAULT_OWNER_NAME || "Akash nimsara",
    DEFAULT_PREFIX: process.env.DEFAULT_PREFIX || ".",

    // 🖼️ Media Settings (Alive image & Menu)
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Akashkavindu/ZANTA_MD/blob/main/images/zanta-md.png?raw=true",
    MENU_IMG: process.env.MENU_IMG || "https://github.com/Akashkavindu/ZANTA_MD/blob/main/images/zanta-md.png?raw=true",

    // ⚙️ Dashboard / Database Defaults
    // මෙම අගයන් පළමු වතාවට Database එක සෑදීමේදී භාවිත වේ (Database & Dashboard Sync)
    AUTO_READ: process.env.AUTO_READ || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    READ_CMD: process.env.READ_CMD || "false",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
};

//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Lagos,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.website = process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347025369036";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hDd1NLSnNzSnpvSXhFWVpWZWt1bjRBcng5WVB4aml1dGdOT29yT21HWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjFKbnFxRVBPUHYycWwzZDcwWUszVlRPME9PbW50U2ZVQXNiOVM1RVZXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR01yQjROWk4rbFRUSWVBUkZIZm80ek10YmdYakNNYnZhTTVERks5elhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVeWpJQWxuMkJEK1ZYK0lvdVVQZHlMSE4rbmhtdUNQK2V4RzFsQ2RyZlJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPT3dMN0RnVS95RjlzVVUrUFd3OVNxODI3cE5Zd3Rzc2NUUWFTTlJMMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhnbllzMlo4QTNjNU9JOUJVSTVzUThNSTBYMDJOWlJhaXNBZFc0ejZvVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVlZ3g3Nk1KSThYcDZVdTNWc0xiUmVOazlLZkp4dmw5TWRoa2Nob3FrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieENKeDlPdHJwRkxEUDNXS2R6MVBRWTZ1SnJSVDhLcHNCOXNaemdSeVlnUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpMeVJ5bENZOVR4TTI2ZC9LUnRscDR2c0FMNWEyTWZOTVBlUGpsbWp2VHNhVmNHQmIvU2FZTHhyMkY3ZWswZ2Z5cTE5V0Q2OEJ1V3Fsd3M1VUNrY0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6Ing1Sk03a1REcFhvMTVTQW1ScEkzektqMnFteXNSZmpDUS9qWTE0aFRGUWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlpLVRXNFAyUlYyN0VSYkpENUlNSkEiLCJwaG9uZUlkIjoiYWI1YTk5NmEtYWQ5Yy00NmJjLTllOWUtMDIzMGE3OTllMWRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikhkd1NPUmNEc2kxdTF6K0FmNUJRRjBnU1dhQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4c0pocTRTWTJVWVlVcXJwdmdRcGFhTjlKZ1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDdRWFdYRjYiLCJtZSI6eyJpZCI6IjIzNDcwMjUzNjkwMzY6NDlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04zZTRJWUVFTm5icXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVmSXhWUkh6Y3hudWpSeHJRWUVGYkRJa01IR09KVWZQYS9pdVFVNnZlRXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndzeHFxQmZNMVUxMTViNHgyVDZscUJCQlkzYW1HSTdsYVBxQ3M5elg2RkEyOHAyZUIxc1ljMDBNZ1RpNXZGWHRJNWVmazNvYzA0a2VSaEpOR010S0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJYVRwb3pyWk11SXBidWpLQXFtSDFoQVF6ck5GMFQ5R2hKazdVOGpTTWVZTjAvOUlyK3BvSVBFdS9iRHJhN1pQZGFtQmZ3MXRwd1lWVldCbElaQWhCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMjUzNjkwMzY6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYm55TVZVUjgzTVo3bzBjYTBHQkJXd3lKREJ4amlWSHoydjRya0ZPcjNoTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM2NDUxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCNHQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ":",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is TRILLS 𝐌𝐃",
  author: process.env.PACK_AUTHER || "TRILLS",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TRILLS-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "TRILLS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

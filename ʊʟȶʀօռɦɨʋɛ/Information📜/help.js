// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `help`,
  description: `ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  ƈʏɮօʀɢʍօʀɛ: `
This module is used to get info on other modules and their triggers.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    var UltronRegex = new RegExp(UltronSitreper.ULTRONIX, "g");
    var Ultronf = /\/\^\[(.*)+\]\/\g/g.exec(UltronRegex)[1];
    υℓтяσηℓιєηт
      .sendMessage(
        ʊʟȶʀօռ.chatId, {
          url: `https://i.postimg.cc/KcNwHtZt/ltr.png`
        },
        MessageType.image, {
          mimetype: Mimetype.png,
          caption: `*|🎮|  ʊʟȶʀօռ™  |🎮|*
𝙐𝙨𝙚 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙏𝙝𝙚 𝘼𝙙𝙫𝙖𝙣𝙘𝙚 𝙒𝙖𝙮!

*••••••••••••••••➛  ❓𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻*
*${Ultronf}help -* ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
*${Ultronf}invite -* ᴍᴏᴅᴜʟᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
*${Ultronf}alive -* ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ


*••••••••••••••••➛  🤩𝗔𝗻𝗶𝗺𝗲*
*${Ultronf}anime -* ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇ
*${Ultronf}animewallpaper -* ᴅᴏᴡɴʟᴏᴀᴅ ʜᴅ ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀꜱ
*more coming!*


*••••••••••••••••➛  🎼𝗠𝘂𝘀𝗶𝗰* 
*${Ultronf}ytdl -* ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢꜱ ᴅɪʀᴇᴄᴛ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ
*${Ultronf}lyrics -* ꜰɪɴᴅ ʟʏʀɪᴄꜱ ᴏꜰ ꜱᴏɴɢꜱ
*${Ultronf}yts -* ɢᴇᴛ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴꜱ ᴀɴᴅ ʟɪɴᴋꜱ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ


*••••••••••••••••➛  🎙️𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻*
*${Ultronf}cuddle -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴜᴅᴅʟᴇ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}cuddlehd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ᴄᴜᴅᴅʟᴇ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ
*${Ultronf}hug -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴜɢ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}hughd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ʜᴜɢ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ
*${Ultronf}kill -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴋɪʟʟ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}killhd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ᴋɪʟʟ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ
*${Ultronf}pat -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴀᴛ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}pathd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ᴘᴀᴛ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ
*${Ultronf}punch -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴜɴᴄʜ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}punchhd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ᴘᴜɴᴄʜ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ
*${Ultronf}slap -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱʟᴀᴘ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}slaphd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ꜱʟᴀᴘ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ
*${Ultronf}wink -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴡɪɴᴋ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}winkhd -* ꜱᴛɪᴄᴋᴇʀ ᴡɪᴛʜ ʜᴅ-ᴡɪɴᴋ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪɴᴋ


*••••••••••••••••➛  🔐𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹* 
*${Ultronf}block -* ʙʟᴏᴄᴋ ᴄᴏɴᴛᴀᴄᴛ
*${Ultronf}unblock -* ᴜɴʙʟᴏᴄᴋ ᴄᴏɴᴛᴀᴄᴛ


*••••••••••••••••➛  👑𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻* _(only groups)
*${Ultronf}add -* ᴀᴅᴅ ᴀ ᴘᴇʀꜱᴏɴ ᴛᴏ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}admins -* ᴛᴀɢ ᴀʟʟ ᴀᴅᴍɪɴꜱ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}demote -* ᴅᴇᴍᴏᴛᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}disappear -* ᴛᴏɢɢʟᴇ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}goodbye -* ᴀ ɢᴏᴏᴅʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴡʜᴇɴᴇᴠᴇʀ ꜱᴏᴍᴇᴏɴᴇ ʟᴇᴀᴠᴇꜱ
*${Ultronf}mute -* ᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ꜰᴏʀ ᴀ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴛɪᴍᴇ
*${Ultronf}promote -* ᴘʀᴏᴍᴏᴛᴇ ᴀ ᴍᴇᴍʙᴇʀ ᴛᴏ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}remove -* ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}groupdp -* ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ɪᴄᴏɴ
*${Ultronf}unmute -* ᴜɴᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
*${Ultronf}welcome -* ᴡᴇʟᴄᴏᴍᴇ ɴᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ ᴡɪᴛʜ ᴀ ᴄᴜꜱᴛᴏᴍ ᴍᴇꜱꜱᴀɢᴇ


*••••••••••••••••➛  🧀𝗙𝘂𝗻* 
*${Ultronf}google -* ꜱᴇᴀʀᴄʜ ᴀɴʏᴛʜɪɴɢ ᴏɴ ɢᴏᴏɢʟᴇ
*${Ultronf}carbon -* ᴄᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ᴏʀ ᴄᴏᴅᴇ ᴛᴏ ᴀ ᴄᴀʀʙᴏɴ ɪᴍᴀɢᴇ
*${Ultronf}pfp -* ɢᴇᴛ ᴅɪꜱᴘʟᴀʏ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴜꜱᴇʀ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}github -* ꜰɪɴᴅ ᴀɴʏ ɢɪᴛʜᴜʙ ᴘʀᴏꜰɪʟᴇ
*${Ultronf}neko -* ᴄᴏᴘʏ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ɴᴇᴋᴏʙɪɴ.ᴄᴏᴍ
*${Ultronf}joke -* ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇꜱ
*${Ultronf}meme -* ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴍᴇᴍᴇꜱ
*${Ultronf}read -* ᴏᴘᴛɪᴄᴀʟ ᴄʜᴀʀᴀᴄᴛᴇʀ ʀᴇᴄᴏɢɴɪᴛɪᴏɴ
*${Ultronf}sticker -* ᴄᴏɴᴠᴇʀᴛ ɪᴍᴀɢᴇ ᴛᴏ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}tagall -* ᴛᴀɢ ᴇᴠʀʏᴏɴᴇ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}translate -* ʟᴀɴɢᴜᴀɢᴇ ᴛʀᴀɴꜱʟᴀᴛᴏʀ
*${Ultronf}tts -* ᴛᴇxᴛ ᴛᴏ ꜱᴘᴇᴇᴄʜ
*${Ultronf}weather -* ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ᴅᴀᴛᴀ ᴏꜰ ᴀ ᴘʟᴀᴄᴇꜱ
*${Ultronf}ud -* ᴜʀʙᴀɴ ᴅɪᴄᴛɪᴏɴᴀʀʏ ꜰᴏʀ ᴄʀᴀᴢʏ ᴘᴇᴇᴘꜱ


*••••••••••••••••➛  🔞𝗡𝗦𝗙𝗪* (private & group-admins!)
*${Ultronf}ass -* ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~
*${Ultronf}bdsm -* ɪꜰ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴋɴᴏᴡ ᴡʜᴀᴛ ɪᴛ ɪꜱ, ꜱᴇᴀʀᴄʜ ɪᴛ ᴜᴘ
*${Ultronf}blowjob -* ʙᴀꜱɪᴄᴀʟʟʏ ᴀɴ ɪᴍᴀɢᴇ ᴏꜰ ᴀ ɢɪʀʟ ꜱᴜᴄᴋɪɴɢ ᴏɴ ᴀ ꜱʜᴀʀᴘ ʙʟᴀᴅᴇ!
*${Ultronf}cum -* ʙᴀꜱɪᴄᴀʟʟʏ ꜱᴛɪᴄᴋʏ ᴡʜɪᴛᴇ ꜱᴛᴜꜰꜰ ᴛʜᴀᴛ ɪꜱ ᴜꜱᴜᴀʟʟʏ ᴍɪʟᴋᴇᴅ ꜰʀᴏᴍ ꜱʜᴀʀᴘɪᴇꜱ
*${Ultronf}doujin -* ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴅᴏᴜᴊɪɴ ᴘᴀɢᴇ ɪᴍᴀɢᴇ!
*${Ultronf}feet -* ꜱᴏ ʏᴏᴜ ʟɪᴋᴇ ꜱᴍᴇʟʟʏ ꜰᴇᴇᴛ ʜᴜʜ?
*${Ultronf}femdom -* ꜰᴇᴍᴀʟᴇ ᴅᴏᴍɪɴᴀᴛɪᴏɴ?
*${Ultronf}foxgirl -* ɢɪʀʟ'ꜱ ᴛʜᴀᴛ ᴀʀᴇ ᴡᴀɴɴᴀʙᴇ ꜰᴏxᴇꜱ, ʏᴇꜱ
*${Ultronf}glasses -* ɢɪʀʟꜱ ᴛʜᴀᴛ ᴡᴇᴀʀ ɢʟᴀꜱꜱᴇꜱ
*${Ultronf}hentai -* ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴠᴀɴɪʟʟᴀ ʜᴇɴᴛᴀɪ ɪᴍᴀɢᴇ~
*${Ultronf}maid -* ᴍᴀɪᴅꜱ, ᴍᴀɪᴅ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ, ʏᴏᴜ ᴋɴᴏᴡ ᴡʜᴀᴛ ᴍᴀɪᴅꜱ ᴀʀᴇ
*${Ultronf}masturbation -* ꜱᴏʟᴏ Qᴜᴇᴜᴇ ɪɴ ᴄꜱɢᴏ! ʟᴏʟ
*${Ultronf}netorare -* ᴡᴏᴡ, ɪ ᴡᴏɴ'ᴛ ᴇᴠᴇɴ Qᴜᴇꜱᴛɪᴏɴ ʏᴏᴜʀ ꜰᴇᴛɪꜱʜᴇꜱ
*${Ultronf}orgy -* ɢʀᴏᴜᴘ ʟᴇᴡᴅ ᴀᴄᴛꜱ
*${Ultronf}panties -* ɪ ᴍᴇᴀɴ... ᴊᴜꜱᴛ ᴡʜʏ? ʏᴏᴜ ʟɪᴋᴇ ᴜɴᴅᴇʀᴡᴇᴀʀ?
*${Ultronf}pussy -* ᴛʜᴇ ɢᴇɴɪᴛᴀʟꜱ ᴏꜰ ᴀ ꜰᴇᴍᴀʟᴇ, ᴏʀ ᴀ ᴄᴀᴛ, ʏᴏᴜ ɢɪᴠᴇ ᴛʜᴇ ᴍᴇᴀɴɪɴɢ
*${Ultronf}school -* ꜱᴄʜᴏᴏʟ ᴜɴɪꜰᴏʀᴍꜱ!~ ʏᴀᴛᴛᴀ~!
*${Ultronf}tentacles -* ɪ'ᴍ ꜱᴏʀʀʏ ʙᴜᴛ, ᴡʜʏ ᴅᴏ ᴛʜᴇʏ ʟᴏᴏᴋ ʟɪᴋᴇ ɪɴᴛᴇꜱᴛɪɴᴇꜱ?
*${Ultronf}thighs -* ᴛʜᴇ ᴛᴏᴘ ᴘᴀʀᴛ ᴏꜰ ʏᴏᴜʀ ʟᴇɢꜱ, ᴠᴇʀʏ ʜᴏᴛ, ɪꜱɴ'ᴛ ɪᴛ?
*${Ultronf}uniform -* ᴍɪʟɪᴛᴀʀʏ, ᴋᴏɴʙɪɴɪ, ᴡᴏʀᴋ, ɴᴜʀꜱᴇ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ!~ ꜱᴇxʏ~
*${Ultronf}yuri -* ɢɪʀʟꜱ ᴏɴ ɢɪʀʟꜱ, ᴀɴᴅ ɢɪʀʟ'ꜱ ᴏɴʟʏ!

*𝐆𝐢𝐭𝐇𝐮𝐛🧀https://github.com/Krakinz*`,
        }
      )
      .catch((cᴇʀʀᴏʀ) =>
        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${Ultronf}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        )
      );
    return;
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
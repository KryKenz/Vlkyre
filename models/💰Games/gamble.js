//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (FoxBot, Foxchat, update, store) => {
  try {
    var formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!FoxBot.args[0] && !FoxBot.args[1]) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatColor.test(FoxBot.args[0])) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatAmount.test(FoxBot.args[1])) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !FoxBot.args[0].includes("red") &&
      !FoxBot.args[0].includes("black") &&
      !FoxBot.args[0].includes("purple")
    ) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    var ColorRoom = FoxBot.args[0];
    var AmountRoom = parseInt(FoxBot.args[1]);
    if (AmountRoom < 50) {
      return await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        "./public/FoxBot.png"
      );
    }

    if (AmountRoom > 800) {
      return await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./public/FoxBot.png"
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./public/FoxBot.png"
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./public/FoxBot.png"
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        "./public/FoxBot.png"
      );
    }

    FoxBot.Economy.findOne(
      {
        Id: Foxchat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return FoxBot.handlerror(FoxBot, Foxchat, error);
        }

        if (!userEco) {
          var newUser = new FoxBot.Economy({
            Id: Foxchat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return FoxBot.handlerror(FoxBot, Foxchat, error);
          });
          return await FoxBot.imagebutton(
            FoxBot,
            Foxchat,
            `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            "./public/FoxBot.png"
          );
        }

        FoxBot.Gamble.findOne(
          {
            Id: Foxchat.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return FoxBot.handlerror(FoxBot, Foxchat, error);
            }

            if (!userGamble) {
              var newUser = new FoxBot.Gamble({
                Id: Foxchat.sender,
                serverId: Foxchat.chat,
                Gambledone: 0,
                Gambvarimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                "./public/FoxBot.png"
              );
            }

            if (
              userGamble.Gambvarimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
              var time = FoxBot.ms(
                userGamble.Gambvarimeout - (Date.now() - userGamble.Gambledone)
              );
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                "./public/FoxBot.png"
              );
            }

            function isOdd(num) {
              if (num % 2 == 0) return false;
              else if (num % 2 == 1) return true;
              else if (num % 3 == 0) return false;
              else if (num % 4 == 1) return true;
              else return false;
            }
            var Color = ColorRoom;
            var money = parseInt(AmountRoom);
            var CurrentMoney = userEco.money;
            var Amount = Math.floor(Math.random() * 10);

            if (!Color) {
              await FoxBot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await FoxBot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await FoxBot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (Color.includes("black")) {
              Color = 0;
            } else if (Color.includes("red")) {
              Color = 1;
            } else if (Color.includes("purple")) {
              Color = 2;
            } else {
              await FoxBot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (Amount == 1 && Color == 2) {
              money *= 15;
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              await userEco.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                "./public/FoxBot.png"
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              await userEco.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                "./public/FoxBot.png"
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              await userEco.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                "./public/FoxBot.png"
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
              return FoxBot.handlerror(FoxBot, Foxchat, error);
            });
            await userEco.save().catch((error) => {
              return FoxBot.handlerror(FoxBot, Foxchat, error);
            });
            return await FoxBot.imagebutton(
              FoxBot,
              Foxchat,
              `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              "./public/FoxBot.png"
            );
          }
        );
      }
    );
  } catch (error) {
    return FoxBot.handlerror(FoxBot, Foxchat, error);
  }
};

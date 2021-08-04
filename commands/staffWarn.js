const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./data/staffWarns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn spelerNaam redenen hier.

    if (!message.member.hasPermission("MENTION_EVERYONE")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");


    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./staffWarns.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
    var warningEmbed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter('👑 The Royal Family of the Netherlands')
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Gegeven door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var warninglog = message.member.guild.channels.cache.get("844325748642021396");

    warninglog.send(warningEmbed);
    }


module.exports.help = {
    name: "staff-warn",
    aliases: ["swarn", "staffwarn"]
}
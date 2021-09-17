const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./data/warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    var warnUser = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
      var warnEmbed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`Warnings: ${warns[warnUser.id].warns}`)
        .setFooter('👑 The Royal Family of the Netherlands')

    warninglog.send(warningEmbed);

}

module.exports.help = {
    name: "warnings",
    aliases: []
}
const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./data/warns.json", "utf8"));

module.exports.run = async (client, message, args) => {

    // !warn spelerNaam redenen hier.

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
      var warnEmbed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Gegeven door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns)
      warnUser.send(warnEmbed)

    var warningEmbed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Gegeven door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var warninglog = message.member.guild.channels.cache.get("870335985676865576");

    warninglog.send(warningEmbed);

}

module.exports.help = {
    name: "warn"
}
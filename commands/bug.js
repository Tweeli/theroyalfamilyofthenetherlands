const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply("Geen bug meegegeven.")
    var suggestions = message.member.guild.channels.cache.get("836649957325930506");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Bug ingezonden door ${message.author.tag} !`)
        .setColor("#6aa75e")
        .setDescription("> Bug: " + args.join(" "))
        .setFooter('👑 The Royal Family of the Netherlands');

    var msg = await suggestions.send(suggestieEmbed);

    return message.lineReply("Bug seccesvol ingezonden!");

    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "bug",
    aliases: []
}
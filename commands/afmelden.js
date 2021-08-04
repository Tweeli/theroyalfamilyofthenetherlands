const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("> Jij kan dit niet doen")

      if (!args[0]) return message.reply("Geen begin datum meegegeven.")
    
     if (!args[1]) return message.reply("Geen begin eind datum meegegeven.")
    
     if (!args[2]) return message.reply("Geen reden meegegeven.")

     var begin = args[0]
     var einde = args[1]
     var reden = args.slice(2).join(" ")

    var afmelden = message.member.guild.channels.cache.get("836653651841646613");

const afmeldEmbed = new discord.MessageEmbed()
        .setTitle(`${message.author.tag} heeft zich afgemeld.`)
        .addField("Begin datum:", "> " + begin)
        .addField("Eind datum:", "> " + einde)
        .addField("Reden:", "> " + reden)
        .setColor("#6aa75e")
        .setFooter('👑 The Royal Family of the Netherlands')
var msg = await afmelden.send(afmeldEmbed);
return message.lineReply("U bent succesvol afgemeld.")

}

module.exports.help = {
    name: "afmelden",
    aliases: []
}
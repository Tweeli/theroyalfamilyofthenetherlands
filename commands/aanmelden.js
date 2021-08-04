const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.")

    var afmelden = message.member.guild.channels.cache.get("836653651841646613");

    

    afmelden.send(`${message.author}, u bent weer aangemeld!`);
    return message.lineReply("U bent succesvol aangemeld.")

}

module.exports.help = {
    name: "aanmelden",
    aliases: []
}
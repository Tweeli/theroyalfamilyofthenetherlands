const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

     var roles = message.guild.roles.cache.size - 1

    var rolesEmbed = new discord.MessageEmbed()
      .setTitle('Rollen 👑 The Royal Family of the Netherlands.')
      .setDescription(`Rollen: [${roles}] ${message.guild.roles.cache.map(r => r).join(" ").replace("@everyone", "")}`)
      .setFooter('👑 The Royal Family of the Netherlands');
    message.lineReply(rolesEmbed)

}

module.exports.help = {
    name: "rollen",
    aliases: ["roles"]
}
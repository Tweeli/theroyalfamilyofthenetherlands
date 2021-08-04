const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    var inviteEmbed = new discord.MessageEmbed()
     .setTitle("Embed color.")
     .setDescription("HEX: #6aa75e")
     .setColor("#6aa75e")
     .setFooter('👑 The Royal Family of the Netherlands');
    message.lineReply(inviteEmbed);

}

module.exports.help = {
    name: "ecolor",
    description: "",
    category: "",
    aliases: []
}

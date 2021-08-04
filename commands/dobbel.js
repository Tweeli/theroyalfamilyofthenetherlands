const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var result = Math.ceil(Math.random() * 6);

    var dobbelEmbed = new discord.MessageEmbed()
        .setDescription(`:game_die: Je hebt **${result}** gegooid! :game_die:`)
        .setColor('#6aa75e')
        .setDescription('👑 The Royal Family of the Netherlands');
    message.lineReply(dobbelEmbed);

}

module.exports.help = {
    name: "dobbel",
    description: "",
    category: "",
    aliases: ["dobbelsteen"]
}
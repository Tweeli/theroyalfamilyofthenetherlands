const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botinfoEmbed = new discord.MessageEmbed()
            .setTitle('The Royal Family of the Netherlands | BOT')
            .setColor("#6aa75e")
            .addField("Bot naam:", "The Royal Family of the Netherlands")
            .addField("Bot ID:", "868367264053858314")
            .addField("Gemaakt door:", "Tweeli.#0001")
            .addField("Gemaakt op:", "Visual Studio Code.")
            .addField("Node:", "V13.14.0")
            .addField("Platform:", "MacOS")
            .addField("Laatst geüpdate:", "26 Juli 2021.")
            .addField("Gemaakt op:", "15 Juni 2021")
            .setThumbnail('https://cdn.discordapp.com/attachments/755878713668796446/850431626608902204/image0.png')
            .setTimestamp()
            .setFooter('Created by Tweeli.#0001');

        return message.lineReply(botinfoEmbed);

}

module.exports.help = {
    name: "binfo"
}
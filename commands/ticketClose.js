const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "837065252189241354";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("> Jij kan dit niet doen");

    if (!args[0]) return message.reply("Geen reden meegegeven om het ticket te closen.")

    var reden = args.slice(0).join(" ")

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var closeticketEmbed = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Het ticket van " + message.channel.name + ` is gesloten door ${message.author} . \n \n **Reden: ** ${reden}`)
            .setColor("#6aa75e")
            .setFooter('👑 The Royal Family of the Netherlands');

        // Channel voor logging
        var logChannel = message.guild.channels.cache.find(channel => channel.id === "837059366934413343");
        if (!logChannel) return message.reply("Kanaal bestaat niet");

        logChannel.send(closeticketEmbed);

    } else {

        message.lineReply("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "close",
    aliases: ["delete"]
}

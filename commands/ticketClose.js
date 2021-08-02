const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "784414133051064390";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("> Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var closeticketEmbed = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Het ticket van " + message.channel.name + ` is gesloten door ${message.author} .`)
            .setColor("#6aa75e")
            .setFooter('Created by Tweeli.#0001');

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "「📋」ticket-logs-test");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(closeticketEmbed);

    } else {

        message.lineReply("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "close"
}

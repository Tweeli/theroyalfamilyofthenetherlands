const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming om dit te doen.");
   
    if (!args[0]) return message.reply("Geen suggestie meegegeven.")
   
    var suggestions = message.member.guild.channels.cache.get("587601364713209857");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Suggestie van ${message.author.tag} !`)
        .setColor("#6aa75e")
        .setDescription("> Staff suggestie: " + args.join(" "))
        .setFooter('👑 The Royal Family of the Netherlands');

    var msg = await suggestions.send(suggestieEmbed);
    
    await msg.react('✅')
    await msg.react('❌')
    
    

    return message.lineReply("Suggestie seccesvol ingezonden!")

  
    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "staff-suggestie",
    aliases: ["ssuggestie"]
}
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var categoryID = "784414133051064390";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Jij kan dit niet doen.");

    if (message.channel.parentID != categoryID) return message.lineReply("Dit command kan je alleen uitvoeren in een ticket.");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!addUser) return message.lineReply("Geen gebruiker meegegeven.")

    var embedPromt = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setTitle("Gelieve te antwoorden binnen 30 seconden.")
        .setDescription(`Wil je ${addUser} verwijderen? | Created by Tweeli.#0001`);
    
    var toevoegEmbed = new discord.MessageEmbed()
        .setTitle("Gebruiker verwijderd.")
        .setColor("#6aa75e")
        .setTimestamp()
        .addField("Verwijderde gebruiker", `${addUser}`)
        .addField("Persoon verwijderd door", message.author);

    message.lineReply(embedPromt).then(async msg => {

        message.delete();

        var emoji = await promtMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji == "✅") {

            msg.delete();

            message.channel.updateOverwrite(addUser,{
                READ_MESSAGES: false,
                SEND_MESSAGES: false,
                ATTACH_FILES: false,
                CONNECT: false,
                ADD_REACTIONS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            });

            message.channel.send(toevoegEmbed).then(msg => msg.delete({timeout: 5000 }));

        }else if (emoji == "❌"){

            msg.delete();

            
            message.reply("Verwijdering van persoon geanuleerd.").then(msg => msg.delete({timeout: 3000 }));
        }

    })

}

async function promtMessage(message, author, time, reactions) {
    
    time *= 1000;
 
   
    for (const reaction of reactions) {
        await message.react(reaction);
    }
 
    
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
 
    
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "remove"
}

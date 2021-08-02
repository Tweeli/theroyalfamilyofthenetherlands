const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let Embed = new discord.MessageEmbed()
 .setTitle('Reactie Rollen')
 .setDescription('Klik op de emoji`s om de role(s) te ontvangen!')
 .setColor('#6aa75e')
 let roleEmbed = await message.channel.send   (Embed)
roleEmbed.react('846723731819855872')

    

}

module.exports.help = {
    name: "reactie-rollen"
}
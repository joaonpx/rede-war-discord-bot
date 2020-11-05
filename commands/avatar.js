const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    var avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

    let embed = new Discord.MessageEmbed()
    .setDescription(`:frame_photo: **Aqui está o avatar de ${user.username}**`)
    .setImage(avatar) 
    .setColor('RANDOM') 
    
    return message.channel.send(`<@${message.author.id}>`).then(message.channel.send(embed))
  }

module.exports.help = {
    name: "avatar",
    category: "diversão"
}
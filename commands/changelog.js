const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let bicon = bot.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) 
      let aicon = "https://cdn.discordapp.com/emojis/480512404229193736.gif?v=1";
      var notificação = "<@&757657520302063768>"
      message.delete();

      if (!message.member.hasPermission('BAN_MEMBERS'))
      return message.reply(`você precisa da permissão \`\ BAN_MEMBERS \`\ para usar esse comando!`)

      let mensg = args.join(" ");
      if(!mensg) return message.reply("você precisa colocar a mensagem da atualização.")

      const embed = new Discord.MessageEmbed()
      .setColor("#fe6903")
      .setAuthor(`Change-log`, bicon) 
      .setDescription(mensg)
      .setTimestamp()
      .setFooter(`Atualizado por: ${message.author.username}`, aicon);

      let incidentchannel = bot.channels.cache.get('757657180768960667')
      if(!incidentchannel) return message.reply("não encontrei o canal.");

      incidentchannel.send(embed);
      incidentchannel.send(notificação);

      return message.reply(`change-log atualizado com sucesso! :tada:`).then(message => setTimeout(() => message.delete(), 6000))

  }

module.exports.help = {
    name: "changelog",
    category: "staff"
}
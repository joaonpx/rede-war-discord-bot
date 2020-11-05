const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var bicon = bot.user.avatarURL()
    let aicon = "https://cdn.discordapp.com/emojis/480512404229193736.gif?v=1";
    var user = message.mentions.users.first() || message.guild.members.cache.get(args[0])

    if (!message.member.hasPermission('BAN_MEMBERS'))
    return message.reply(`você precisa da permissão \`\ BAN_MEMBERS \`\ para usar esse comando!`)
    message.delete();

    let bUser = message.guild.member(user);
    if(!bUser) return message.reply("você precisa mencionar usuário que quer banir.");
    var icon = bUser.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.reply("você precisa colocar um motivo.")

    if(bUser.hasPermission("ADMINISTRATOR")) 
    return message.reply("essa pessoa não pode ser explusa.");

    let banEmbed = new Discord.MessageEmbed()
      .setColor("#38ae17")
      .setAuthor("Punição", bicon)
      .setTitle("Informações:")
      .setDescription(`**Canal:** ${message.channel}
        **Autor da punição:** ${message.author.tag}
        **Punição:** Ban
        **Membro Punido:** ${user.tag}
        **Motivo:** ${bReason}`)
      .setThumbnail(icon)
      .setTimestamp()
      .setFooter("© Rede War | Equipe de moderação do discord", aicon);

      let incidentchannel = bot.channels.cache.get('757657180768960667')
      if(!incidentchannel) return message.reply("não encontrei o canal.");

      message.guild.member(bUser).ban({reason: bReason,})
      incidentchannel.send(banEmbed);

      message.reply(`usuário punido com sucesso! :tada:`)
      .then(message => setTimeout(() => message.delete(), 6000))
  }

module.exports.help = {
    name: "kick",
    category: "staff"
}
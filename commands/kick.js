const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var bicon = bot.user.avatarURL()
    let aicon = "https://cdn.discordapp.com/emojis/480512404229193736.gif?v=1";
    var user = message.mentions.users.first() || message.guild.members.cache.get(args[0])

    if (!message.member.hasPermission('KICK_MEMBERS'))
    return message.reply(`você precisa da permissão \`\ KICK_MEMBERS \`\ para usar esse comando!`)
    message.delete();

    let kUser = message.guild.member(user);
    if(!kUser) return message.reply("você precisa mencionar usuário que quer expulsar.");
    var icon = kUser.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.reply("você precisa colocar um motivo.")

    if(kUser.hasPermission("ADMINISTRATOR")) 
    return message.reply("essa pessoa não pode ser explusa.");

    let kickEmbed = new Discord.MessageEmbed()
      .setColor("#38ae17")
      .setAuthor("Punição", bicon)
      .setTitle("Informações:")
      .setDescription(`**Canal:** ${message.channel}
        **Autor da punição:** ${message.author.tag}
        **Punição:** Kick
        **Membro Punido:** ${user.tag}
        **Motivo:** ${kReason}`)
      .setThumbnail(icon)
      .setTimestamp()
      .setFooter("© Rede War | Equipe de moderação do discord", aicon);

      let incidentchannel = bot.channels.cache.get('757657180768960667')
      if(!incidentchannel) return message.reply("não encontrei o canal.");

      message.guild.member(kUser).kick(kReason)
      incidentchannel.send(kickEmbed);

      message.reply(`usuário expulsado com sucesso! :tada:`)
      .then(message => setTimeout(() => message.delete(), 6000))

  }

module.exports.help = {
    name: "kick",
    category: "staff"
}
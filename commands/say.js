const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply(`você precisa da permissão \`\ MANAGE_MESSAGES \`\ para usar esse comando!`)

    let mensg = args.join(" ");
    if(!mensg) return message.reply("você precisa colocar a mensagem que quer no say.")

    return message.channel.send(mensg)

  }

module.exports.help = {
    name: "anúncio",
    category: "staff"
}
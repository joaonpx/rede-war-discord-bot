const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()

    const amount = args.join(' ');
    if (!message.member.hasPermission('MANAGE_MESSAGES')) 
    return message.reply(`você precisa da permissão \`\ MANAGE_MESSAGES \`\ para usar esse comando!`)
    if (!amount) return message.reply(`você precisa colocar o número de mensagens que quer apagar!`)
    if (isNaN(amount)) return message.reply('você precisa colocar o número de mensagens que quer apagar!') 

    if (amount > 100) return message.reply('eu só consigo apagar até 100 mensagens!')
    if (amount < 2) return message.reply('eu preciso apagar no mínimo 2 mensagens!')
    
    await message.channel.messages.fetch({ limit: amount }).then(messages => { 
        message.channel.bulkDelete(messages)
        message.reply(`${messages.size} mensagens foram apagadas com sucesso! :tada:`)
        .then(message => setTimeout(() => message.delete(), 6000))
    }) 
}
module.exports.help = {
    name: "clear",
    category: "moderação"
}
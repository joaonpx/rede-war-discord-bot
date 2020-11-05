
module.exports = (bot, message) => {
    if(!message.content.startsWith(bot.config.prefix)) return
    if(message.author.bot) return undefined
    if(message.channel.type === "dm") return
    if (message.content.indexOf(bot.config.prefix) !== 0) return
  
    const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = bot.commands.get(command)
  
    if (!cmd) return
    cmd.run(bot, message, args)
};
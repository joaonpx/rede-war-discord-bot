const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-br')

module.exports.run = async (bot, message, args) => {    

  const js = bot.guilds.cache.get("462372625813864449").emojis.cache.find(emoji => emoji.name === "js") 
  const discordjs = bot.guilds.cache.get("462372625813864449").emojis.cache.find(emoji => emoji.name === "discordjs") 

  function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }  
        var author = bot.config.author
        let bicon = bot.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) 
        let chansize = bot.channels.cache.size
        var date = bot.user.createdAt
        var userName = bot.user.username
        var servsize = bot.guilds.cache.size
        var usersize = bot.users.cache.size
        var botping = Math.round(bot.ws.ping)
        var botversion = bot.config.version

        let infoembed = new Discord.MessageEmbed()
        .setColor('#fe6903')
        .setAuthor(`Informações`)
        .addField('🔱 Meu criador:', author)
        .addField('📅 Fui criado em:', formatDate('DD/MM/YYYY', date))
        .addField('📡 Minha latência:', `API - ${botping}ms`)
        .addField('💻 Fui desenvolvido em:', `${js} JavaScript usando ${discordjs} Discord.js`)
        .addField('🤖 Minha versão:', botversion)
        .addField('👁️ Atualmente estou observando:', `${chansize} canais`)
        .addField('👂 Ouvindo:', `${usersize} usuários`)
        .setThumbnail(bicon)
        .setFooter(`© Rede War`);
        
        return message.channel.send(`<@${message.author.id}>`).then(message.channel.send(infoembed))
}
module.exports.help = {
    name: "botinfo",
    category: "utilitarios"
}
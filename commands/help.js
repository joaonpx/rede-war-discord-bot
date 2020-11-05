const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-br')

module.exports.run = async (bot, message, args) => {    

      message.author.createDM().then(channel =>{   
        let bicon = bot.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) 
        var author = bot.config.author
        var pages = ['📖', "🎉", "🛠️", "⚒️"];
        var page = 1
        
          let embed = new Discord.MessageEmbed()
            .setColor('#fe6903')
            .setAuthor('Lista de comandos', bicon)
            .setDescription(`📖 Escolha uma categoria: \n🎉 **Diversão:** \`\ 2 comandos \`\ \n🛠️ **Utilitários:** \`\ 6 comandos \`\ \n⚒️ **Moderação:** \`\ 3 comandos \`\
            `)
            .setFooter(`© Rede War | Desenvolvido por ${author}`);
  
            channel.send(embed).then(msg => {
              msg.react('📖')
              msg.react("🎉")
              msg.react("🛠️")
              msg.react("⚒️")
  
              const principalFilter = (reaction, user) => reaction.emoji.name === '📖' && user.id === message.author.id
              const diversãoFilter = (reaction, user) => reaction.emoji.name === "🎉" && user.id === message.author.id
              const utilitáriosFilter = (reaction, user) => reaction.emoji.name === "🛠️" && user.id === message.author.id
              const moderaçãoFilter = (reaction, user) => reaction.emoji.name === "⚒️" && user.id === message.author.id
              const principalCollector = msg.createReactionCollector(principalFilter, { time: 60000, errors: ['time']})
              const diversãoCollector = msg.createReactionCollector(diversãoFilter, { time: 60000, errors: ['time']})
              const utilitáriosCollector = msg.createReactionCollector(utilitáriosFilter, { time: 60000, errors: ['time']})
              const moderaçãoCollector = msg.createReactionCollector(moderaçãoFilter, { time: 60000, errors: ['time']})
  
              principalCollector.on('collect', r => {
                  if (page === 1) return;
                  page--
                  let embed = new Discord.MessageEmbed()
                  embed.setColor('#fe6903')
                  embed.setAuthor('Lista de comandos', bicon)
                  embed.setDescription(`📖 Escolha uma categoria: \n🎉 **Diversão:** \`\ 2 comandos \`\ \n🛠️ **Utilitários:** \`\ 6 comandos \`\ \n⚒️ **Moderação:** \`\ 3 comandos \`\
                  `)
                  embed.setFooter(`© Rede War | Desenvolvido por ${author}`);
                  msg.edit(embed)  
              })
  
              diversãoCollector.on('collect', r => {
                  if (page === pages.lenght) return;
                  page++
                  embed.setColor('#fe6903')
                  embed.setAuthor(' ')
                  embed.setDescription(`🎉 **Diversão:** \n\`\ !8ball [pergunta] \`\ - Irá responder a sua pergunta. \n\`\ !ship <@usuário> <@usuário>\`\ - Irá shippar os usuários mencionados.
                  `)
                  embed.setFooter(`© Rede War | Desenvolvido por ${author}`);
                  msg.edit(embed)
              })

              utilitáriosCollector.on('collect', r => {
                  if (page === pages.lenght) return;
                  page++
                  embed.setColor('#fe6903')
                  embed.setAuthor(' ')
                  embed.setDescription(`🛠️ **Utilitários:** \n\`\ !botinfo \`\ - Irá mostrar informaçoes sobre o bot. \n\`\ !avatar <@usuário> \`\ - Irá enviar o seu avatar ou o do usuário mencionado. \n\`\ !say [mensagem] \`\ - Irá enviar a mensagem que quiser. \n\`\ !anúncio [mensagem] \`\ - Irá enviar um anúncio aos membros. \n\`\ !atualização [mensagem] \`\ - Irá enviar uma atualização aos membros. \n\`\ !changelog [mensagem] \`\ - Irá atualizar o change-log.
                  `)
                  embed.setFooter(`© Rede War | Desenvolvido por ${author}`);
                  msg.edit(embed)
            })
  
  
              moderaçãoCollector.on('collect', r => {
                  if (page === pages.lenght) return;
                  page++
                  embed.setColor('#fe6903')
                  embed.setAuthor(' ')
                  embed.setDescription(`⚒️ **Moderação:** \n\`\ !clear [número de mensagens] \`\ - Irá apagar o número de mensagens que for definido. \n\`\ !kick <@usuário> [motivo] \`\ - Irá expulsar o usuário mencionado. \n\`\ !ban <@usuário> [motivo] \`\ - Irá banir o usuário mencionado. 
                  `)
                  embed.setFooter(`© Rede War | Desenvolvido por ${author}`);
                  msg.edit(embed)
              })
  
  
            })

            return message.reply(`as informações foram enviadas em seu privado 📩`)
  })
}
module.exports.help = {
    name: "help",
    category: "ajuda"
}
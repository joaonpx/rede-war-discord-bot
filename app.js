const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json")
const { token, prefix } = require("./config.json")
const fs = require('fs');
bot.config = config;

//Event handler
  fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	console.log(`                  `);
	console.log(`Eventos listados:`);
	files.forEach(file => {
	  const event = require(`./events/${file}`);
	  let eventName = file.split(".")[0];
	  console.log(`Carregando: ${eventName}`);
	  bot.on(eventName, event.bind(null, bot));
	});
	console.log(`                  `);
  });

//Command handler
  bot.commands = new Discord.Collection();

  fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	console.log(`Comandos listados:`);
	files.forEach(file => {
	  if (!file.endsWith(".js")) return;
	  let props = require(`./commands/${file}`);
	  let commandName = file.split(".")[0];
	  console.log(`Carregando: ${commandName}`);
	  bot.commands.set(commandName, props);
	});
	console.log(`                  `);
  });

  bot.on('guildMemberAdd', member => {
    var bicon = bot.user.avatarURL()
    var icon = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    
    var role = member.guild.roles.cache.find(role => role.name === "membro");
    member.roles.add(role);

	let embed = new Discord.MessageEmbed()
    .setColor("#1FC901")
    .setAuthor(`Rede War - Entrada`, bicon) 
    .setThumbnail(icon)
    .setDescription(`<@${member.id}>, entrou no servidor! \nSeja bem-vindo(a).`)
    .setTimestamp()
    .setFooter(`Horário da entrada`);

    bot.channels.cache.get('757657180768960665').send(embed)
});
  bot.on('guildMemberRemove', member => {
    var bicon = bot.user.avatarURL()
    var icon = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    
    let embed = new Discord.MessageEmbed()
    .setColor("#c90101")
    .setAuthor(`Rede War - Saída`, bicon) 
    .setThumbnail(icon)
    .setDescription(`<@${member.id}>, saiu do servidor! \nAté mais.`)
    .setTimestamp()
    .setFooter(`Horário da saída`);

    bot.channels.cache.get('757657180768960665').send(embed)
});

bot.login(token);
module.exports = (bot) => {
  var botping = Math.round(bot.ws.ping)
  var userName = bot.user.username
  var servsize = bot.guilds.cache.size
  var usersize = bot.users.cache.size
  var variação = [`!ajuda | !help`, `${usersize} usuários.`]

  setInterval(function() {
    var status = variação[Math.floor(Math.random() * variação.length)];
    bot.user.setActivity(
        status, {type: "LISTENING"}    
    )
  }, 7000)

  if (servsize = 1) {
    console.log('───────────────────────────────────');
    console.log(`${userName} ONLINE           `);
    console.log(`Em ${servsize} servidor!     `);
    console.log(`Para ${usersize} usuários!   `);
    console.log(`Api Ping ${botping}ms   `);
    console.log('───────────────────────────────────'); 
  } 
}
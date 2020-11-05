const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var pergunta = args.join(" ");
    if(!pergunta) return message.reply("você precisa colocar uma pergunta!");

    var respostas = ["sim.", "não.", "com certeza!", "não sei",
    "mas é claro.", "sim, com certeza!", "sei la, pergunta la no posto ipiranga", 
    "não faço a minima ideia", "prefiro não responder.", "para de me encher o saco", "não to a fim de papo."]

    var resultado = Math.floor((Math.random() * respostas.length));

    return message.reply(respostas[resultado]);
}

module.exports.help = {
    name: "8ball",
    category: "diversão"
}
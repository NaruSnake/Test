exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/92/3e/dc/923edcaffc79c9c9b7a7c5fd92756727.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake en compagnie de Mamijomale, Lawliet53 et Lorinea pour du JDR crée par Mamijomale: Dernière Donne à 14h30 ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
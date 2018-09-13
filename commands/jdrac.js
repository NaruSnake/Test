exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/ce/71/6c/ce716c252298fc2f35eb6fd07abb7b00.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake en tant que MJ, Lorinea, Mamijomale et Lawliet53 pour le JDR Arcaon Cave vers 15h ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
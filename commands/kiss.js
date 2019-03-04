exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/83/d6/7f/83d67f01f0dd1b2ba241aa1565bbae21.gif")
    message.delete();
    message.channel.send("Gros Bisoux").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
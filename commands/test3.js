exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/02/c5/09/02c509d1d5800b0a6695fbccef7964b8.gif")
    message.delete();
    message.channel.send("|| Test||").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/74/d6/d3/74d6d33958375dc5211b3f60df62c588.gif")
    message.delete();
    message.channel.send("CHEERIOOOO").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
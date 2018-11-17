exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/58/7a/22/587a223ff76042bbfe60a4f29b15afe2.gif")
    message.delete();
    message.channel.send("FUUUUUUCK").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
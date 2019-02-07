exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://iblos3om.files.wordpress.com/2010/06/katanagatari_04_01.jpg")
    message.delete();
    message.channel.send("nuuuuuuuuude").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
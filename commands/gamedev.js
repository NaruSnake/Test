exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/a2/0a/7a/a20a7a29dbf9bb1a82c2811eb6052824.png")
    message.delete();
    message.channel.send("@everyone Retrouvez ce Soir NaruSnake pour un peu de GameDev et faire de la marde vers 20h30 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
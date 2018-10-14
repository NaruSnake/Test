exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/d5/0a/76/d50a76f4405aab6bd1ddd0536f4a6196.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake en compagnie de AdryNeko ce soir sur TERA entre 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
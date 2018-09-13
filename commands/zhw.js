exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/62/e4/08/62e408b8e54c29e527a73c896d978c30.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake ce soir sur Hyrule Warriors vers 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
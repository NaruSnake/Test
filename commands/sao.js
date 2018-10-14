exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/82/43/1d/82431d25cdf66e2344e8e2de7b69ea95.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake ce soir sur Sword Art Online Hollow Realization vers 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
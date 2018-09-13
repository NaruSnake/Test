exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/e1/19/6c/e1196c2b49691f60663782b1eab15ca5.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake ce soir sur Aragami vers 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
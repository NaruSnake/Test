exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/9f/2b/3b/9f2b3bcccead8aade83dabd2669f99c7.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake pour un peu de Speedrun sur Resident Evil et peut etre autre chose si le jeu ne l'aime pas entre 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
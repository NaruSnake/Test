exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/b9/b8/68/b9b868075ea0b5f268103cbbedb87b46.png")
    message.delete();
    message.channel.send("@everyone Rendez-vous ce soir pour une soirée spéciale rentrée scolaire en compagnie de NaruSnake sur 2 jeux sur le thème de l'école comme d'habitude on se retrouve vers 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
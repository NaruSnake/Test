exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setURL("https://www.youtube.com/watch?v=6aK78w-st2U")
    message.delete();
    message.channel.send("FUUUUUUCK").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
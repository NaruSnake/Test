exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("NON MAIS OH C'EST QUOI CETTE COMMANDE")
    .setImage("https://i.pinimg.com/564x/26/ee/cf/26eecff92e4a1b581d607cddd10e9b1b.jpg")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}
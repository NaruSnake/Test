exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("DIT ADIEU A TES BURNES")
    .setImage("https://i.pinimg.com/564x/98/af/d1/98afd1d36616bc5e804f2c6c876d3cf9.jpg")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}
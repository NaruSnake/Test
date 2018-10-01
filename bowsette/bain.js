exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("DE-DE-DEGAGE DE LA OU JE TE CRAME PERVERS")
    .setImage("https://i.pinimg.com/564x/88/56/b2/8856b2677082c20d6fbe73609316b875.jpg")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("**INVITE**")
    .setAuthor("La secrétaire à Naru", "https://i.pinimg.com/564x/f2/0f/9e/f20f9e7505417ce6ce4a42ecf13bcbc7.jpg")
    .setColor(0x00ffff)
    .setDescription("Besoin de moi Naru?")
    .setThumbnail("https://i.pinimg.com/564x/3b/50/13/3b50135fffde162b2b242a1c5bb36e96.jpg")
    .setTimestamp()
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=459127685029953537&permissions=8&scope=bot")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("JE VAIS VRAIMENT TE TUER J'EN N'EST MARRE LA")
    .setImage("https://i.pinimg.com/564x/45/cb/16/45cb16ad010d45f7d61ea92f04542856.jpg")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}
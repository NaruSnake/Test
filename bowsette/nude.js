exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("a-a-a-arrette de vouloir me voir à poil")
    .setImage("https://i.pinimg.com/564x/3c/4e/4d/3c4e4d1d90ba2b1147baabdd12498b49.jpg")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}
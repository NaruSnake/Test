exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("rawr")
    .setImage("https://i.pinimg.com/564x/c4/e6/59/c4e659aef80aa5fcfad65394d361bf62.jpg")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/30/dd/01/30dd0175be795dbb1473c65206add4c2.png")
    message.delete();
    message.channel.send("@everyone Retrouvez ce Soir NaruSnake pour un peu de Détente sur Euro Truck Simulator 2 vers 20h30 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
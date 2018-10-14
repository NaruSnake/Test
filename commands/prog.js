exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/38/08/eb/3808ebe1f16fddc25f4af4e6c18bc364.png")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    message.channel.send("@everyone Voici le programme de la semaine pour le Twitch et Youtube (rien de définitif des changements peuvent être à prévoir) \n - Lundi: Beyond Good & Evil \n - Mardi: Eurotruck Simulator 2 \n - Mercredi: Moemon Fire Red Random \n - Jeudi: Beyond Good & Evil (si on n'as pas fini le jeu) ou le nouveau let's play \n - Vendredi: Multi avec AdryNeko \n - Samedi: Dragon's Dogma Dark Ariser \n - Dimanche: GameDev \n Au programme il s'ajoutera aussi les 2 JDR Derniéré donne et Arcaon Cave ils nous manquent les disponibilités des joueurs pour le moment \n J'espère que ce programme vous plaira").catch(console.error);
    console.log
}
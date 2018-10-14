
exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
  .setTitle("**COMMANDES**")
  .setColor(0x00FE00)
  .setDescription("Voici la liste des commandes pour que je puisses me mettre au travail pour vous \n - adry: pour les jeux choisis par adry \n - special: pour annoncé les stream spécial \n - gamedev: pour les stream game developpement \n - jdrac: pour annoncé le jdr arcaon cave \n - jdrdd: pour annoncé le JDR deniere donne \n - mmo: pour annoncé les partie multi avec adry \n - ara: pour le let's play aragami \n - tera: pour annoncé du tera avec adry \n - bdo: pour annoncé les stream de bdo avec adry \n - prog: Pour annoncé le programme de la semaine \n comme ça dame adry vous pouvez utilisé les commandes si Naru oublie \n - doc: pour la chaine drlinkinc")
  .setImage("https://i.pinimg.com/originals/f2/0f/9e/f20f9e7505417ce6ce4a42ecf13bcbc7.jpg")
  .setTimestamp()
  .addField(":computer: **Liste**",
   "``adry``, ``bg&e``, ``ddda``,``gamedev``, ``help``,``invite``,``jdrac``,``jdrdd``,``kick``,``mmo``,``moemon``,``ori``,``prog``,``say``,``tera``,``test``", true)
  
  .addBlankField(true)
  message.delete();
  message.channel.send({embed}).catch(console.error);
    console.log
}
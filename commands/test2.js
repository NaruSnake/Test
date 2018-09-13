//commande say//
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");


exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
  if (!message.member.roles.some(r=>["role_name"].includes(r.name)) ) 
  return;
        (message.delete(),
         message.channel.send(text).catch(console.error));
   if (message.delete(),
         message.channel.send("on ne joue pas avec moi").catch(console.error));
    console.log
}
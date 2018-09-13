//commande say//

exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
    message.delete();
    message.member.hasPermission("MANAGE_MESSAGES"); return message.channel.send("On ne joue pas avec moi");
    message.channel.send(text).catch(console.error);
    console.log
}
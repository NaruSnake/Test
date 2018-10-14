
exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason);
    message.channel.send("vous n'ête plus la bien ici").catch(console.error);
    console.log
}
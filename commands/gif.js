exports.run = (client, message, args) => {
const Discord = require('disocrd.js');
const got = require('got');
const api = ('H6oknGxsVcjyNfxBZ1wewEAsC10qyJQS');
const args = message.content.split(" ").slice(1);

        if(args.length < 1) return message.channel.send(' tu as besoin de me donner un mots clés pour cela', {code: "py"})
const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
        if (!res || !res.body || !res.bode.data) return message.channel.send(" Echec de la recherche!", {code: "py"})

const embed = new Discord.RichEmbed()
    .setImage(res.body.data.image_url)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(0x00ffff)

    message.channel.send({embed: embed});

}

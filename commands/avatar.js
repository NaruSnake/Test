//command avatar //

exports.run = (client, message, args) => {
    message.delete();
    var mentionned = message.mentions.users.first();
    var autheur;
    var author = username;

    if(mentionned){
        var autheur = mentionned;
    } else {
        var autheur = message.author;
    }

    var newAvatar = autheur.avatarURL;

    if(newAvatar.includes(" .gif")){
        message.channel.send(` ${author} tu as demandé l'avatar de ` + autheur.username,)
        message.channel.send("", {
            embed:{
                image:{
                    url: autheur.avatarURL.slice(0,autheur.avatarURL.lastIndexOf('?size='))
                },
                color: 0x00ffff
            }
        })
    } else {
        message.channel.send("", {
            embed:{
                title: ` ${author} tu as demandé l'avatar de ` + autheur.username,
                image: {
                    url: autheur.avatarURL
                },
                color: 0x00ffff
            }
        })
    }
} 

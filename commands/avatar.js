//command avatar //

exports.run = (client, message, args) => {
    var mentionned = message.mentions.users.first();
    var autheur;

    if(mentionned){
        var autheur = mentionned;
    } else {
        var autheur = message.author;
    }

    var newAvatar = autheur.avatarURL;

    if(newAvatar.includes(".gif")){
        message.channel.send("", {
            embed:{
                title: "L'avatar de" + autheur.username,
                image:{
                    url: autheur.avatarURL.slice(0,autheur.avatarURL.lastIndexOf('?size='))
                },
                color: 0x00ffff
            }
        })
    } else {
        message.channel.send("", {
            embed:{
                title: "L'avatar de" + autheur.username,
                image: {
                    url: autheur.avatarURL
                },
                color: 0x00ffff
            }
        })
    }
} 
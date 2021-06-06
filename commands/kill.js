module.exports.run = async (client, message, args) => {
  
    const user = message.mentions.users.first()
        if(user.id === message.author.id) return
        if (user) { 
            const member = message.guild.member(user);
            if (member) {
                message.channel.send(`<@${message.author.id}> just chopped <@${user.id}> in half with a machette!`)
    } else {
               
    message.channel.send("You cant kill yourself")
            }
        } else {
            message.channel.send("You cant kill yourself")
           }
        }
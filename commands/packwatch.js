module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (user) { 
        const member = message.guild.member(user);
        if (member) {
            message.channel.send(`<@${message.author.id}> just SMOKED <@${user.id}>'s pack. Rip bozo!`)
        } else {
            message.channel.send("not how you use this command fucking dumbass, example: `$packwatch (user)`")
        }
    } else {
        message.channel.send("not how you use this command fucking dumbass, example: `$packwatch (user)`")
    }
}
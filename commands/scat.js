module.exports.run = async = (client, message, args) => {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            message.channel.send(`<@${message.author.id}> just shat on <@${user.id}>'s chest!`)
        } else {
            message.channel.send("dumbass $scat @(user)")
        }
    } else {
        message.channel.send("dumbass $scat @(user)")
    }
}

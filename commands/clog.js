module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (user) { 
        const member = message.guild.member(user);
        if (member) {
            message.channel.send(`<@${message.author.id}> just clogged <@${user.id}>'s genitals! no more sex`)
        } else {
            message.channel.send("you didnt clog anyones genitals")
        }
    } else {
        message.channel.send("you didnt clog anyones genitals")
    }
}
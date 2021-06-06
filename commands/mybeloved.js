module.exports.run = async (cilent, message, args) => {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
     if (member) {
         message.channel.send(`<@${user.id}> is <@${message.author.id}>'s beloved!`)
     } else {
         message.channel.send("dumbass, $mybeloved (user)")
     }
    }
}

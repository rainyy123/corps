module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (user) { 
        const member = message.guild.member(user);
        if (member) {
            message.channel.send(`<@${message.author.id}> just TURNED <@${user.id}> into a convertible!`)
        } else {
            message.channel.send("You aren't strong enough to turn anyone into a convertible, disgrace...")
        }
    } else {
        message.channel.send("You aren't strong enough to turn anyone into a convertible, disgrace...")
    }
}
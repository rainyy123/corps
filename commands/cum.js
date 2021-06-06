module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
if (user) {
      const member = message.guild.member(user);
      if (member) {
           message.channel.send(`<@${message.author.id}> just busted a fat nut on <@${user.id}>'s face!`);
    } else {
      message.channel.send("not how u use this command dumbass, $cum {user}")
    }     
  } else {
    message.channel.send("not how u use this command dumbass, $cum {user}")
  }
}
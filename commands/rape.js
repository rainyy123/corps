module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
if (user) {
      const member = message.guild.member(user);
      if (member) {
           message.channel.send(`<@${message.author.id}> just raped <@${user.id}> in the asshole!`);
    } else {
      message.channel.send("not how u use this command dumbass, $rape {user}")
    }     
  } else {
    message.channel.send("not how u use this command dumbass, $rape {user}")
  }
}
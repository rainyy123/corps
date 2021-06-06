module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
if (user) {
      const member = message.guild.member(user);
      if (member) {
           message.channel.send(`<@${message.author.id}> <@${user.id}> and Ali_011 had a threesome!`);
    } else {
      message.channel.send("not how u use this command dumbass, $threesome {user} {user}")
    }     
  } else {
    message.channel.send("not how u use this command dumbass, threesome {user} {user}")
  }
}
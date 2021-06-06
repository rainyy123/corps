module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
if (user) {
      const member = message.guild.member(user);
      if (member) {
           message.channel.send(`<@${message.author.id}> just had sexual intercourse with  <@${user.id}>!`);
    } else {
      message.channel.send("YOU HAD SEX WITH NO ONE HAHAHA FUCKING LOSER")
    }     
  } else {
    message.channel.send("YOU HAD SEX WITH NO ONE HAHAHA FUCKING LOSER")
  }
}
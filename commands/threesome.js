module.exports.run = async (client, message, args) => {
    const user = args[0];
    const user2 = args[1] 
    const user3 = args[2]
    if(!user) {
      message.channel.send("dumbass")
    }
    else if (!user2) {
      message.channel.send(`$user ${user} so tasty`)
    } 
    else {
      message.channel.send(`${user} just had the big sex with ${user2} and ${user3}`);
    }
}

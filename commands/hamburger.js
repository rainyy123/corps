module.exports.run = async (client, message, args) => {
    const user = args[0];
    const user2 = args[1] 
    if(!user) {
      message.channel.send("You need to specify something atleast, Fucking dumbass.")
    }
    else if (!user2) {
      message.channel.send(`$user ${user} so tasty`)
    } 
    else {
      message.channel.send(`${user} ate the ${user2} hamburger so tasty`);
    }
}

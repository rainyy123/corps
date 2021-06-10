module.exports.run = async (client, message, args) => {

    if (message.author.id !== "590258017015037992") return;

    let mem = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let spamdm = args.slice(1).join(" ");

       if(!mem) return message.channel.send("send an id to spam dumbass")
client.setInterval(async() => { 

await mem.send(spamdm)

message.delete()

},50);
}

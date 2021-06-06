module.exports.run = async (bot, message, args) => {

    const m = await message.channel.send("Pinging because internet sucks :ping_pong:");
    m.edit(`**Latency:** \`${m.createdTimestamp - message.createdTimestamp}ms\` - **API Latency:** \`${Math.round(bot.ws.ping)}ms\``);
  
  };
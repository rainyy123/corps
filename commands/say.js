module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return;
    }
    const say = message.content.slice(4).trim()
    message.delete()
    message.channel.send (say)
} 
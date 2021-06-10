const { MessageButton } = require

module.exports = {
    name: 'addiction',
    description: 'button',
    async execute(client, message, args) {
        let button = new MessageButton() 
        .setStyle('green')
        .setLabel('click')
        .setID('click_to_function')

 if (message.author.id !== "590258017015037992") return message.reply("you arent the owner of this bot");

        message.channel.send('button my beloved', button)
    }
}

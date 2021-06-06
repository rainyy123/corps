const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let dynembed = new MessageEmbed()
    .setTitle(`Wanna have the big SEX with the REAL Dynextra???`)
    .setDescription(`Click [here](https://bit.ly/3wcfgNO) to get very freaky with Dynextra`)
    .setColor("#4506fc")

    message.delete()

    message.channel.send(dynembed)

        if(message.content.toLowerCase() === '$dynsex')
        message.channel.send("<@829257224181383179>");

}
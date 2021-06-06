const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let tankembed = new MessageEmbed()
    .setTitle(`Apoc Tank`)
    .setDescription(`Carroll my beloved.`)
    .setColor("#4506fc")
    .addField("frsttbchannel")

    message.channel.send(tankembed)
}
const Discord = require('discord.js')
var points = new Array (100)
for (var i = 0; i < 100; i++)
{points [i ] = i+1}

module.exports.run = async (bot, message, args) => {
    function rating () {
        const rand = points 
        return rand [Math.floor(Math.random()*rand.length)]
    }
    const embed = new Discord.MessageEmbed ()
    .setDescription (`${message.author.username} **has ${rating()} litres of semen in his balls**`)
    .setColor("#000000") 
    message.channel.send(embed)
}

const Discord = require('discord.js')
var points = new Array(100)
for (var i = 0; i < 100; i++)
{points [i ] = i+1}
module.exports.run = async (bot, message, args) => {

    function rating () {
        const rand = points 
        return rand [Math.floor(Math.random()*rand.length)]
    } 
    const embed = new Discord.MessageEmbed ()
    .setTitle(`${message.author.username}'s cock is` )
    .setDescription (`**${rating()} inches long!**`)
    .setColor('#ff0000')

    message.channel.send(embed)
}
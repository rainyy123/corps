// credit: https://www.youtube.com/watch?v=-1Rg2_TA4_k

const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}
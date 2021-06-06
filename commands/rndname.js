module.exports.run = async (client, message, args) => {
    switch(args[0]) {
        case 'genname' :
            genname(message);
            function genname(message) {
                let messages = ['bungalip tank', 'ParrotJohn932', 'IsraelGaming723', 'ObamaGamer543', 'AvidGamingLover921']
                let genname = math.floor(math.random() * messages.length);
                message.channel.send(messages[genname]);
            }
            break;
        }
}
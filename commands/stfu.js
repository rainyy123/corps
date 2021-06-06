const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODM1MjE5MTkwMDI0NjM0NDAw.YIMQfA.-3CsHx8kbcetaXqFroGo3AK_Oyo';
 
client.login(token);
 
client.on('message', message => {

  if (Discord.User.bot) return;
 
    if(message.content.toLowerCase().includes('>genie'))
        message.channel.send("SHUT THE FUCK UP");
        else if(message.content.toLowerCase().includes('>trash'))
        message.channel.send("SHUT THE FUCK UP");
        
        if(message.content.toLowerCase().includes('aedusminecraft'))
        message.channel.send("AedusMC is a balanced game with no flaws whatsoever. KillSpree420 And Lumazada My Beloved.");
        if(message.content.toLowerCase() === ('mect1'))
        message.channel.send("mystic elephant my beloved https://cdn.discordapp.com/attachments/817475690986602528/835262324335837204/mysticelephant.png");
        if(message.content.toLowerCase() ==='$invite')
        message.channel.send("Invite Gregory to your discord server via this link https://discord.com/oauth2/authorize?client_id=835219190024634400&scope=bot")
        if(message.content.toLowerCase().includes('ali gamer'))
        message.channel.send("SHUT THE FUCKING N WORDS UP!!!!!!!")
        if(message.content.toLowerCase().includes('$tank'))
        message.channel.send("https://cdn.discordapp.com/emojis/828627868064940074.png?v=1, https://cdn.discordapp.com/emojis/828656190967775252.png?v=1, https://cdn.discordapp.com/emojis/828657930316283915.png?v=1, https://cdn.discordapp.com/emojis/828939786336731148.png?v=1, https://cdn.discordapp.com/emojis/828939842246148136.png?v=1")
})
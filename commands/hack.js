module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (user) { 
        const member = message.guild.member(user);
        if (member) {
            message.channel.send(`hacking <@${user.id}>...`)
            .then((msg)=> {
              setTimeout(function(){
               msg.edit('{hack} {hack} manifest: DDOS {machine response: you hack?} Yes. [Nointernet:yes confirm hack hack hack} (127.0.0.1) DDOS HACK {hack} manifest hack computer DDOS');
             }, 2500)
            setTimeout(function(){
               msg.edit(`Sucessfully hacked <@${user.id}>. `);
               
             }, 5000)
             setTimeout(function(){
                msg.edit(`Sucessfully hacked <@${user.id}>. 
                Credit card: 1234 0219 8432 9854
                Name: John Asfanger.
                IP: 127.0.0.1 and 123.4832.942
                Adress: Cornville, 81 Sex Avenue.`);
                
              }, 5000)
            })
        }
    }
}
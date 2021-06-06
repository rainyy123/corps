const row = new Discord.MessageActionRow()
            .addComponents([
                new Discord.MessageButton({
                    customID: 'test',
                    label: "",
                    style: 'PRIMARY' // The Type (Color) of Button
                })
            ])
message.channel.send(`_ _`, { components: [row] });
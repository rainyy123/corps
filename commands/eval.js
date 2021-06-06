const util = require('util');
const Discord = require('discord.js');

// Get the command ready
module.exports.run = async (corps, message, args) => {
     // Make sure the command cannot be used by anyone other than this ID
    if (message.author.id !== "590258017015037992") return;
     // Start the code. If there is no input, throw this error
    let code = args.join(" ")
    if (!code) return message.reply("Please give me some code to use.");

    let output;

    try {
        output = await eval(code);
    } catch (err) {
       // Construct the Input Embed
        const errembed = new Discord.MessageEmbed()
            .setAuthor("Gregory", corps.user.displayAvatarURL())
            .setColor('#00e0ff')
            .setTitle("JavaScript Code Evaluation")
            .addField('Input', `\`\`\`js\n${code}\`\`\``)
            .addField('Output\n`ERROR`', `\`\`\`js\n${err}\`\`\``)
            .setTimestamp();
           // Send the Input embed
        return message.channel.send(errembed);
    }

    if (typeof output != "string") output = util.inspect(output);
      // Construct the Output embed
    const outputembed = new Discord.MessageEmbed()
        .setAuthor("corps", corps.user.displayAvatarURL())
        .setTitle("JavaScript Code Evaluation")
        .addField('Input', `\`\`\`js\n${code}\`\`\``)
        .addField('Output', `\`\`\`js\n${output}\`\`\``)
        .setFooter(`Executed in ${Date.now() - message.createdTimestamp}ms`)
        .setTimestamp();
     // Send the Output embed
    message.channel.send(outputembed);
}
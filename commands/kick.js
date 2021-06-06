// Import the discord.js module
const Discord = require('discord.js');
module.exports.run = async (corps, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    return;
}  
// Create an instance of a Discord client

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "?ban"
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .kick({
            reason: 'weirdo',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`shoved their boobs in ${user.tag}'s face`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
}
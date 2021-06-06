module.exports = (Gregory) => {

  const statuses = [
          "Playing with dababy",
          "doin ur mom",
          "committing vehicle manslaughter on families :slight_smile:",
          "shitting my pants",
          "Planting bombs in the lunch room",
          "trolling"
      ];
  
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      Gregory.user.setPresence({ activity: { name: status, type: "WATCHING" }, status: "dnd" });
  
    console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
  }
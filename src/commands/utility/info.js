//const prefix = config.prefix;
const Discord = require('discord.js');
module.exports = function info(bot, msg) {
    const embed = new Discord.RichEmbed();
    embed.setTitle(':information_source: A Y U Status');
    embed.setDescription('Here\'s some info about me');
    embed.addField(':white_check_mark: API Status', `ONLINE & bot latency to this server is ${Math.round(bot.ping)}ms`);
    embed.addField(':purple_heart:  My Life', 'I\'m currently being hosted on a Heroku free tier server, please donate to make me alive longer.');
    embed.setColor('#00ff00');
    embed.addField(':satellite_orbital: Server dominance', `Found ${bot.guilds.size} server instances with a population of ${bot.users.size} users`);
    msg.channel.send(embed);
}

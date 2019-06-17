//const prefix = config.prefix;
const Discord = require('discord.js');

/*
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory)
*/

module.exports = function listCommands(prefix, msg) {
    const embed = new Discord.RichEmbed();
    /*
    const directories = getDirectories('./src/commands');
    const commands = [];

    directories.forEach(function(item) {
        commands.push(item.slice(13));
    });
    ----------------------------------
    for (var i = 1; i < commands.length; i++) {
        embed.addField(commands[i]);
    }
    */
    embed.setTitle('Here are my commands ')
    embed.setDescription('For more info, contact the Goddess');
    embed.addField(' FUN STUFF', '--------------');
    embed.addField('Memes', `Request a meme: ${prefix}meme`, true);
    embed.addField('Jokes', `View a joke: ${prefix}joke`, true);
    embed.addField('Amazeme', `Be amazed: ${prefix}amazeme`, true);
    embed.addField('Music', `View music streaming help: ${prefix}music`, true);
    embed.addField('Advice', `Ask me for advice: ${prefix}ask`, true);
    embed.addField(' USEFUL STUFF', '--------------');
    embed.addField('The Purge', `Purge messages: ${prefix}purge [num]`, true);
    embed.addField('Ping', `View latency to server: ${prefix}ping`, true);
    embed.addField('My Status', `View my info: ${prefix}info`, true);
    embed.setColor('#0064ff');
    embed.setFooter('Note: Please donate me to keep me going and add more feature!');
    embed.setAuthor('A Y U v.0.b1');
    msg.channel.send(embed);
}

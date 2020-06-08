const { prefix } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['commands', 'cmds', '?'],
    description: 'List of all my commands or info about a specific command.',
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            commands.forEach(command => {
                // data.push(commands.map(command => command.name).join(', '));
                data.push(`\`${command.name}\` - ${command.description}`);
            });
            data.push(`\nYou can send \`${prefix}${this.name} ${this.usage}\` to get info on a specific command!`);

            const helpText = new MessageEmbed()
                .setColor(0xEEEEEE)
                .setAuthor('Help')
                .setURL('https://trello.com/b/FB61AsAb/tiffany-discord-bot')
                .setDescription(data)
                .setTimestamp();
                // .setAuthor(message.client.guild.member);

            return message.author.send(helpText)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    },
};
const fs = require('fs');
const { prefix, token, activityName, presenceType, botStatus } = require('./config.json');
const { Client, Collection } = require('discord.js');
// const GphApiClient = require('giphy-js-sdk-core');

const client = new Client({
	disableEveryone: true,
});
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Collection();

client.once('ready', () => {
	client.user.setPresence({
        activity: {
            name: activityName,
            type: presenceType,
        },
        status: botStatus,
    }).then(console.log).catch(console.error);
});

client.on('guildMemberAdd', member => {
	const greetChannel = member.guild.channels.cache.find(channel => channel.name == 'user-stats');

	if (!greetChannel) return;
	greetChannel.send(`Welcome to ${member.guild.name}, ${member}`);
});

// client.on('guildMemberRemove', member => {
// 	const greetChannel = member.guild.channels.cache.find(channel => channel.name == 'user-stats');

// 	if (!greetChannel) return;
// 	greetChannel.send(`${member} just left ${member.guild.name}`);
// });

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
    }
    catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
// Require Nods.js Filesystem
const fs = require('fs');

// Require Discord .js module
const Discord = require('discord.js');

// Require Configurations
const {
    prefix,
    token,
} = require('./config.json');

// Create a new Discord client
const client = new Discord.Client();

// Collections
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();


// Filesystem
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const commandFile = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(commandFile.name, commandFile);
}

// When the client is ready, run this code.
// This event will only be run once.
client.once('ready', () => {
    console.log('Ready!');
});

// Listening to messages
client.on('message', message => {
    // Checking if bot was called for
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Dividing messages into array
    const args = message.content.slice(prefix.length).split(/ +/);

    // Command: Removing command from array and convertingn into lower case
    const commandName = args.shift().toLowerCase();
    // console.log(message.content);

    // if (client.userCommands.has(commandName)) {
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage of the command would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
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
        message.reply('there was an error! If the problem persists for more than an hour, please contact me owner at foo@bar');
    }

});

// Login to Discord with app's token
client.login(token);
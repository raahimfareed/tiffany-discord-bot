module.exports = {
    name: 'prune',
    aliases: ['del', 'delete', 'd', 'pr', 'clean', 'clear'],
    description: 'Deletes a number of messages',
    guildOnly: true,
    execute(message, args) {
        if (!message.member.hasPermission(['MANAGE_MESSAGES'])) return;

        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        else if (amount <= 1 || amount > 99) {
            return message.reply('you need to specify the limit between 1 and 99.');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.log(err);
            message.channel.send('There was an error pruning messages in this channel!');
        });
    },
};
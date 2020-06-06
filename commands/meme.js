const randomPuppy = require('random-puppy');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'meme',
    description: 'Sends an epic meme',
    async execute(message) {
        const subReddits = ['dankmeme', 'memes', 'funny', 'me_irl', 'raimimemes', 'historymemes', 'okbuddyretard', 'comedyheaven', 'pewdiepiesubmissions'];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle('Meemees')
            .setURL(`http://www.reddit.com/r/${random}`)
            .setFooter(`From /r/${random}`);

        message.channel.send(embed);
    },
};
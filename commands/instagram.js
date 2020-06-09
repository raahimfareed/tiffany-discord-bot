const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'instagram',
    aliases: ['ig', 'insta', 'igpf', 'instaprofile'],
    description: 'Shows details of an instagram account',
    usage: '[username]',
    async execute(message, args) {
        if (!args[0]) {
            if (message.channel.type === 'dm') {
                return message.reply('Please provide a username!');
            }
            else {
                return message.reply('please provide a username!').then(m => {
                    m.delete({ timeout:5000 });
                    if (message.deletable) message.delete({ timeout:5000 });
                });
            }
        }

        const igUsername = args[0].toLowerCase();

        const url = `http://www.instagram.com/${igUsername}/?__a=1`;
        const res = await fetch(url).then(resUrl => resUrl.json());

        // console.log(res);

        if (!res.graphql.user.username) return message.reply('I couldn\'t find an account :(');

        const user = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setTitle(user.full_name)
            .setURL(`http://www.instagram.com/${igUsername}/`)
            .setThumbnail(user.profile_pic_url_hd)
            .addField('Profile Information', `**- Username:** ${user.username} 
            **- Full name:** ${user.full_name} 
            **- Biography:** ${user.biography.length == 0 ? 'none' : user.biography} 
            **- Posts:** ${user.edge_owner_to_timeline_media.count}
            **- Followers:** ${user.edge_followed_by.count}
            **- Following:** ${user.edge_follow.count}
            **- Private Account:** ${user.is_private ? 'Yes 🔐' : 'No 🔓'}`);

        message.channel.send(embed);

    },
};
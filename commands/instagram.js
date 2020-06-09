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
        const res = await fetch(url).then(resUrl => resUrl.json()).catch(err => {
            console.log(`An error occurred: ${err}`);
            return message.reply('Something wen\'t wrong! If this isn\'t fixed in the next hour, please appeal a complaint in my discord server!');
        });
            // .then(() => {

            // })
            // .catch(err => {
            //     console.log(`An error occurred: ${err}`);
            //     return message.reply('Something wen\'t wrong! If this isn\'t fixed in the next hour, please appeal a complaint in my discord server!');
            // });

            if (!res.graphql.user.username) return message.reply('I couldn\'t find an account :(');

                const user = res.graphql.user;

                const embedMsg = `**- Username:** ${user.username}\n
                **- Full name:** ${user.full_name}\n
                **- Biography:** ${user.biography.length == 0 ? 'none' : user.biography}\n
                **- Posts:** ${user.edge_owner_to_timeline_media.count}\n
                **- Followers:** ${user.edge_followed_by.count}\n
                **- Following:** ${user.edge_follow.count}\n
                **- Private Account:** ${user.is_private ? 'Yes 🔐' : 'No 🔓'}`;

                const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle(user.full_name)
                    .setURL(`http://www.instagram.com/${igUsername}/`)
                    .setThumbnail(user.profile_pic_url_hd)
                    .setDescription(embedMsg);

                message.channel.send(embed);

        // console.log(res);

    },
};
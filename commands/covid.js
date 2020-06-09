const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'covid',
    aliases: ['cvd', 'c19', 'covid19', 'covid-19'],
    description: 'Shows info about COVID-19',
    usage: '[country code]',
    async execute(message, args) {
        if (!args[0]) {
            const res = await fetch('https://covidapi.info/api/v1/global').then(resUrl => resUrl.json()).catch(err => {
                console.log(`An error occurred: ${err}`);
                return message.reply('Something wen\'t wrong! If this isn\'t fixed in the next hour, please appeal a complaint in my discord server!');
            });

            // console.log(res);
            const d = new Date(res.date);
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            const embedDesc = `The data might be be outdated by 1-4 days!\n**Last Updated on:** ${da} - ${mo} - ${ye}`;
            const embed = new MessageEmbed()
                .setColor('0xEEEEEE')
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setTitle('**COVID-19** - Global')
                .setDescription(embedDesc)
                .addFields(
                    { name: 'Total/Confirmed', value: res.result.confirmed },
                    { name: 'Recovered', value: res.result.recovered, inline: true },
                    { name: '||Deaths||', value: `||${res.result.deaths}||`, inline: true },
                );

            return message.channel.send(embed);
        }

        const countryCode = args[0].toUpperCase();

        const res = await fetch(`https://covidapi.info/api/v1/country/${countryCode}/latest`).then(resUrl => resUrl.json()).catch(err => {
                console.log(`An error occurred: ${err}`);
                return message.reply('Country not found!\nCountry Codes: https://bit.ly/2MIW45J').then(m => {
                    if (message.deletable) message.delete({ timeout: 5000 });
                    if (m.deletable) m.delete({ timeout: 10000 });
                });
            });

            if (!res || typeof res !== 'object') return;
            let resKeys = [];
            // console.log(res);
            for (const key in res.result) {
                // eslint-disable-next-line no-prototype-builtins
                if (res.result.hasOwnProperty(key)) {
                    resKeys = res.result[key];
                }
            }

            // console.log(resKeys);

            const embedDesc = 'The data might be be outdated by 1-4 days!';
            const embed = new MessageEmbed()
                .setColor('0xEEEEEE')
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setTitle(`COVID-19 - ${args[0]}`)
                .setDescription(embedDesc)
                .addFields(
                    { name: 'Total/Confirmed', value: resKeys.confirmed },
                    { name: 'Recovered', value: resKeys.recovered, inline: true },
                    { name: '||Deaths||', value: `||${resKeys.deaths}||`, inline: true },
                );

            return message.channel.send(embed);

    },
};
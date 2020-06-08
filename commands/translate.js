const translate = require('@vitalets/google-translate-api');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.json');

const langs = {
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-CN': 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'he': 'Hebrew',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pa': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu',
};

module.exports = {
    name: 'translate',
    aliases: ['tr', 'lang'],
    description: 'Translates any language into any other langauge.',
    usage: '[from language] [to language] [text to translate]',
    cooldown: 1,
    execute(message, args) {
        if (!args.length) {
            const serverMsg = 'Sent you a message with detailed translate help';
            const errMsg = 'Error DMing you, make sure your DMs are on!';

            let translateDesc = `Commands Use - \`${prefix}${this.name} ${this.usage}\`\nExample: \`${prefix}${this.name} en es Hello\` - Translates Hello into Hola\n\n*Popular Languages*\n\`zh-TW\` - ${langs['zh-TW']}\n\`hi\` - ${langs['hi']}\n\`es\` - ${langs['es']}\n\`ar\` - ${langs['ar']}\n\`ms\` - ${langs['ms']}\n\`ru\` - ${langs['ru']}\n\n*All Languages Available*`;
            for (const [key, value] of Object.entries(langs)) {
                translateDesc += `\n\`${key}\` - ${value}`;
            }

            const translateEmbed = new MessageEmbed()
                .setColor(0xEEEEEE)
                .setTitle('Translate Text')
                .setURL('https://trello.com/b/FB61AsAb/tiffany-discord-bot')
                .setDescription(translateDesc);

            if (message.channel.type === 'dm') {
                message.reply(translateEmbed);
            }
            else {
                message.author.send(translateEmbed)
                    .then(() => {
                        message.channel.send(serverMsg);
                    })
                    .catch(err => {
                        console.error(err);
                        message.channel.send(errMsg);
                    });
            }
        }
        else if (!args[2]) {
            return message.reply('Please provide a second language\nFormat: `' + prefix + this.name + ' ' + this.usage + '`\nSend `.translate` for more help.');
        }
        else {
            const translateText = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor(0x7c5295)
                .setURL('https://trello.com/b/FB61AsAb/tiffany-discord-bot');

            const fromLang = args[0];
            const toLang = args[1];

            translate(args.slice(2).join(' '), { from: fromLang, to: toLang })
                .then(res => {
                    translateText
                        .setDescription(`${args.slice(2).join(' ')}\n${res.text}\n${res.pronunciation}`)
                        .setTimestamp()
                        .setFooter(`Translated from ${langs[fromLang]}\nTranslated to ${langs[toLang]}`);
                    message.channel.send(translateText);
                })
                .catch(err => {
                    console.error(err);
                    message.reply('An error occurred, make sure you used the correct language codes!');
                });
        }
    },
};
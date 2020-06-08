const translate = require('@vitalets/google-translate-api');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'translate',
    description: 'Translates a text',
    execute(message, args) {
        if (args.length < 1) {
            const serverMsg = 'Sent you a message with detailed translate help';
            const errMsg = 'Could not send you a message';

            const translateDesc = 'Commands Use - `.translate [language code]`\nExample: `.translate es Hello` - Translates Hello into Hola\n\n*Popular Languages*\n`zh-tw` - Chinese (Traditional)\n`hi` - Hindi\n`es` - Spanish\n`ar` - Arabic\n`ms` - Malay\n`ru` - Russian\n\n*All Languages Available*\n`auto` - Translates any other language into English\n`af` - Afrikaans\n`sq` - Albanian\n`am` - Amharic\n`ar` - Arabic\n`hy` - Armenian\n`az` - Azerbaijan\n`eu` - Basque\n`be` - Belarusian\n`bn` - Bengali\n`bs` - Bosnian\n`bg` - Bulgarian\n`ca` - Catalan\n`ca` - Catalan\n`ceb` - Cebuano\n`ny` - Chichewa\n`zh-cn` - Chinese (Simplified)\n`zh-tw` - Chinese (Traditional)\n`co` - Corsican\n`hr` - Croatian\n`cs` - Czech\n`da` - Danish\n`nl` - Dutch\n`eo` - Esperanto\n`et` - Estonian\n`tl` - Filipino\n`fi` - Finnish\n`fr` - French\n`fy` - Frisian\n`gl` - Galician\n`ka` - Georgian\n`de` - German\n`el` - Greek\n`gu` - Gujarati\n`ht` - Haitan Creole\n`ha` - Hausa\n`haw` - Hawaiian\n`he` - Hebrew\n`iw` - Hebrew\n`hi` - Hindi\n`hmn` - Hmong\n`hu` - Hungarian\n`is` - Icelandic\n`ig` - Igbo\n`id` - Indonesian\n`ga` - Irish\n`it` - Italian\n`ja` - Japanese\n`jw` - Javanese\n`kn` - Kannada\n`kk` - Kazakh\n`km` - Khmer\n`ko` - Korean\n`ku` - Kurdish (Kurmanji)\n`ky` - Kyrgyz\n`lo` - Lao\n`la` - Latin\n`lv` - Latvian\n`lt` - Lithuanian\n`lb` - Luxembourgish\n`mk` - Macedonian\n`mg` - Malagasy\n`ms` - Malay\n`ml` - Malayalam\n`mt` - Maltese\n`mi` - Maori\n`mr` - Marathi\n`mn` - Mongolian\n`my` - Myanmar (Burmese)\n`ne` - Nepali\n`no` - Norwegian\n`ps` - Pashto\n`fa` - Persian\n`pl` - Polish\n`pt` - Portuguese\n`pa` - Punjabi\n`ro` - Romanian\n`ru` - Russian\n`sm` - Samoan\n`gd` - Scots Gaelic\n`sr` - Serbian\n`st` - Sesotho\n`sn` - Shona\n`sd` - Sindhi\n`si` - Sinhala\n`sk` - Slovak\n`sl` - Slovenian\n`so` - Somali\n`es` - Spanish\n`su` - Sundanese\n`sw` - Swahili\n`sv` - Swedish\n`tg` - Tajik\n`ta` - Tamil\n`te` - Telugu\n`th` - Urdu\n`tr` - Turkish\n`uk` - Ukrainian\n`ur` - Urdu\n`uz` - Uzbek\n`vi` - Vietnamese\n`cy` - Welsh\n`xh` - Xhosa\n`yi` - Yiddish\n`yo` - Yoruba\n`zu` - Zulu';
                const translateEmbed = new MessageEmbed()
                    .setColor(0xEEEEEE)
                    .setDescription(translateDesc)
                    .setAuthor('Translate Text');

            if (message.author.send(translateEmbed)) {
                message.channel.send(serverMsg);
            }
            else {
                message.channel.send(errMsg);
            }
        }
        else {
            // if (message.deletable)
            //     message.delete();
            const translateText = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor(0x7c5295);
            switch (args[0].toLowerCase()) {
                case 'auto':
                    translate(args.slice(1).join(' '), { from: 'auto', to: 'en' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into English');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'af':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'af' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Afrikaans');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sq':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sq' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Albanian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'am':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'am' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Amharic');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ar':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ar' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Arabic');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'hy':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'hy' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Armenian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'az':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'az' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Azerbaijani');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'eu':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'eu' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Basque');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'be':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'be' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Belarusian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'bn':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'bn' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Bengali');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'bs':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'bs' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Bosnian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'bg':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'bg' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Bulgarian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ca':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ca' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Catalan');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ceb':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ceb' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Cebuano');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ny':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ny' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Chichewa');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'zh-cn':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'zh-CN' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Chinese(Simplified)');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'zh-tw':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'zh-TW' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Chinese(Traditional)');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'co':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'co' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Corsican');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'hr':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'hr' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Croatian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'cs':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'cs' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Czech');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'da':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'da' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Danish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'nl':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'nl' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Dutch');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'eo':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'eo' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Esperanto');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'et':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'et' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Estonian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'tl':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'tl' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Filipino');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'fi':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'fi' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Finnish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'fr':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'fr' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into French');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'fy':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'fy' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Frisian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'gl':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'gl' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Galician');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ka':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ka' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Georgian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'de':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'de' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into German');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'el':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'el' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Greek');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'gu':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'gu' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Gujarati');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ht':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ht' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Haitian Creole');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ha':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ha' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hausa');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'haw':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'haw' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hawaiian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'he':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'he' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hebrew');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'iw':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'iw' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hebrew');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'hi':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'hi' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hindi');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'hmn':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'hmn' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hmong');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'hu':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'hu' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Hungarian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'is':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'is' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Icelandic');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ig':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ig' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Igbo');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'id':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'id' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Indonesian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ga':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ga' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Irish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'it':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'it' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Italian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ja':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ja' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Japanese');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'jw':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'jw' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Javanese');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'kn':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'kn' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Kannada');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'kk':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'kk' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Kazakh');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'km':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'km' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Khmer');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ko':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ko' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Korean');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ku':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ku' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Kurdish (Kurmanji)');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ky':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ky' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Kyrgyz');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'lo':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'lo' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Lao');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'la':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'la' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Latin');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'lv':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'lv' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Latvian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'lt':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'lt' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Lithuanian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'lb':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'lb' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Luxembourgish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'mk':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'mk' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Macedonian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'mg':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'mg' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Malagasy');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ms':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ms' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Malay');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ml':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ml' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Malayalam');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'mt':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'mt' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Maltese');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'mi':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'mi' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Maori');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'mr':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'mr' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Marathi');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'mn':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'mn' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Mongolian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'my':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'my' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Myanmar (Burmese)');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ne':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ne' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Nepali');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'no':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'no' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Norwegian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ps':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ps' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Pashto');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'fa':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'fa' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Persian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'pl':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'pl' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Polish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'pt':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'pt' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Portuguese');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'pa':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'pa' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Punjabi');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ro':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ro' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Romanian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ru':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ru' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Russian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sm':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sm' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Samoan');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'gd':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'gd' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Scots Gaelic');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sr':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sr' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Serbian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'st':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'st' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Sesotho');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sn':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sn' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Shona');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sd':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sd' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Sindhi');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'si':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'si' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Sinhala');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sk':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sk' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Slovak');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sl':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sl' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Slovenian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'so':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'so' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Somali');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'es':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'es' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Spanish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'su':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'su' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Sundanese');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sw':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sw' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Swahili');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'sv':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'sv' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Swedish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'tg':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'tg' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Tajik');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ta':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ta' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Tamil');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'te':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'te' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Telugu');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'th':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'th' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Thai');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'tr':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'tr' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Turkish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'uk':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'uk' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Ukrainian');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'ur':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'ur' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Urdu');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'uz':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'uz' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Uzbek');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'vi':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'vi' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Vietnamese');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'cy':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'cy' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Welsh');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'xh':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'xh' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Xhosa');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'yi':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'yi' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Yiddish');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'yo':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'yo' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Yoruba');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                case 'zu':
                    translate(args.slice(1).join(' '), { from: 'en', to: 'zu' }).then(res => {
                        translateText.setDescription(res.text).setFooter('Translated into Zulu');
                        message.channel.send(translateText);
                    }).catch(err => {
                        console.error(err);
                        message.channel.send('An Error Occurred!');
                    });
                    break;
                default:
                    message.channel.send('That option doesn\'t exist doofus');
                    break;
            }
        }
    },
};
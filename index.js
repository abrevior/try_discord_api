const commando = require('discord.js-commando');
const mongo = require('./mongo');
const bot = new commando.Client();

bot.registry.registerGroup('random','Random');
bot.registry.registerGroup('task','Task');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login('NDI1MzE3ODI1ODY4MjAxOTk3.DZFr-w.ez-3OMPEUc09GkILY2LFz0yINKU');
const commando = require('discord.js-commando');
const mongo = require('./mongo');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('task', 'Task');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

if (!process.env.BOT_TOKEN) {
  throw new Error('Can\'t find token for discord server login');
}
const token = process.env.BOT_TOKEN;

async function connect() {
  await bot.login(token);
}

connect();



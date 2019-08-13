import * as Discord from 'discord.js';
import { config } from './config';

console.log('hello world!');

const bot = new Discord.Client();

bot.on('message', (message) => {
  // our bot needs to know if it will execute a command
  // it will listen for messages that will start with `!`
  if (message.content.substring(0, 1) === '!') {
    const args = message.content.substring(1).split(' ');
    const cmd = args.shift();

    if (cmd === 'ping') {
      message.reply('Pong!');
    }
  }
});

bot.login(config.DISCORD_TOKEN).then(() => {
  console.log(`Logged in as ${bot.user.tag}`);
});

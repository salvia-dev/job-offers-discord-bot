import type { Message } from 'discord.js';
import Discord, { Intents } from 'discord.js';
import { readyHandler } from './handlers/readyHandler';
import { messageHandler } from './handlers/messageHandler';
import { getConfig } from './config';

export const bot = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

bot.on('ready', readyHandler);
bot.on('messageCreate', async (message: Message) => await messageHandler(message));

const init = async () => {
  try {
    await bot.login(getConfig('BOT_TOKEN'));
  } catch (err) {
    console.log(err);
  }
};

init();

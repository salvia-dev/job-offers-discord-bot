import type { Message } from 'discord.js';

export const messageHandler = async (message: Message) => {
  if (message.author.bot) return;
};

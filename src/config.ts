import type { NodeEnv } from './types';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const getConfig = (name: string) => {
  const value = process.env[name];

  if (['NODE_ENV', 'BOT_TOKEN'].indexOf(name) !== -1) {
    return value as string;
  }

  return '';
};

export const isNodeEnv = (env: NodeEnv) => getConfig('NODE_ENV') === env;

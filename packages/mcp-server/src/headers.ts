// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'discord-api';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const botToken =
    Array.isArray(req.headers['x-bot-token']) ? req.headers['x-bot-token'][0] : req.headers['x-bot-token'];
  return { botToken };
};

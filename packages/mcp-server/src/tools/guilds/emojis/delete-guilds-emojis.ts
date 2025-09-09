// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.emojis',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/emojis/{emoji_id}',
  operationId: 'delete_guild_emoji',
};

export const tool: Tool = {
  name: 'delete_guilds_emojis',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      emoji_id: {
        type: 'string',
      },
    },
    required: ['guild_id', 'emoji_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, emoji_id, ...body } = args as any;
  const response = await client.guilds.emojis.delete(guild_id, emoji_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

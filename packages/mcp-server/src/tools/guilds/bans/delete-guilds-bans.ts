// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.bans',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/bans/{user_id}',
  operationId: 'unban_user_from_guild',
};

export const tool: Tool = {
  name: 'delete_guilds_bans',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
    },
    required: ['guild_id', 'user_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, user_id, ...body } = args as any;
  const response = await client.guilds.bans.delete(guild_id, user_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

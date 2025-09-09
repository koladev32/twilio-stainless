// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'users.guilds',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/users/@me/guilds/{guild_id}',
  operationId: 'leave_guild',
};

export const tool: Tool = {
  name: 'delete_users_guilds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
    },
    required: ['guild_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  const response = await client.users.guilds.delete(guild_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

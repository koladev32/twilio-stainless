// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.channels',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/guilds/{guild_id}/channels',
  operationId: 'bulk_update_guild_channels',
};

export const tool: Tool = {
  name: 'update_guilds_channels',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            lock_permissions: {
              type: 'boolean',
            },
            parent_id: {
              type: 'string',
            },
            position: {
              type: 'integer',
            },
          },
        },
      },
    },
    required: ['guild_id', 'body'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  const response = await client.guilds.channels.update(guild_id, body['body']).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

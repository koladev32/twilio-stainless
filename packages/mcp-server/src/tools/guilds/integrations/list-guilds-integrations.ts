// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/integrations',
  operationId: 'list_guild_integrations',
};

export const tool: Tool = {
  name: 'list_guilds_integrations',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  return asTextContentResult(await client.guilds.integrations.list(guild_id));
};

export default { metadata, tool, handler };

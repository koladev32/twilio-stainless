// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.templates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/templates/{code}',
  operationId: 'delete_guild_template',
};

export const tool: Tool = {
  name: 'delete_guilds_templates',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      code: {
        type: 'string',
      },
    },
    required: ['guild_id', 'code'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, code, ...body } = args as any;
  return asTextContentResult(await client.guilds.templates.delete(guild_id, code));
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/templates/{code}',
  operationId: 'get_guild_template',
};

export const tool: Tool = {
  name: 'retrieve_guilds_templates',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
    },
    required: ['code'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { code, ...body } = args as any;
  return asTextContentResult(await client.guilds.templates.retrieve(code));
};

export default { metadata, tool, handler };

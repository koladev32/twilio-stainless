// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'invites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/invites/{code}',
  operationId: 'invite_resolve',
};

export const tool: Tool = {
  name: 'retrieve_invites',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
      guild_scheduled_event_id: {
        type: 'string',
      },
      with_counts: {
        type: 'boolean',
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
  return asTextContentResult(await client.invites.retrieve(code, body));
};

export default { metadata, tool, handler };

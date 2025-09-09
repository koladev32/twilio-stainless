// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/channels/{channel_id}/messages',
  operationId: 'list_messages',
};

export const tool: Tool = {
  name: 'list_channels_messages',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      after: {
        type: 'string',
      },
      around: {
        type: 'string',
      },
      before: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
    },
    required: ['channel_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  return asTextContentResult(await client.channels.messages.list(channel_id, body));
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/channels/{channel_id}',
  operationId: 'delete_channel',
};

export const tool: Tool = {
  name: 'delete_channels',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
    },
    required: ['channel_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  return asTextContentResult(await client.channels.delete(channel_id));
};

export default { metadata, tool, handler };

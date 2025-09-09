// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/messages/bulk-delete',
  operationId: 'bulk_delete_messages',
};

export const tool: Tool = {
  name: 'bulk_delete_channels_messages',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      messages: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['channel_id', 'messages'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  const response = await client.channels.messages.bulkDelete(channel_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

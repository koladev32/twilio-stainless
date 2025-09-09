// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.pins',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/channels/{channel_id}/pins',
  operationId: 'list_pinned_messages',
};

export const tool: Tool = {
  name: 'list_channels_pins',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  return asTextContentResult(await client.channels.pins.list(channel_id));
};

export default { metadata, tool, handler };

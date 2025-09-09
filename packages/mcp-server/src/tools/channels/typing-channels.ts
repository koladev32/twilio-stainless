// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/typing',
  operationId: 'trigger_typing_indicator',
};

export const tool: Tool = {
  name: 'typing_channels',
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
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  return asTextContentResult((await client.channels.typing(channel_id)) as object);
};

export default { metadata, tool, handler };

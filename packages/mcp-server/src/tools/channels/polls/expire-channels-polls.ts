// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.polls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/polls/{message_id}/expire',
  operationId: 'poll_expire',
};

export const tool: Tool = {
  name: 'expire_channels_polls',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      message_id: {
        type: 'string',
      },
    },
    required: ['channel_id', 'message_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, message_id, ...body } = args as any;
  return asTextContentResult(await client.channels.polls.expire(channel_id, message_id));
};

export default { metadata, tool, handler };

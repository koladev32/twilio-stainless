// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.recipients',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/channels/{channel_id}/recipients/{user_id}',
  operationId: 'delete_group_dm_user',
};

export const tool: Tool = {
  name: 'delete_channels_recipients',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
    },
    required: ['channel_id', 'user_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, user_id, ...body } = args as any;
  const response = await client.channels.recipients.delete(channel_id, user_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

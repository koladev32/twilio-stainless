// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.thread_members',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/channels/{channel_id}/thread-members/{user_id}',
  operationId: 'delete_thread_member',
};

export const tool: Tool = {
  name: 'delete_channels_thread_members',
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
  const response = await client.channels.threadMembers.delete(channel_id, user_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

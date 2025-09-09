// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.thread_members.me',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/channels/{channel_id}/thread-members/@me',
  operationId: 'join_thread',
};

export const tool: Tool = {
  name: 'put_thread_members_channels_me',
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
  const response = await client.channels.threadMembers.me.put(channel_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.messages.reactions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/channels/{channel_id}/messages/{message_id}/reactions',
  operationId: 'delete_all_message_reactions',
};

export const tool: Tool = {
  name: 'clear_messages_channels_reactions',
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, message_id, ...body } = args as any;
  const response = await client.channels.messages.reactions.clear(channel_id, message_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

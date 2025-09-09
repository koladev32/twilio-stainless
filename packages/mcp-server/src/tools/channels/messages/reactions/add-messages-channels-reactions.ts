// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.messages.reactions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me',
  operationId: 'add_my_message_reaction',
};

export const tool: Tool = {
  name: 'add_messages_channels_reactions',
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
      emoji_name: {
        type: 'string',
      },
    },
    required: ['channel_id', 'message_id', 'emoji_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, message_id, emoji_name, ...body } = args as any;
  const response = await client.channels.messages.reactions
    .add(channel_id, message_id, emoji_name)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

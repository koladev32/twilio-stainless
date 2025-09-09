// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.messages.reactions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}',
  operationId: 'delete_user_message_reaction',
};

export const tool: Tool = {
  name: 'remove_for_user_messages_channels_reactions',
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
      user_id: {
        type: 'string',
      },
    },
    required: ['channel_id', 'message_id', 'emoji_name', 'user_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, message_id, emoji_name, user_id, ...body } = args as any;
  const response = await client.channels.messages.reactions
    .removeForUser(channel_id, message_id, emoji_name, user_id)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

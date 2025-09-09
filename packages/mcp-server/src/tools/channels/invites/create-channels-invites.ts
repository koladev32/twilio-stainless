// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.invites',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/invites',
  operationId: 'create_channel_invite',
};

export const tool: Tool = {
  name: 'create_channels_invites',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          channel_id: {
            type: 'string',
          },
          max_age: {
            type: 'integer',
          },
        },
        required: ['channel_id'],
      },
      {
        type: 'object',
        properties: {
          channel_id: {
            type: 'string',
          },
          max_age: {
            type: 'integer',
          },
          max_uses: {
            type: 'integer',
          },
          target_application_id: {
            type: 'string',
          },
          target_type: {
            type: 'string',
            enum: [1, 2, 3],
          },
          target_user_id: {
            type: 'string',
          },
          temporary: {
            type: 'boolean',
          },
          unique: {
            type: 'boolean',
          },
        },
        required: ['channel_id'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  return asTextContentResult(await client.channels.invites.create(channel_id, body));
};

export default { metadata, tool, handler };

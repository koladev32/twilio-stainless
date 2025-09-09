// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/send-soundboard-sound',
  operationId: 'send_soundboard_sound',
};

export const tool: Tool = {
  name: 'send_soundboard_sound_channels',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      sound_id: {
        type: 'string',
      },
      source_guild_id: {
        type: 'string',
      },
    },
    required: ['channel_id', 'sound_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  const response = await client.channels.sendSoundboardSound(channel_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

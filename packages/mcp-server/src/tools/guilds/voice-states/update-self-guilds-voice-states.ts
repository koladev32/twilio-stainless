// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.voice_states',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/guilds/{guild_id}/voice-states/@me',
  operationId: 'update_self_voice_state',
};

export const tool: Tool = {
  name: 'update_self_guilds_voice_states',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      channel_id: {
        type: 'string',
      },
      request_to_speak_timestamp: {
        type: 'string',
        format: 'date-time',
      },
      suppress: {
        type: 'boolean',
      },
    },
    required: ['guild_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  const response = await client.guilds.voiceStates.updateSelf(guild_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

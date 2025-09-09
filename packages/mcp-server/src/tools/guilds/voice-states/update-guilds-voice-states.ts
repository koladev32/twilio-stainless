// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.voice_states',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/guilds/{guild_id}/voice-states/{user_id}',
  operationId: 'update_voice_state',
};

export const tool: Tool = {
  name: 'update_guilds_voice_states',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
      channel_id: {
        type: 'string',
      },
      suppress: {
        type: 'boolean',
      },
    },
    required: ['guild_id', 'user_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, user_id, ...body } = args as any;
  const response = await client.guilds.voiceStates.update(guild_id, user_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

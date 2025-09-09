// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.scheduled_events',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}',
  operationId: 'delete_guild_scheduled_event',
};

export const tool: Tool = {
  name: 'delete_guilds_scheduled_events',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      guild_scheduled_event_id: {
        type: 'string',
      },
    },
    required: ['guild_id', 'guild_scheduled_event_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, guild_scheduled_event_id, ...body } = args as any;
  const response = await client.guilds.scheduledEvents
    .delete(guild_id, guild_scheduled_event_id)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

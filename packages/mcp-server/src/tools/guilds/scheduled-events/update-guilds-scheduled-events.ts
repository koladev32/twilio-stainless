// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.scheduled_events',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}',
  operationId: 'update_guild_scheduled_event',
};

export const tool: Tool = {
  name: 'update_guilds_scheduled_events',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          guild_scheduled_event_id: {
            type: 'string',
          },
          channel_id: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          entity_metadata: {
            type: 'object',
            properties: {
              location: {
                type: 'string',
              },
            },
            required: ['location'],
          },
          entity_type: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          image: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          privacy_level: {
            type: 'string',
            title: 'GUILD_ONLY',
            description: 'the scheduled event is only accessible to guild members',
            enum: [2],
          },
          scheduled_end_time: {
            type: 'string',
            format: 'date-time',
          },
          scheduled_start_time: {
            type: 'string',
            format: 'date-time',
          },
          status: {
            type: 'string',
            enum: [1, 2, 3, 4],
          },
        },
        required: ['guild_id', 'guild_scheduled_event_id'],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          guild_scheduled_event_id: {
            type: 'string',
          },
          channel_id: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          entity_metadata: {
            type: 'object',
            additionalProperties: true,
          },
          entity_type: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          image: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          privacy_level: {
            type: 'string',
            title: 'GUILD_ONLY',
            description: 'the scheduled event is only accessible to guild members',
            enum: [2],
          },
          scheduled_end_time: {
            type: 'string',
            format: 'date-time',
          },
          scheduled_start_time: {
            type: 'string',
            format: 'date-time',
          },
          status: {
            type: 'string',
            enum: [1, 2, 3, 4],
          },
        },
        required: ['guild_id', 'guild_scheduled_event_id'],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          guild_scheduled_event_id: {
            type: 'string',
          },
          channel_id: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          entity_metadata: {
            type: 'object',
            additionalProperties: true,
          },
          entity_type: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          image: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          privacy_level: {
            type: 'string',
            title: 'GUILD_ONLY',
            description: 'the scheduled event is only accessible to guild members',
            enum: [2],
          },
          scheduled_end_time: {
            type: 'string',
            format: 'date-time',
          },
          scheduled_start_time: {
            type: 'string',
            format: 'date-time',
          },
          status: {
            type: 'string',
            enum: [1, 2, 3, 4],
          },
        },
        required: ['guild_id', 'guild_scheduled_event_id'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, guild_scheduled_event_id, ...body } = args as any;
  return asTextContentResult(
    await client.guilds.scheduledEvents.update(guild_id, guild_scheduled_event_id, body),
  );
};

export default { metadata, tool, handler };

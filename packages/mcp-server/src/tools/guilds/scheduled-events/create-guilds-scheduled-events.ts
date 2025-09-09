// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.scheduled_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/guilds/{guild_id}/scheduled-events',
  operationId: 'create_guild_scheduled_event',
};

export const tool: Tool = {
  name: 'create_guilds_scheduled_events',
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
          name: {
            type: 'string',
          },
          privacy_level: {
            type: 'string',
            title: 'GUILD_ONLY',
            description: 'the scheduled event is only accessible to guild members',
            enum: [2],
          },
          scheduled_start_time: {
            type: 'string',
            format: 'date-time',
          },
          channel_id: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          image: {
            type: 'string',
          },
          scheduled_end_time: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [
          'guild_id',
          'entity_metadata',
          'entity_type',
          'name',
          'privacy_level',
          'scheduled_start_time',
        ],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          entity_type: {
            type: 'string',
            enum: [0, 1, 2, 3],
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
          scheduled_start_time: {
            type: 'string',
            format: 'date-time',
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
          image: {
            type: 'string',
          },
          scheduled_end_time: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['guild_id', 'entity_type', 'name', 'privacy_level', 'scheduled_start_time'],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          entity_type: {
            type: 'string',
            enum: [0, 1, 2, 3],
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
          scheduled_start_time: {
            type: 'string',
            format: 'date-time',
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
          image: {
            type: 'string',
          },
          scheduled_end_time: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['guild_id', 'entity_type', 'name', 'privacy_level', 'scheduled_start_time'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  return asTextContentResult(await client.guilds.scheduledEvents.create(guild_id, body));
};

export default { metadata, tool, handler };

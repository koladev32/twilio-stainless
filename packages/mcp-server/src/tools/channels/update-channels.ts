// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/channels/{channel_id}',
  operationId: 'update_channel',
};

export const tool: Tool = {
  name: 'update_channels',
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
          icon: {
            type: 'string',
          },
          name: {
            type: 'string',
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
          available_tags: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                emoji_id: {
                  type: 'string',
                },
                emoji_name: {
                  type: 'string',
                },
                moderated: {
                  type: 'boolean',
                },
              },
              required: ['name'],
            },
          },
          bitrate: {
            type: 'integer',
          },
          default_auto_archive_duration: {
            type: 'string',
            description:
              '- `60` - One hour\n- `1440` - One day\n- `4320` - Three days\n- `10080` - Seven days',
            enum: [60, 1440, 4320, 10080],
          },
          default_forum_layout: {
            type: 'string',
            description:
              '- `0` - No default has been set for forum channel\n- `1` - Display posts as a list\n- `2` - Display posts as a collection of tiles',
            enum: [0, 1, 2],
          },
          default_reaction_emoji: {
            type: 'object',
            properties: {
              emoji_id: {
                type: 'string',
              },
              emoji_name: {
                type: 'string',
              },
            },
          },
          default_sort_order: {
            type: 'string',
            description:
              '- `0` - Sort forum posts by activity\n- `1` - Sort forum posts by creation time (from most recent to oldest)',
            enum: [0, 1],
          },
          default_thread_rate_limit_per_user: {
            type: 'integer',
          },
          flags: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
          nsfw: {
            type: 'boolean',
          },
          parent_id: {
            type: 'string',
          },
          permission_overwrites: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                allow: {
                  type: 'integer',
                },
                deny: {
                  type: 'integer',
                },
                type: {
                  type: 'string',
                  enum: [0, 1],
                },
              },
              required: ['id'],
            },
          },
          position: {
            type: 'integer',
          },
          rate_limit_per_user: {
            type: 'integer',
          },
          rtc_region: {
            type: 'string',
          },
          topic: {
            type: 'string',
          },
          type: {
            type: 'string',
            description:
              '- `1` - A direct message between users\n- `3` - A direct message between multiple users\n- `0` - A text channel within a server\n- `2` - A voice channel within a server\n- `4` - An organizational category that contains up to 50 channels\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\n- `13` - A voice channel for hosting events with an audience\n- `14` - The channel in a hub containing the listed servers\n- `15` - Channel that can only contain threads',
            enum: [1, 3, 0, 2, 4, 5, 10, 11, 12, 13, 14, 15],
          },
          user_limit: {
            type: 'integer',
          },
          video_quality_mode: {
            type: 'string',
            description: '- `1` - Discord chooses the quality for optimal performance\n- `2` - 720p',
            enum: [1, 2],
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
          applied_tags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          archived: {
            type: 'boolean',
          },
          auto_archive_duration: {
            type: 'string',
            description:
              '- `60` - One hour\n- `1440` - One day\n- `4320` - Three days\n- `10080` - Seven days',
            enum: [60, 1440, 4320, 10080],
          },
          bitrate: {
            type: 'integer',
          },
          flags: {
            type: 'integer',
          },
          invitable: {
            type: 'boolean',
          },
          locked: {
            type: 'boolean',
          },
          name: {
            type: 'string',
          },
          rate_limit_per_user: {
            type: 'integer',
          },
          rtc_region: {
            type: 'string',
          },
          user_limit: {
            type: 'integer',
          },
          video_quality_mode: {
            type: 'string',
            description: '- `1` - Discord chooses the quality for optimal performance\n- `2` - 720p',
            enum: [1, 2],
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
  return asTextContentResult(await client.channels.update(channel_id, body));
};

export default { metadata, tool, handler };

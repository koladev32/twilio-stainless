// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.channels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/guilds/{guild_id}/channels',
  operationId: 'create_guild_channel',
};

export const tool: Tool = {
  name: 'create_guilds_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_channel',\n  $defs: {\n    guild_channel: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        position: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - A direct message between users\\n- `3` - A direct message between multiple users\\n- `0` - A text channel within a server\\n- `2` - A voice channel within a server\\n- `4` - An organizational category that contains up to 50 channels\\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\\n- `13` - A voice channel for hosting events with an audience\\n- `14` - The channel in a hub containing the listed servers\\n- `15` - Channel that can only contain threads',\n          enum: [            1,\n            3,\n            0,\n            2,\n            4,\n            5,\n            10,\n            11,\n            12,\n            13,\n            14,\n            15\n          ]\n        },\n        available_tags: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              moderated: {\n                type: 'boolean'\n              },\n              name: {\n                type: 'string'\n              },\n              emoji_id: {\n                type: 'string'\n              },\n              emoji_name: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'moderated',\n              'name'\n            ]\n          }\n        },\n        bitrate: {\n          type: 'integer'\n        },\n        default_auto_archive_duration: {\n          type: 'string',\n          description: '- `60` - One hour\\n- `1440` - One day\\n- `4320` - Three days\\n- `10080` - Seven days',\n          enum: [            60,\n            1440,\n            4320,\n            10080\n          ]\n        },\n        default_forum_layout: {\n          type: 'string',\n          description: '- `0` - No default has been set for forum channel\\n- `1` - Display posts as a list\\n- `2` - Display posts as a collection of tiles',\n          enum: [            0,\n            1,\n            2\n          ]\n        },\n        default_reaction_emoji: {\n          type: 'object',\n          properties: {\n            emoji_id: {\n              type: 'string'\n            },\n            emoji_name: {\n              type: 'string'\n            }\n          }\n        },\n        default_sort_order: {\n          type: 'string',\n          description: '- `0` - Sort forum posts by activity\\n- `1` - Sort forum posts by creation time (from most recent to oldest)',\n          enum: [            0,\n            1\n          ]\n        },\n        default_thread_rate_limit_per_user: {\n          type: 'integer'\n        },\n        hd_streaming_buyer_id: {\n          type: 'string'\n        },\n        hd_streaming_until: {\n          type: 'string',\n          format: 'date-time'\n        },\n        last_message_id: {\n          type: 'string'\n        },\n        last_pin_timestamp: {\n          type: 'string',\n          format: 'date-time'\n        },\n        nsfw: {\n          type: 'boolean'\n        },\n        parent_id: {\n          type: 'string'\n        },\n        permission_overwrites: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              allow: {\n                type: 'string'\n              },\n              deny: {\n                type: 'string'\n              },\n              type: {\n                type: 'string',\n                enum: [                  0,\n                  1\n                ]\n              }\n            },\n            required: [              'id',\n              'allow',\n              'deny',\n              'type'\n            ]\n          }\n        },\n        permissions: {\n          type: 'string'\n        },\n        rate_limit_per_user: {\n          type: 'integer'\n        },\n        rtc_region: {\n          type: 'string'\n        },\n        topic: {\n          type: 'string'\n        },\n        user_limit: {\n          type: 'integer'\n        },\n        video_quality_mode: {\n          type: 'string',\n          description: '- `1` - Discord chooses the quality for optimal performance\\n- `2` - 720p',\n          enum: [            1,\n            2\n          ]\n        }\n      },\n      required: [        'id',\n        'flags',\n        'guild_id',\n        'name',\n        'position',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      name: {
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
        description: '- `60` - One hour\n- `1440` - One day\n- `4320` - Three days\n- `10080` - Seven days',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.guilds.channels.create(guild_id, body)),
  );
};

export default { metadata, tool, handler };

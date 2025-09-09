// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.threads.archived.private',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/channels/{channel_id}/threads/archived/private',
  operationId: 'list_private_archived_threads',
};

export const tool: Tool = {
  name: 'list_archived_threads_channels_private',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/threads_response',\n  $defs: {\n    threads_response: {\n      type: 'object',\n      properties: {\n        members: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/thread_member_response'\n          }\n        },\n        threads: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/thread'\n          }\n        },\n        has_more: {\n          type: 'boolean'\n        }\n      },\n      required: [        'members',\n        'threads'\n      ]\n    },\n    thread_member_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        join_timestamp: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string'\n        },\n        member: {\n          $ref: '#/$defs/guild_member_response'\n        }\n      },\n      required: [        'id',\n        'flags',\n        'join_timestamp',\n        'user_id'\n      ]\n    },\n    guild_member_response: {\n      type: 'object',\n      properties: {\n        deaf: {\n          type: 'boolean'\n        },\n        flags: {\n          type: 'integer'\n        },\n        joined_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        mute: {\n          type: 'boolean'\n        },\n        pending: {\n          type: 'boolean'\n        },\n        roles: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        user: {\n          $ref: '#/$defs/user'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        communication_disabled_until: {\n          type: 'string',\n          format: 'date-time'\n        },\n        nick: {\n          type: 'string'\n        },\n        premium_since: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'deaf',\n        'flags',\n        'joined_at',\n        'mute',\n        'pending',\n        'roles',\n        'user'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    },\n    thread: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        member_count: {\n          type: 'integer'\n        },\n        message_count: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        owner_id: {\n          type: 'string'\n        },\n        total_message_sent: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - A direct message between users\\n- `3` - A direct message between multiple users\\n- `0` - A text channel within a server\\n- `2` - A voice channel within a server\\n- `4` - An organizational category that contains up to 50 channels\\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\\n- `13` - A voice channel for hosting events with an audience\\n- `14` - The channel in a hub containing the listed servers\\n- `15` - Channel that can only contain threads',\n          enum: [            1,\n            3,\n            0,\n            2,\n            4,\n            5,\n            10,\n            11,\n            12,\n            13,\n            14,\n            15\n          ]\n        },\n        applied_tags: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        bitrate: {\n          type: 'integer'\n        },\n        last_message_id: {\n          type: 'string'\n        },\n        last_pin_timestamp: {\n          type: 'string',\n          format: 'date-time'\n        },\n        member: {\n          $ref: '#/$defs/thread_member_response'\n        },\n        parent_id: {\n          type: 'string'\n        },\n        permissions: {\n          type: 'string'\n        },\n        rate_limit_per_user: {\n          type: 'integer'\n        },\n        rtc_region: {\n          type: 'string'\n        },\n        thread_metadata: {\n          type: 'object',\n          properties: {\n            archived: {\n              type: 'boolean'\n            },\n            auto_archive_duration: {\n              type: 'string',\n              description: '- `60` - One hour\\n- `1440` - One day\\n- `4320` - Three days\\n- `10080` - Seven days',\n              enum: [                60,\n                1440,\n                4320,\n                10080\n              ]\n            },\n            locked: {\n              type: 'boolean'\n            },\n            archive_timestamp: {\n              type: 'string',\n              format: 'date-time'\n            },\n            create_timestamp: {\n              type: 'string',\n              format: 'date-time'\n            },\n            invitable: {\n              type: 'boolean'\n            }\n          },\n          required: [            'archived',\n            'auto_archive_duration',\n            'locked'\n          ]\n        },\n        user_limit: {\n          type: 'integer'\n        },\n        video_quality_mode: {\n          type: 'string',\n          description: '- `1` - Discord chooses the quality for optimal performance\\n- `2` - 720p',\n          enum: [            1,\n            2\n          ]\n        }\n      },\n      required: [        'id',\n        'flags',\n        'guild_id',\n        'member_count',\n        'message_count',\n        'name',\n        'owner_id',\n        'total_message_sent',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      before: {
        type: 'string',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['channel_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.channels.threads.archived.private.list(channel_id, body)),
  );
};

export default { metadata, tool, handler };

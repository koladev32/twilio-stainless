// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.scheduled_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}',
  operationId: 'get_guild_scheduled_event',
};

export const tool: Tool = {
  name: 'retrieve_guilds_scheduled_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      $ref: '#/$defs/external_scheduled_event'\n    },\n    {\n      $ref: '#/$defs/stage_scheduled_event'\n    },\n    {\n      $ref: '#/$defs/voice_scheduled_event'\n    }\n  ],\n  $defs: {\n    external_scheduled_event: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        entity_metadata: {\n          type: 'object',\n          properties: {\n            location: {\n              type: 'string'\n            }\n          },\n          required: [            'location'\n          ]\n        },\n        entity_type: {\n          type: 'string',\n          enum: [            0,\n            1,\n            2,\n            3\n          ]\n        },\n        guild_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        privacy_level: {\n          type: 'string',\n          title: 'GUILD_ONLY',\n          description: 'the scheduled event is only accessible to guild members',\n          enum: [            2\n          ]\n        },\n        scheduled_start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        channel_id: {\n          type: 'string'\n        },\n        creator: {\n          $ref: '#/$defs/user'\n        },\n        creator_id: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        entity_id: {\n          type: 'string'\n        },\n        image: {\n          type: 'string'\n        },\n        scheduled_end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_count: {\n          type: 'integer'\n        },\n        user_rsvp: {\n          $ref: '#/$defs/scheduled_event_user_response'\n        }\n      },\n      required: [        'id',\n        'entity_metadata',\n        'entity_type',\n        'guild_id',\n        'name',\n        'privacy_level',\n        'scheduled_start_time',\n        'status'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    },\n    scheduled_event_user_response: {\n      type: 'object',\n      properties: {\n        guild_scheduled_event_id: {\n          type: 'string'\n        },\n        user_id: {\n          type: 'string'\n        },\n        member: {\n          $ref: '#/$defs/guild_member_response'\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'guild_scheduled_event_id',\n        'user_id'\n      ]\n    },\n    guild_member_response: {\n      type: 'object',\n      properties: {\n        deaf: {\n          type: 'boolean'\n        },\n        flags: {\n          type: 'integer'\n        },\n        joined_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        mute: {\n          type: 'boolean'\n        },\n        pending: {\n          type: 'boolean'\n        },\n        roles: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        user: {\n          $ref: '#/$defs/user'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        communication_disabled_until: {\n          type: 'string',\n          format: 'date-time'\n        },\n        nick: {\n          type: 'string'\n        },\n        premium_since: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'deaf',\n        'flags',\n        'joined_at',\n        'mute',\n        'pending',\n        'roles',\n        'user'\n      ]\n    },\n    stage_scheduled_event: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        entity_type: {\n          type: 'string',\n          enum: [            0,\n            1,\n            2,\n            3\n          ]\n        },\n        guild_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        privacy_level: {\n          type: 'string',\n          title: 'GUILD_ONLY',\n          description: 'the scheduled event is only accessible to guild members',\n          enum: [            2\n          ]\n        },\n        scheduled_start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        channel_id: {\n          type: 'string'\n        },\n        creator: {\n          $ref: '#/$defs/user'\n        },\n        creator_id: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        entity_id: {\n          type: 'string'\n        },\n        entity_metadata: {\n          type: 'object',\n          additionalProperties: true\n        },\n        image: {\n          type: 'string'\n        },\n        scheduled_end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_count: {\n          type: 'integer'\n        },\n        user_rsvp: {\n          $ref: '#/$defs/scheduled_event_user_response'\n        }\n      },\n      required: [        'id',\n        'entity_type',\n        'guild_id',\n        'name',\n        'privacy_level',\n        'scheduled_start_time',\n        'status'\n      ]\n    },\n    voice_scheduled_event: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        entity_type: {\n          type: 'string',\n          enum: [            0,\n            1,\n            2,\n            3\n          ]\n        },\n        guild_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        privacy_level: {\n          type: 'string',\n          title: 'GUILD_ONLY',\n          description: 'the scheduled event is only accessible to guild members',\n          enum: [            2\n          ]\n        },\n        scheduled_start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        channel_id: {\n          type: 'string'\n        },\n        creator: {\n          $ref: '#/$defs/user'\n        },\n        creator_id: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        entity_id: {\n          type: 'string'\n        },\n        entity_metadata: {\n          type: 'object',\n          additionalProperties: true\n        },\n        image: {\n          type: 'string'\n        },\n        scheduled_end_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_count: {\n          type: 'integer'\n        },\n        user_rsvp: {\n          $ref: '#/$defs/scheduled_event_user_response'\n        }\n      },\n      required: [        'id',\n        'entity_type',\n        'guild_id',\n        'name',\n        'privacy_level',\n        'scheduled_start_time',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      guild_scheduled_event_id: {
        type: 'string',
      },
      with_user_count: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id', 'guild_scheduled_event_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, guild_scheduled_event_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.guilds.scheduledEvents.retrieve(guild_id, guild_scheduled_event_id, body),
    ),
  );
};

export default { metadata, tool, handler };

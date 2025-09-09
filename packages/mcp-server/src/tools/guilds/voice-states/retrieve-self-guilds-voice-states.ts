// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.voice_states',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/voice-states/@me',
  operationId: 'get_self_voice_state',
};

export const tool: Tool = {
  name: 'retrieve_self_guilds_voice_states',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/voice_state_response',\n  $defs: {\n    voice_state_response: {\n      type: 'object',\n      properties: {\n        deaf: {\n          type: 'boolean'\n        },\n        mute: {\n          type: 'boolean'\n        },\n        self_deaf: {\n          type: 'boolean'\n        },\n        self_mute: {\n          type: 'boolean'\n        },\n        self_video: {\n          type: 'boolean'\n        },\n        session_id: {\n          type: 'string'\n        },\n        suppress: {\n          type: 'boolean'\n        },\n        user_id: {\n          type: 'string'\n        },\n        channel_id: {\n          type: 'string'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        member: {\n          $ref: '#/$defs/guild_member_response'\n        },\n        request_to_speak_timestamp: {\n          type: 'string',\n          format: 'date-time'\n        },\n        self_stream: {\n          type: 'boolean'\n        }\n      },\n      required: [        'deaf',\n        'mute',\n        'self_deaf',\n        'self_mute',\n        'self_video',\n        'session_id',\n        'suppress',\n        'user_id'\n      ]\n    },\n    guild_member_response: {\n      type: 'object',\n      properties: {\n        deaf: {\n          type: 'boolean'\n        },\n        flags: {\n          type: 'integer'\n        },\n        joined_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        mute: {\n          type: 'boolean'\n        },\n        pending: {\n          type: 'boolean'\n        },\n        roles: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        user: {\n          $ref: '#/$defs/user'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        communication_disabled_until: {\n          type: 'string',\n          format: 'date-time'\n        },\n        nick: {\n          type: 'string'\n        },\n        premium_since: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'deaf',\n        'flags',\n        'joined_at',\n        'mute',\n        'pending',\n        'roles',\n        'user'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.guilds.voiceStates.retrieveSelf(guild_id)),
  );
};

export default { metadata, tool, handler };

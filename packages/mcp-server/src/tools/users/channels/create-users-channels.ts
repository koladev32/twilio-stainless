// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'users.channels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users/@me/channels',
  operationId: 'create_dm',
};

export const tool: Tool = {
  name: 'create_users_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      $ref: '#/$defs/private_channel_response'\n    },\n    {\n      $ref: '#/$defs/private_group_channel_response'\n    }\n  ],\n  $defs: {\n    private_channel_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        recipients: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user'\n          }\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - A direct message between users\\n- `3` - A direct message between multiple users\\n- `0` - A text channel within a server\\n- `2` - A voice channel within a server\\n- `4` - An organizational category that contains up to 50 channels\\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\\n- `13` - A voice channel for hosting events with an audience\\n- `14` - The channel in a hub containing the listed servers\\n- `15` - Channel that can only contain threads',\n          enum: [            1,\n            3,\n            0,\n            2,\n            4,\n            5,\n            10,\n            11,\n            12,\n            13,\n            14,\n            15\n          ]\n        },\n        last_message_id: {\n          type: 'string'\n        },\n        last_pin_timestamp: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'flags',\n        'recipients',\n        'type'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    },\n    private_group_channel_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        recipients: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user'\n          }\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - A direct message between users\\n- `3` - A direct message between multiple users\\n- `0` - A text channel within a server\\n- `2` - A voice channel within a server\\n- `4` - An organizational category that contains up to 50 channels\\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\\n- `13` - A voice channel for hosting events with an audience\\n- `14` - The channel in a hub containing the listed servers\\n- `15` - Channel that can only contain threads',\n          enum: [            1,\n            3,\n            0,\n            2,\n            4,\n            5,\n            10,\n            11,\n            12,\n            13,\n            14,\n            15\n          ]\n        },\n        application_id: {\n          type: 'string'\n        },\n        icon: {\n          type: 'string'\n        },\n        last_message_id: {\n          type: 'string'\n        },\n        last_pin_timestamp: {\n          type: 'string',\n          format: 'date-time'\n        },\n        managed: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        owner_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'flags',\n        'recipients',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      access_tokens: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      nicks: {
        type: 'object',
        additionalProperties: true,
      },
      recipient_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.channels.create(body)));
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/webhooks',
  operationId: 'get_guild_webhooks',
};

export const tool: Tool = {
  name: 'list_guilds_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    anyOf: [      {\n        $ref: '#/$defs/application_incoming_webhook'\n      },\n      {\n        $ref: '#/$defs/channel_follower_webhook'\n      },\n      {\n        $ref: '#/$defs/guild_incoming_webhook'\n      }\n    ]\n  },\n  $defs: {\n    application_incoming_webhook: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - Incoming Webhooks can post messages to channels with a generated token\\n- `2` - Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels\\n- `3` - Application webhooks are webhooks used with Interactions',\n          enum: [            1,\n            2,\n            3\n          ]\n        },\n        application_id: {\n          type: 'string'\n        },\n        avatar: {\n          type: 'string'\n        },\n        channel_id: {\n          type: 'string'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'type'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    },\n    channel_follower_webhook: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - Incoming Webhooks can post messages to channels with a generated token\\n- `2` - Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels\\n- `3` - Application webhooks are webhooks used with Interactions',\n          enum: [            1,\n            2,\n            3\n          ]\n        },\n        application_id: {\n          type: 'string'\n        },\n        avatar: {\n          type: 'string'\n        },\n        channel_id: {\n          type: 'string'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        source_channel: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        source_guild: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            icon: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'type'\n      ]\n    },\n    guild_incoming_webhook: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - Incoming Webhooks can post messages to channels with a generated token\\n- `2` - Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels\\n- `3` - Application webhooks are webhooks used with Interactions',\n          enum: [            1,\n            2,\n            3\n          ]\n        },\n        token: {\n          type: 'string'\n        },\n        application_id: {\n          type: 'string'\n        },\n        avatar: {\n          type: 'string'\n        },\n        channel_id: {\n          type: 'string'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'type'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.guilds.webhooks.list(guild_id)));
};

export default { metadata, tool, handler };

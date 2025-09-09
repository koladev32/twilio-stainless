// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'users.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/@me/connections',
  operationId: 'list_my_connections',
};

export const tool: Tool = {
  name: 'list_users_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/connected_account_response'\n  },\n  $defs: {\n    connected_account_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        friend_sync: {\n          type: 'boolean'\n        },\n        show_activity: {\n          type: 'boolean'\n        },\n        two_way_link: {\n          type: 'boolean'\n        },\n        type: {\n          type: 'string',\n          enum: [            'battlenet',\n            'bluesky',\n            'bungie',\n            'ebay',\n            'epicgames',\n            'facebook',\n            'github',\n            'instagram',\n            'mastodon',\n            'leagueoflegends',\n            'paypal',\n            'playstation',\n            'reddit',\n            'riotgames',\n            'roblox',\n            'skype',\n            'spotify',\n            'steam',\n            'tiktok',\n            'twitch',\n            'twitter',\n            'xbox',\n            'youtube',\n            'domain'\n          ]\n        },\n        verified: {\n          type: 'boolean'\n        },\n        visibility: {\n          type: 'string',\n          enum: [            0,\n            1\n          ]\n        },\n        integrations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              account: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id'\n                ]\n              },\n              guild: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  icon: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              },\n              type: {\n                type: 'string',\n                enum: [                  'discord',\n                  'twitch',\n                  'youtube',\n                  'guild_subscription'\n                ]\n              }\n            },\n            required: [              'id',\n              'account',\n              'guild',\n              'type'\n            ]\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        revoked: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'friend_sync',\n        'show_activity',\n        'two_way_link',\n        'type',\n        'verified',\n        'visibility'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.connections.list()));
};

export default { metadata, tool, handler };

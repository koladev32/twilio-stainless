// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.roles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/roles/{role_id}',
  operationId: 'get_guild_role',
};

export const tool: Tool = {
  name: 'retrieve_guilds_roles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_role',\n  $defs: {\n    guild_role: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        color: {\n          type: 'integer'\n        },\n        hoist: {\n          type: 'boolean'\n        },\n        managed: {\n          type: 'boolean'\n        },\n        mentionable: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        permissions: {\n          type: 'string'\n        },\n        position: {\n          type: 'integer'\n        },\n        description: {\n          type: 'string'\n        },\n        icon: {\n          type: 'string'\n        },\n        tags: {\n          type: 'object',\n          properties: {\n            available_for_purchase: {\n              type: 'null'\n            },\n            bot_id: {\n              type: 'string'\n            },\n            guild_connections: {\n              type: 'null'\n            },\n            integration_id: {\n              type: 'string'\n            },\n            premium_subscriber: {\n              type: 'null'\n            },\n            subscription_listing_id: {\n              type: 'string'\n            }\n          }\n        },\n        unicode_emoji: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'color',\n        'hoist',\n        'managed',\n        'mentionable',\n        'name',\n        'permissions',\n        'position'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      role_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id', 'role_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, role_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.guilds.roles.retrieve(guild_id, role_id)),
  );
};

export default { metadata, tool, handler };

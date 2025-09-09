// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.new_member_welcome',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/new-member-welcome',
  operationId: 'get_guild_new_member_welcome',
};

export const tool: Tool = {
  name: 'retrieve_guilds_new_member_welcome',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_home_settings',\n  $defs: {\n    guild_home_settings: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        new_member_actions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action_type: {\n                type: 'string',\n                enum: [                  0,\n                  1\n                ]\n              },\n              channel_id: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              },\n              emoji: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  animated: {\n                    type: 'boolean'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                }\n              },\n              icon: {\n                type: 'string'\n              }\n            },\n            required: [              'action_type',\n              'channel_id',\n              'description',\n              'title'\n            ]\n          }\n        },\n        resource_channels: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              channel_id: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              },\n              emoji: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  animated: {\n                    type: 'boolean'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                }\n              },\n              icon: {\n                type: 'string'\n              }\n            },\n            required: [              'channel_id',\n              'description',\n              'title'\n            ]\n          }\n        },\n        welcome_message: {\n          type: 'object',\n          properties: {\n            author_ids: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            message: {\n              type: 'string'\n            }\n          },\n          required: [            'author_ids',\n            'message'\n          ]\n        }\n      },\n      required: [        'enabled',\n        'guild_id'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(jq_filter, await client.guilds.newMemberWelcome.retrieve(guild_id)),
  );
};

export default { metadata, tool, handler };

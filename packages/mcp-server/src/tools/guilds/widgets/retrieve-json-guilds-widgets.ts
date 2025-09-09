// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.widgets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/widget.json',
  operationId: 'get_guild_widget',
};

export const tool: Tool = {
  name: 'retrieve_json_guilds_widgets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/widget',\n  $defs: {\n    widget: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        channels: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              position: {\n                type: 'integer'\n              }\n            },\n            required: [              'id',\n              'name',\n              'position'\n            ]\n          }\n        },\n        members: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              avatar_url: {\n                type: 'string'\n              },\n              discriminator: {\n                type: 'string',\n                title: 'ZEROES',\n                enum: [                  '0000'\n                ]\n              },\n              status: {\n                type: 'string'\n              },\n              username: {\n                type: 'string'\n              },\n              activity: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'name'\n                ]\n              },\n              avatar: {\n                type: 'null'\n              },\n              channel_id: {\n                type: 'string'\n              },\n              deaf: {\n                type: 'boolean'\n              },\n              mute: {\n                type: 'boolean'\n              },\n              self_deaf: {\n                type: 'boolean'\n              },\n              self_mute: {\n                type: 'boolean'\n              },\n              suppress: {\n                type: 'boolean'\n              }\n            },\n            required: [              'id',\n              'avatar_url',\n              'discriminator',\n              'status',\n              'username'\n            ]\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        presence_count: {\n          type: 'integer'\n        },\n        instant_invite: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'channels',\n        'members',\n        'name',\n        'presence_count'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(jq_filter, await client.guilds.widgets.retrieveJson(guild_id)),
  );
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.welcome_screen',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/welcome-screen',
  operationId: 'get_guild_welcome_screen',
};

export const tool: Tool = {
  name: 'retrieve_guilds_welcome_screen',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_welcome_screen',\n  $defs: {\n    guild_welcome_screen: {\n      type: 'object',\n      properties: {\n        welcome_channels: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              channel_id: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              emoji_id: {\n                type: 'string'\n              },\n              emoji_name: {\n                type: 'string'\n              }\n            },\n            required: [              'channel_id',\n              'description'\n            ]\n          }\n        },\n        description: {\n          type: 'string'\n        }\n      },\n      required: [        'welcome_channels'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(jq_filter, await client.guilds.welcomeScreen.retrieve(guild_id)),
  );
};

export default { metadata, tool, handler };

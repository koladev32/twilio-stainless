// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.prune',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/prune',
  operationId: 'preview_prune_guild',
};

export const tool: Tool = {
  name: 'retrieve_guilds_prune',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_prune',\n  $defs: {\n    guild_prune: {\n      type: 'object',\n      properties: {\n        pruned: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      days: {
        type: 'integer',
      },
      include_roles: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
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
    await maybeFilter(jq_filter, await client.guilds.prune.retrieve(guild_id, body)),
  );
};

export default { metadata, tool, handler };

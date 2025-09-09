// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.widget',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/widget',
  operationId: 'get_guild_widget_settings',
};

export const tool: Tool = {
  name: 'retrieve_guilds_widget',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/widget_settings',\n  $defs: {\n    widget_settings: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean'\n        },\n        channel_id: {\n          type: 'string'\n        }\n      },\n      required: [        'enabled'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.guilds.widget.retrieve(guild_id)));
};

export default { metadata, tool, handler };

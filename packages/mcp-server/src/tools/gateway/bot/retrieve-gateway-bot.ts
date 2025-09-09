// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'gateway.bot',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/gateway/bot',
  operationId: 'get_bot_gateway',
};

export const tool: Tool = {
  name: 'retrieve_gateway_bot',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/gateway_bot_response',\n  $defs: {\n    gateway_bot_response: {\n      type: 'object',\n      properties: {\n        session_start_limit: {\n          type: 'object',\n          properties: {\n            max_concurrency: {\n              type: 'integer'\n            },\n            remaining: {\n              type: 'integer'\n            },\n            reset_after: {\n              type: 'integer'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'max_concurrency',\n            'remaining',\n            'reset_after',\n            'total'\n          ]\n        },\n        shards: {\n          type: 'integer'\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: [        'session_start_limit',\n        'shards',\n        'url'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.gateway.bot.retrieve()));
};

export default { metadata, tool, handler };

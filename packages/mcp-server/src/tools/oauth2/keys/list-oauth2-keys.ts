// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'oauth2.keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth2/keys',
  operationId: 'get_public_keys',
};

export const tool: Tool = {
  name: 'list_oauth2_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth2_get_keys',\n  $defs: {\n    oauth2_get_keys: {\n      type: 'object',\n      properties: {\n        keys: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              alg: {\n                type: 'string'\n              },\n              e: {\n                type: 'string'\n              },\n              kid: {\n                type: 'string'\n              },\n              kty: {\n                type: 'string'\n              },\n              n: {\n                type: 'string'\n              },\n              use: {\n                type: 'string'\n              }\n            },\n            required: [              'alg',\n              'e',\n              'kid',\n              'kty',\n              'n',\n              'use'\n            ]\n          }\n        }\n      },\n      required: [        'keys'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.oauth2.keys.list()));
};

export default { metadata, tool, handler };

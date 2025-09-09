// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.role_connections_metadata',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/applications/{application_id}/role-connections/metadata',
  operationId: 'update_application_role_connections_metadata',
};

export const tool: Tool = {
  name: 'update_applications_role_connections_metadata',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/application_role_connections_metadata_item_response'\n  },\n  $defs: {\n    application_role_connections_metadata_item_response: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        key: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - the metadata value (integer) is less than or equal to the guild\\'s configured value (integer)\\n- `2` - the metadata value (integer) is greater than or equal to the guild\\'s configured value (integer)\\n- `3` - the metadata value (integer) is equal to the guild\\'s configured value (integer)\\n- `4` - the metadata value (integer) is not equal to the guild\\'s configured value (integer)\\n- `5` - the metadata value (ISO8601 string) is less than or equal to the guild\\'s configured value (integer; days before current date)\\n- `6` - the metadata value (ISO8601 string) is greater than or equal to the guild\\'s configured value (integer; days before current date)\\n- `7` - the metadata value (integer) is equal to the guild\\'s configured value (integer; 1)\\n- `8` - the metadata value (integer) is not equal to the guild\\'s configured value (integer; 1)',\n          enum: [            1,\n            2,\n            3,\n            4,\n            5,\n            6,\n            7,\n            8\n          ]\n        },\n        description_localizations: {\n          type: 'object',\n          additionalProperties: true\n        },\n        name_localizations: {\n          type: 'object',\n          additionalProperties: true\n        }\n      },\n      required: [        'description',\n        'key',\n        'name',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
            },
            key: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            type: {
              type: 'string',
              description:
                "- `1` - the metadata value (integer) is less than or equal to the guild's configured value (integer)\n- `2` - the metadata value (integer) is greater than or equal to the guild's configured value (integer)\n- `3` - the metadata value (integer) is equal to the guild's configured value (integer)\n- `4` - the metadata value (integer) is not equal to the guild's configured value (integer)\n- `5` - the metadata value (ISO8601 string) is less than or equal to the guild's configured value (integer; days before current date)\n- `6` - the metadata value (ISO8601 string) is greater than or equal to the guild's configured value (integer; days before current date)\n- `7` - the metadata value (integer) is equal to the guild's configured value (integer; 1)\n- `8` - the metadata value (integer) is not equal to the guild's configured value (integer; 1)",
              enum: [1, 2, 3, 4, 5, 6, 7, 8],
            },
            description_localizations: {
              type: 'object',
              additionalProperties: true,
            },
            name_localizations: {
              type: 'object',
              additionalProperties: true,
            },
          },
          required: ['description', 'key', 'name', 'type'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['application_id', 'body'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.applications.roleConnectionsMetadata.update(application_id, body['body']),
    ),
  );
};

export default { metadata, tool, handler };

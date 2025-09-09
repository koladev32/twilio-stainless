// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.entitlements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/applications/{application_id}/entitlements/{entitlement_id}',
  operationId: 'get_entitlement',
};

export const tool: Tool = {
  name: 'retrieve_applications_entitlements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entitlement_response',\n  $defs: {\n    entitlement_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        application_id: {\n          type: 'string'\n        },\n        deleted: {\n          type: 'boolean'\n        },\n        sku_id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            8,\n            10\n          ]\n        },\n        user_id: {\n          type: 'string'\n        },\n        consumed: {\n          type: 'boolean'\n        },\n        ends_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        fulfilled_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        fulfillment_status: {\n          type: 'string',\n          enum: [            0,\n            1,\n            2,\n            3,\n            4,\n            5,\n            6,\n            7\n          ]\n        },\n        guild_id: {\n          type: 'string'\n        },\n        starts_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'application_id',\n        'deleted',\n        'sku_id',\n        'type',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      entitlement_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['application_id', 'entitlement_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, entitlement_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.applications.entitlements.retrieve(application_id, entitlement_id),
    ),
  );
};

export default { metadata, tool, handler };

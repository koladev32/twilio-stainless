// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.activity_instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/applications/{application_id}/activity-instances/{instance_id}',
  operationId: 'applications_get_activity_instance',
};

export const tool: Tool = {
  name: 'retrieve_applications_activity_instances',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embedded_activity_instance',\n  $defs: {\n    embedded_activity_instance: {\n      type: 'object',\n      properties: {\n        application_id: {\n          type: 'string'\n        },\n        instance_id: {\n          type: 'string'\n        },\n        launch_id: {\n          type: 'string'\n        },\n        users: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        location: {\n          anyOf: [            {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                channel_id: {\n                  type: 'string'\n                },\n                guild_id: {\n                  type: 'string'\n                },\n                kind: {\n                  type: 'string',\n                  description: '- `gc` - guild channel\\n- `pc` - private channel',\n                  enum: [                    'gc',\n                    'pc'\n                  ]\n                }\n              },\n              required: [                'id',\n                'channel_id',\n                'guild_id',\n                'kind'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                channel_id: {\n                  type: 'string'\n                },\n                kind: {\n                  type: 'string',\n                  description: '- `gc` - guild channel\\n- `pc` - private channel',\n                  enum: [                    'gc',\n                    'pc'\n                  ]\n                }\n              },\n              required: [                'id',\n                'channel_id',\n                'kind'\n              ]\n            }\n          ]\n        }\n      },\n      required: [        'application_id',\n        'instance_id',\n        'launch_id',\n        'users'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      instance_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['application_id', 'instance_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, instance_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.applications.activityInstances.retrieve(application_id, instance_id),
    ),
  );
};

export default { metadata, tool, handler };

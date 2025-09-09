// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'stage_instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stage-instances/{channel_id}',
  operationId: 'get_stage_instance',
};

export const tool: Tool = {
  name: 'retrieve_stage_instances',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/stage_instance_response',\n  $defs: {\n    stage_instance_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        channel_id: {\n          type: 'string'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        privacy_level: {\n          type: 'string',\n          description: '- `1` - The Stage instance is visible publicly. (deprecated)\\n- `2` - The Stage instance is visible publicly. (deprecated)',\n          enum: [            1,\n            2\n          ]\n        },\n        topic: {\n          type: 'string'\n        },\n        discoverable_disabled: {\n          type: 'boolean'\n        },\n        guild_scheduled_event_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'channel_id',\n        'guild_id',\n        'privacy_level',\n        'topic'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['channel_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.stageInstances.retrieve(channel_id)));
};

export default { metadata, tool, handler };

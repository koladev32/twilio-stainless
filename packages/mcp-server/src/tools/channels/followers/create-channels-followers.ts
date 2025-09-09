// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.followers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/followers',
  operationId: 'follow_channel',
};

export const tool: Tool = {
  name: 'create_channels_followers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/channel_follower_response',\n  $defs: {\n    channel_follower_response: {\n      type: 'object',\n      properties: {\n        channel_id: {\n          type: 'string'\n        },\n        webhook_id: {\n          type: 'string'\n        }\n      },\n      required: [        'channel_id',\n        'webhook_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      webhook_channel_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['channel_id', 'webhook_channel_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.channels.followers.create(channel_id, body)),
  );
};

export default { metadata, tool, handler };

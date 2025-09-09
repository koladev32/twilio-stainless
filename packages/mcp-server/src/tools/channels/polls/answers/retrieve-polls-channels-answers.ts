// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.polls.answers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/channels/{channel_id}/polls/{message_id}/answers/{answer_id}',
  operationId: 'get_answer_voters',
};

export const tool: Tool = {
  name: 'retrieve_polls_channels_answers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/poll_answer_details_response',\n  $defs: {\n    poll_answer_details_response: {\n      type: 'object',\n      properties: {\n        users: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user'\n          }\n        }\n      }\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      message_id: {
        type: 'string',
      },
      answer_id: {
        type: 'integer',
      },
      after: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['channel_id', 'message_id', 'answer_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, message_id, answer_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.channels.polls.answers.retrieve(channel_id, message_id, answer_id, body),
    ),
  );
};

export default { metadata, tool, handler };

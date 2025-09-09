// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'webhooks.slack',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/webhooks/{webhook_id}/{webhook_token}/slack',
  operationId: 'execute_slack_compatible_webhook',
};

export const tool: Tool = {
  name: 'create_webhooks_slack',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      webhook_id: {
        type: 'string',
      },
      webhook_token: {
        type: 'string',
      },
      thread_id: {
        type: 'string',
      },
      wait: {
        type: 'boolean',
      },
      attachments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            author_icon: {
              type: 'string',
            },
            author_link: {
              type: 'string',
            },
            author_name: {
              type: 'string',
            },
            color: {
              type: 'string',
            },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  inline: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'string',
                  },
                  value: {
                    type: 'string',
                  },
                },
              },
            },
            footer: {
              type: 'string',
            },
            footer_icon: {
              type: 'string',
            },
            image_url: {
              type: 'string',
            },
            pretext: {
              type: 'string',
            },
            text: {
              type: 'string',
            },
            thumb_url: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            title_link: {
              type: 'string',
            },
            ts: {
              type: 'integer',
            },
          },
        },
      },
      icon_url: {
        type: 'string',
      },
      text: {
        type: 'string',
      },
      username: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['webhook_id', 'webhook_token'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { webhook_id, webhook_token, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.webhooks.slack.create(webhook_id, webhook_token, body)),
  );
};

export default { metadata, tool, handler };

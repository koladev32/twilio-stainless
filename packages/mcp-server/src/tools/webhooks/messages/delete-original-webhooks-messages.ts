// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'webhooks.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/webhooks/{webhook_id}/{webhook_token}/messages/@original',
  operationId: 'delete_original_webhook_message',
};

export const tool: Tool = {
  name: 'delete_original_webhooks_messages',
  description: '',
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
    },
    required: ['webhook_id', 'webhook_token'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { webhook_id, webhook_token, ...body } = args as any;
  const response = await client.webhooks.messages
    .deleteOriginal(webhook_id, webhook_token, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

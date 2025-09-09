// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'webhooks.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}',
  operationId: 'get_webhook_message',
};

export const tool: Tool = {
  name: 'retrieve_webhooks_messages',
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
      message_id: {
        type: 'string',
      },
      thread_id: {
        type: 'string',
      },
    },
    required: ['webhook_id', 'webhook_token', 'message_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { webhook_id, webhook_token, message_id, ...body } = args as any;
  return asTextContentResult(
    await client.webhooks.messages.retrieve(webhook_id, webhook_token, message_id, body),
  );
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.emojis',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/applications/{application_id}/emojis/{emoji_id}',
  operationId: 'delete_application_emoji',
};

export const tool: Tool = {
  name: 'delete_applications_emojis',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      emoji_id: {
        type: 'string',
      },
    },
    required: ['application_id', 'emoji_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, emoji_id, ...body } = args as any;
  const response = await client.applications.emojis.delete(application_id, emoji_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

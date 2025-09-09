// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.permissions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/channels/{channel_id}/permissions/{overwrite_id}',
  operationId: 'set_channel_permission_overwrite',
};

export const tool: Tool = {
  name: 'update_channels_permissions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
      },
      overwrite_id: {
        type: 'string',
      },
      allow: {
        type: 'integer',
      },
      deny: {
        type: 'integer',
      },
      type: {
        type: 'string',
        enum: [0, 1],
      },
    },
    required: ['channel_id', 'overwrite_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, overwrite_id, ...body } = args as any;
  const response = await client.channels.permissions.update(channel_id, overwrite_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'invites',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/invites/{code}',
  operationId: 'invite_revoke',
};

export const tool: Tool = {
  name: 'delete_invites',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
    },
    required: ['code'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { code, ...body } = args as any;
  return asTextContentResult(await client.invites.delete(code));
};

export default { metadata, tool, handler };

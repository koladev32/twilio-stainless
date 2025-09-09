// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'users.applications.role_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/users/@me/applications/{application_id}/role-connection',
  operationId: 'delete_application_user_role_connection',
};

export const tool: Tool = {
  name: 'remove_applications_users_role_connections',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
    },
    required: ['application_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, ...body } = args as any;
  const response = await client.users.applications.roleConnections.remove(application_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

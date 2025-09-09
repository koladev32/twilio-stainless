// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.members.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/members/{user_id}/roles/{role_id}',
  operationId: 'delete_guild_member_role',
};

export const tool: Tool = {
  name: 'delete_members_guilds_roles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
      role_id: {
        type: 'string',
      },
    },
    required: ['guild_id', 'user_id', 'role_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, user_id, role_id, ...body } = args as any;
  const response = await client.guilds.members.roles.delete(guild_id, user_id, role_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

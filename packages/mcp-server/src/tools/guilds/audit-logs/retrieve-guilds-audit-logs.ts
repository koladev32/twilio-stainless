// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.audit_logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/audit-logs',
  operationId: 'list_guild_audit_log_entries',
};

export const tool: Tool = {
  name: 'retrieve_guilds_audit_logs',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      action_type: {
        type: 'integer',
      },
      after: {
        type: 'string',
      },
      before: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      target_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
    },
    required: ['guild_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  return asTextContentResult(await client.guilds.auditLogs.retrieve(guild_id, body));
};

export default { metadata, tool, handler };

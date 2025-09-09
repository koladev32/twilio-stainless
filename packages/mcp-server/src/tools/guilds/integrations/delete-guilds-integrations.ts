// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/integrations/{integration_id}',
  operationId: 'delete_guild_integration',
};

export const tool: Tool = {
  name: 'delete_guilds_integrations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      integration_id: {
        type: 'string',
      },
    },
    required: ['guild_id', 'integration_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, integration_id, ...body } = args as any;
  const response = await client.guilds.integrations.delete(guild_id, integration_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

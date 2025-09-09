// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.auto_moderation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/guilds/{guild_id}/auto-moderation/rules/{rule_id}',
  operationId: 'delete_auto_moderation_rule',
};

export const tool: Tool = {
  name: 'delete_auto_moderation_guilds_rules',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
      },
    },
    required: ['guild_id', 'rule_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, rule_id, ...body } = args as any;
  const response = await client.guilds.autoModeration.rules.delete(guild_id, rule_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

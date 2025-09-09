// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.auto_moderation.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/auto-moderation/rules/{rule_id}',
  operationId: 'get_auto_moderation_rule',
};

export const tool: Tool = {
  name: 'retrieve_auto_moderation_guilds_rules',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, rule_id, ...body } = args as any;
  return asTextContentResult(await client.guilds.autoModeration.rules.retrieve(guild_id, rule_id));
};

export default { metadata, tool, handler };

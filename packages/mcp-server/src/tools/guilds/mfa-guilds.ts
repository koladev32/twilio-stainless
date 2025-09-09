// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/guilds/{guild_id}/mfa',
  operationId: 'set_guild_mfa_level',
};

export const tool: Tool = {
  name: 'mfa_guilds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_mfa_level',\n  $defs: {\n    guild_mfa_level: {\n      type: 'object',\n      properties: {\n        level: {\n          type: 'string',\n          description: '- `0` - Guild has no MFA/2FA requirement for moderation actions\\n- `1` - Guild has a 2FA requirement for moderation actions',\n          enum: [            0,\n            1\n          ]\n        }\n      },\n      required: [        'level'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      level: {
        type: 'string',
        description:
          '- `0` - Guild has no MFA/2FA requirement for moderation actions\n- `1` - Guild has a 2FA requirement for moderation actions',
        enum: [0, 1],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id', 'level'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.guilds.mfa(guild_id, body)));
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.guilds.commands.permissions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions',
  operationId: 'set_guild_application_command_permissions',
};

export const tool: Tool = {
  name: 'update_commands_guilds_applications_permissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/command_permissions_response',\n  $defs: {\n    command_permissions_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        application_id: {\n          type: 'string'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        permissions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              permission: {\n                type: 'boolean'\n              },\n              type: {\n                type: 'string',\n                description: '- `1` - This permission is for a role.\\n- `2` - This permission is for a user.\\n- `3` - This permission is for a channel.',\n                enum: [                  1,\n                  2,\n                  3\n                ]\n              }\n            },\n            required: [              'id',\n              'permission',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'application_id',\n        'guild_id',\n        'permissions'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      guild_id: {
        type: 'string',
      },
      command_id: {
        type: 'string',
      },
      permissions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            permission: {
              type: 'boolean',
            },
            type: {
              type: 'string',
              description:
                '- `1` - This permission is for a role.\n- `2` - This permission is for a user.\n- `3` - This permission is for a channel.',
              enum: [1, 2, 3],
            },
          },
          required: ['id', 'permission', 'type'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['application_id', 'guild_id', 'command_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, guild_id, command_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.applications.guilds.commands.permissions.update(
        application_id,
        guild_id,
        command_id,
        body,
      ),
    ),
  );
};

export default { metadata, tool, handler };

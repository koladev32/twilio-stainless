// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.stickers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/guilds/{guild_id}/stickers/{sticker_id}',
  operationId: 'update_guild_sticker',
};

export const tool: Tool = {
  name: 'update_guilds_stickers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_sticker',\n  $defs: {\n    guild_sticker: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        available: {\n          type: 'boolean'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        tags: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - an official sticker in a pack, part of Nitro or in a removed purchasable pack\\n- `2` - a sticker uploaded to a guild for the guild\\'s members',\n          enum: [            1,\n            2\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        format_type: {\n          type: 'string',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'id',\n        'available',\n        'guild_id',\n        'name',\n        'tags',\n        'type'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      sticker_id: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      tags: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id', 'sticker_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, sticker_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.guilds.stickers.update(guild_id, sticker_id, body)),
  );
};

export default { metadata, tool, handler };

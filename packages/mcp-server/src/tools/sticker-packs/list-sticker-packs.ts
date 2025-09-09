// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'sticker_packs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sticker-packs',
  operationId: 'list_sticker_packs',
};

export const tool: Tool = {
  name: 'list_sticker_packs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sticker_pack_collection_response',\n  $defs: {\n    sticker_pack_collection_response: {\n      type: 'object',\n      properties: {\n        sticker_packs: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/sticker_pack'\n          }\n        }\n      },\n      required: [        'sticker_packs'\n      ]\n    },\n    sticker_pack: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        sku_id: {\n          type: 'string'\n        },\n        stickers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/standard_sticker'\n          }\n        },\n        banner_asset_id: {\n          type: 'string'\n        },\n        cover_sticker_id: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name',\n        'sku_id',\n        'stickers'\n      ]\n    },\n    standard_sticker: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        pack_id: {\n          type: 'string'\n        },\n        sort_value: {\n          type: 'integer'\n        },\n        tags: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - an official sticker in a pack, part of Nitro or in a removed purchasable pack\\n- `2` - a sticker uploaded to a guild for the guild\\'s members',\n          enum: [            1,\n            2\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        format_type: {\n          type: 'string',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        }\n      },\n      required: [        'id',\n        'name',\n        'pack_id',\n        'sort_value',\n        'tags',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.stickerPacks.list()));
};

export default { metadata, tool, handler };

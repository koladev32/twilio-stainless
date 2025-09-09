// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/users/@me',
  operationId: 'update_my_user',
};

export const tool: Tool = {
  name: 'update_me_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_pii_response',\n  $defs: {\n    user_pii_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        locale: {\n          type: 'string',\n          description: '- `ar` - The ar locale\\n- `bg` - The bg locale\\n- `cs` - The cs locale\\n- `da` - The da locale\\n- `de` - The de locale\\n- `el` - The el locale\\n- `en-GB` - The en-GB locale\\n- `en-US` - The en-US locale\\n- `es-419` - The es-419 locale\\n- `es-ES` - The es-ES locale\\n- `fi` - The fi locale\\n- `fr` - The fr locale\\n- `he` - The he locale\\n- `hi` - The hi locale\\n- `hr` - The hr locale\\n- `hu` - The hu locale\\n- `id` - The id locale\\n- `it` - The it locale\\n- `ja` - The ja locale\\n- `ko` - The ko locale\\n- `lt` - The lt locale\\n- `nl` - The nl locale\\n- `no` - The no locale\\n- `pl` - The pl locale\\n- `pt-BR` - The pt-BR locale\\n- `ro` - The ro locale\\n- `ru` - The ru locale\\n- `sv-SE` - The sv-SE locale\\n- `th` - The th locale\\n- `tr` - The tr locale\\n- `uk` - The uk locale\\n- `vi` - The vi locale\\n- `zh-CN` - The zh-CN locale\\n- `zh-TW` - The zh-TW locale',\n          enum: [            'ar',\n            'bg',\n            'cs',\n            'da',\n            'de',\n            'el',\n            'en-GB',\n            'en-US',\n            'es-419',\n            'es-ES',\n            'fi',\n            'fr',\n            'he',\n            'hi',\n            'hr',\n            'hu',\n            'id',\n            'it',\n            'ja',\n            'ko',\n            'lt',\n            'nl',\n            'no',\n            'pl',\n            'pt-BR',\n            'ro',\n            'ru',\n            'sv-SE',\n            'th',\n            'tr',\n            'uk',\n            'vi',\n            'zh-CN',\n            'zh-TW'\n          ]\n        },\n        mfa_enabled: {\n          type: 'boolean'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        email: {\n          type: 'string'\n        },\n        global_name: {\n          type: 'string'\n        },\n        premium_type: {\n          type: 'string',\n          description: '- `0` - None\\n- `1` - Nitro Classic\\n- `2` - Nitro Standard\\n- `3` - Nitro Basic',\n          enum: [            0,\n            1,\n            2,\n            3\n          ]\n        },\n        system: {\n          type: 'boolean'\n        },\n        verified: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'locale',\n        'mfa_enabled',\n        'public_flags',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
      avatar: {
        type: 'string',
      },
      banner: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['username'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.updateMe(body)));
};

export default { metadata, tool, handler };

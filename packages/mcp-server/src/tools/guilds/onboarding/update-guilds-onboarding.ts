// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.onboarding',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/guilds/{guild_id}/onboarding',
  operationId: 'put_guilds_onboarding',
};

export const tool: Tool = {
  name: 'update_guilds_onboarding',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_onboarding',\n  $defs: {\n    guild_onboarding: {\n      type: 'object',\n      properties: {\n        default_channel_ids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        prompts: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              in_onboarding: {\n                type: 'boolean'\n              },\n              options: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    channel_ids: {\n                      type: 'array',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    description: {\n                      type: 'string'\n                    },\n                    emoji: {\n                      type: 'object',\n                      properties: {\n                        id: {\n                          type: 'string'\n                        },\n                        animated: {\n                          type: 'boolean'\n                        },\n                        name: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    role_ids: {\n                      type: 'array',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    title: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'id',\n                    'channel_ids',\n                    'description',\n                    'emoji',\n                    'role_ids',\n                    'title'\n                  ]\n                }\n              },\n              required: {\n                type: 'boolean'\n              },\n              single_select: {\n                type: 'boolean'\n              },\n              title: {\n                type: 'string'\n              },\n              type: {\n                type: 'string',\n                description: '- `0` - Multiple choice options\\n- `1` - Many options shown as a dropdown',\n                enum: [                  0,\n                  1\n                ]\n              }\n            },\n            required: [              'id',\n              'in_onboarding',\n              'options',\n              'required',\n              'single_select',\n              'title',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'default_channel_ids',\n        'enabled',\n        'guild_id',\n        'prompts'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      default_channel_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      enabled: {
        type: 'boolean',
      },
      mode: {
        type: 'string',
        description:
          '- `0` - Only Default Channels considered in constraints\n- `1` - Default Channels and Onboarding Prompts considered in constraints',
        enum: [0, 1],
      },
      prompts: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            options: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                  },
                  id: {
                    type: 'string',
                  },
                  channel_ids: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  description: {
                    type: 'string',
                  },
                  emoji_animated: {
                    type: 'boolean',
                  },
                  emoji_id: {
                    type: 'string',
                  },
                  emoji_name: {
                    type: 'string',
                  },
                  role_ids: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
                required: ['title'],
              },
            },
            title: {
              type: 'string',
            },
            in_onboarding: {
              type: 'boolean',
            },
            required: {
              type: 'boolean',
            },
            single_select: {
              type: 'boolean',
            },
            type: {
              type: 'string',
              description: '- `0` - Multiple choice options\n- `1` - Many options shown as a dropdown',
              enum: [0, 1],
            },
          },
          required: ['id', 'options', 'title'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['guild_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.guilds.onboarding.update(guild_id, body)),
  );
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.auto_moderation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/guilds/{guild_id}/auto-moderation/rules',
  operationId: 'create_auto_moderation_rule',
};

export const tool: Tool = {
  name: 'create_auto_moderation_guilds_rules',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          event_type: {
            type: 'string',
            description:
              "- `1` - A user submitted a message to a channel\n- `2` - A user is attempting to join the server or a member's properties were updated.",
            enum: [1, 2],
          },
          name: {
            type: 'string',
          },
          trigger_metadata: {
            type: 'object',
            properties: {
              allow_list: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              presets: {
                type: 'array',
                items: {
                  type: 'string',
                  description:
                    '- `1` - Words and phrases that may be considered profanity\n- `2` - Words and phrases that may be considered as sexual content\n- `3` - Words and phrases that may be considered slurs and hate speech',
                  enum: [1, 2, 3],
                },
              },
            },
          },
          trigger_type: {
            type: 'string',
            description:
              '- `1` - Check if content contains words from a list of keywords or matches regex\n- `2` - DEPRECATED\n- `3` - Check if content represents generic spam\n- `4` - Check if content contains words from internal pre-defined wordsets\n- `5` - Check if content contains more unique mentions than allowed',
            enum: [1, 2, 3, 4, 5],
          },
          actions: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      properties: {
                        custom_message: {
                          type: 'string',
                        },
                      },
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        channel_id: {
                          type: 'string',
                        },
                      },
                      required: ['channel_id'],
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      additionalProperties: true,
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        duration_seconds: {
                          type: 'integer',
                        },
                      },
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
              ],
            },
          },
          enabled: {
            type: 'boolean',
          },
          exempt_channels: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          exempt_roles: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: ['guild_id', 'event_type', 'name', 'trigger_metadata', 'trigger_type'],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          event_type: {
            type: 'string',
            description:
              "- `1` - A user submitted a message to a channel\n- `2` - A user is attempting to join the server or a member's properties were updated.",
            enum: [1, 2],
          },
          name: {
            type: 'string',
          },
          trigger_type: {
            type: 'string',
            description:
              '- `1` - Check if content contains words from a list of keywords or matches regex\n- `2` - DEPRECATED\n- `3` - Check if content represents generic spam\n- `4` - Check if content contains words from internal pre-defined wordsets\n- `5` - Check if content contains more unique mentions than allowed',
            enum: [1, 2, 3, 4, 5],
          },
          actions: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      properties: {
                        custom_message: {
                          type: 'string',
                        },
                      },
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        channel_id: {
                          type: 'string',
                        },
                      },
                      required: ['channel_id'],
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      additionalProperties: true,
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        duration_seconds: {
                          type: 'integer',
                        },
                      },
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
              ],
            },
          },
          enabled: {
            type: 'boolean',
          },
          exempt_channels: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          exempt_roles: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          trigger_metadata: {
            type: 'object',
            properties: {
              allow_list: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              keyword_filter: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              regex_patterns: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
        required: ['guild_id', 'event_type', 'name', 'trigger_type'],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          event_type: {
            type: 'string',
            description:
              "- `1` - A user submitted a message to a channel\n- `2` - A user is attempting to join the server or a member's properties were updated.",
            enum: [1, 2],
          },
          name: {
            type: 'string',
          },
          trigger_type: {
            type: 'string',
            description:
              '- `1` - Check if content contains words from a list of keywords or matches regex\n- `2` - DEPRECATED\n- `3` - Check if content represents generic spam\n- `4` - Check if content contains words from internal pre-defined wordsets\n- `5` - Check if content contains more unique mentions than allowed',
            enum: [1, 2, 3, 4, 5],
          },
          actions: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      properties: {
                        custom_message: {
                          type: 'string',
                        },
                      },
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        channel_id: {
                          type: 'string',
                        },
                      },
                      required: ['channel_id'],
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      additionalProperties: true,
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        duration_seconds: {
                          type: 'integer',
                        },
                      },
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
              ],
            },
          },
          enabled: {
            type: 'boolean',
          },
          exempt_channels: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          exempt_roles: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          trigger_metadata: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['guild_id', 'event_type', 'name', 'trigger_type'],
      },
      {
        type: 'object',
        properties: {
          guild_id: {
            type: 'string',
          },
          event_type: {
            type: 'string',
            description:
              "- `1` - A user submitted a message to a channel\n- `2` - A user is attempting to join the server or a member's properties were updated.",
            enum: [1, 2],
          },
          name: {
            type: 'string',
          },
          trigger_type: {
            type: 'string',
            description:
              '- `1` - Check if content contains words from a list of keywords or matches regex\n- `2` - DEPRECATED\n- `3` - Check if content represents generic spam\n- `4` - Check if content contains words from internal pre-defined wordsets\n- `5` - Check if content contains more unique mentions than allowed',
            enum: [1, 2, 3, 4, 5],
          },
          actions: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      properties: {
                        custom_message: {
                          type: 'string',
                        },
                      },
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        channel_id: {
                          type: 'string',
                        },
                      },
                      required: ['channel_id'],
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                    metadata: {
                      type: 'object',
                      additionalProperties: true,
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    metadata: {
                      type: 'object',
                      properties: {
                        duration_seconds: {
                          type: 'integer',
                        },
                      },
                    },
                    type: {
                      type: 'string',
                      description:
                        "- `1` - Block a user's message and prevent it from being posted. A custom explanation can be specified and shown to members whenever their message is blocked\n- `2` - Send a system message to a channel in order to log the user message that triggered the rule\n- `3` - Temporarily disable a user's ability to communicate in the server (timeout)\n- `4` - Prevent a user from interacting in the server",
                      enum: [1, 2, 3, 4],
                    },
                  },
                  required: ['metadata', 'type'],
                },
              ],
            },
          },
          enabled: {
            type: 'boolean',
          },
          exempt_channels: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          exempt_roles: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          trigger_metadata: {
            type: 'object',
            properties: {
              mention_total_limit: {
                type: 'integer',
              },
              mention_raid_protection_enabled: {
                type: 'boolean',
              },
            },
            required: ['mention_total_limit'],
          },
        },
        required: ['guild_id', 'event_type', 'name', 'trigger_type'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  return asTextContentResult(await client.guilds.autoModeration.rules.create(guild_id, body));
};

export default { metadata, tool, handler };

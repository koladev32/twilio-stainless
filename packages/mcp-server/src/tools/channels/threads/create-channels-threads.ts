// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'channels.threads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/channels/{channel_id}/threads',
  operationId: 'create_thread',
};

export const tool: Tool = {
  name: 'create_channels_threads',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          channel_id: {
            type: 'string',
          },
          message: {
            type: 'object',
            properties: {
              allowed_mentions: {
                type: 'object',
                properties: {
                  parse: {
                    type: 'array',
                    items: {
                      type: 'string',
                      description:
                        '- `users` - Controls role mentions\n- `roles` - Controls user mentions\n- `everyone` - Controls @everyone and @here mentions',
                      enum: ['users', 'roles', 'everyone'],
                    },
                  },
                  replied_user: {
                    type: 'boolean',
                  },
                  roles: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  users: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
              attachments: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                    },
                    description: {
                      type: 'string',
                    },
                    duration_secs: {
                      type: 'number',
                    },
                    filename: {
                      type: 'string',
                    },
                    is_remix: {
                      type: 'boolean',
                    },
                    title: {
                      type: 'string',
                    },
                    waveform: {
                      type: 'string',
                    },
                  },
                  required: ['id'],
                },
              },
              components: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    components: {
                      type: 'array',
                      items: {
                        anyOf: [
                          {
                            type: 'object',
                            properties: {
                              style: {
                                type: 'string',
                                enum: [1, 2, 3, 4, 5, 6],
                              },
                              type: {
                                type: 'string',
                                description:
                                  '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                                enum: [1, 2, 3, 4, 5, 6, 7, 8],
                              },
                              custom_id: {
                                type: 'string',
                              },
                              disabled: {
                                type: 'boolean',
                              },
                              emoji: {
                                type: 'object',
                                properties: {
                                  name: {
                                    type: 'string',
                                  },
                                  id: {
                                    type: 'string',
                                  },
                                },
                                required: ['name'],
                              },
                              label: {
                                type: 'string',
                              },
                              sku_id: {
                                type: 'string',
                              },
                              url: {
                                type: 'string',
                              },
                            },
                            required: ['style', 'type'],
                          },
                          {
                            type: 'object',
                            properties: {
                              custom_id: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                                description:
                                  '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                                enum: [1, 2, 3, 4, 5, 6, 7, 8],
                              },
                              channel_types: {
                                type: 'array',
                                items: {
                                  type: 'string',
                                  description:
                                    '- `1` - A direct message between users\n- `3` - A direct message between multiple users\n- `0` - A text channel within a server\n- `2` - A voice channel within a server\n- `4` - An organizational category that contains up to 50 channels\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\n- `13` - A voice channel for hosting events with an audience\n- `14` - The channel in a hub containing the listed servers\n- `15` - Channel that can only contain threads',
                                  enum: [1, 3, 0, 2, 4, 5, 10, 11, 12, 13, 14, 15],
                                },
                              },
                              default_values: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    id: {
                                      type: 'string',
                                    },
                                    type: {
                                      type: 'string',
                                      enum: ['user', 'role', 'channel'],
                                    },
                                  },
                                  required: ['id', 'type'],
                                },
                              },
                              disabled: {
                                type: 'boolean',
                              },
                              max_values: {
                                type: 'integer',
                              },
                              min_values: {
                                type: 'integer',
                              },
                              placeholder: {
                                type: 'string',
                              },
                            },
                            required: ['custom_id', 'type'],
                          },
                          {
                            type: 'object',
                            properties: {
                              custom_id: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                                description:
                                  '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                                enum: [1, 2, 3, 4, 5, 6, 7, 8],
                              },
                              default_values: {
                                type: 'array',
                                items: {
                                  anyOf: [
                                    {
                                      type: 'object',
                                      properties: {
                                        id: {
                                          type: 'string',
                                        },
                                        type: {
                                          type: 'string',
                                          enum: ['user', 'role', 'channel'],
                                        },
                                      },
                                      required: ['id', 'type'],
                                    },
                                    {
                                      type: 'object',
                                      properties: {
                                        id: {
                                          type: 'string',
                                        },
                                        type: {
                                          type: 'string',
                                          enum: ['user', 'role', 'channel'],
                                        },
                                      },
                                      required: ['id', 'type'],
                                    },
                                  ],
                                },
                              },
                              disabled: {
                                type: 'boolean',
                              },
                              max_values: {
                                type: 'integer',
                              },
                              min_values: {
                                type: 'integer',
                              },
                              placeholder: {
                                type: 'string',
                              },
                            },
                            required: ['custom_id', 'type'],
                          },
                          {
                            type: 'object',
                            properties: {
                              custom_id: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                                description:
                                  '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                                enum: [1, 2, 3, 4, 5, 6, 7, 8],
                              },
                              default_values: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    id: {
                                      type: 'string',
                                    },
                                    type: {
                                      type: 'string',
                                      enum: ['user', 'role', 'channel'],
                                    },
                                  },
                                  required: ['id', 'type'],
                                },
                              },
                              disabled: {
                                type: 'boolean',
                              },
                              max_values: {
                                type: 'integer',
                              },
                              min_values: {
                                type: 'integer',
                              },
                              placeholder: {
                                type: 'string',
                              },
                            },
                            required: ['custom_id', 'type'],
                          },
                          {
                            type: 'object',
                            properties: {
                              custom_id: {
                                type: 'string',
                              },
                              options: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    label: {
                                      type: 'string',
                                    },
                                    value: {
                                      type: 'string',
                                    },
                                    default: {
                                      type: 'boolean',
                                    },
                                    description: {
                                      type: 'string',
                                    },
                                    emoji: {
                                      type: 'object',
                                      properties: {
                                        name: {
                                          type: 'string',
                                        },
                                        id: {
                                          type: 'string',
                                        },
                                      },
                                      required: ['name'],
                                    },
                                  },
                                  required: ['label', 'value'],
                                },
                              },
                              type: {
                                type: 'string',
                                description:
                                  '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                                enum: [1, 2, 3, 4, 5, 6, 7, 8],
                              },
                              disabled: {
                                type: 'boolean',
                              },
                              max_values: {
                                type: 'integer',
                              },
                              min_values: {
                                type: 'integer',
                              },
                              placeholder: {
                                type: 'string',
                              },
                            },
                            required: ['custom_id', 'options', 'type'],
                          },
                          {
                            type: 'object',
                            properties: {
                              custom_id: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                                description:
                                  '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                                enum: [1, 2, 3, 4, 5, 6, 7, 8],
                              },
                              default_values: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    id: {
                                      type: 'string',
                                    },
                                    type: {
                                      type: 'string',
                                      enum: ['user', 'role', 'channel'],
                                    },
                                  },
                                  required: ['id', 'type'],
                                },
                              },
                              disabled: {
                                type: 'boolean',
                              },
                              max_values: {
                                type: 'integer',
                              },
                              min_values: {
                                type: 'integer',
                              },
                              placeholder: {
                                type: 'string',
                              },
                            },
                            required: ['custom_id', 'type'],
                          },
                        ],
                      },
                    },
                    type: {
                      type: 'string',
                      description:
                        '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                      enum: [1, 2, 3, 4, 5, 6, 7, 8],
                    },
                  },
                  required: ['components', 'type'],
                },
              },
              content: {
                type: 'string',
              },
              embeds: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    author: {
                      type: 'object',
                      properties: {
                        icon_url: {
                          type: 'string',
                        },
                        name: {
                          type: 'string',
                        },
                        url: {
                          type: 'string',
                        },
                      },
                    },
                    color: {
                      type: 'integer',
                    },
                    description: {
                      type: 'string',
                    },
                    fields: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                          },
                          value: {
                            type: 'string',
                          },
                          inline: {
                            type: 'boolean',
                          },
                        },
                        required: ['name', 'value'],
                      },
                    },
                    footer: {
                      type: 'object',
                      properties: {
                        icon_url: {
                          type: 'string',
                        },
                        text: {
                          type: 'string',
                        },
                      },
                    },
                    image: {
                      type: 'object',
                      properties: {
                        height: {
                          type: 'integer',
                        },
                        is_animated: {
                          type: 'boolean',
                        },
                        placeholder: {
                          type: 'string',
                        },
                        placeholder_version: {
                          type: 'integer',
                        },
                        url: {
                          type: 'string',
                        },
                        width: {
                          type: 'integer',
                        },
                      },
                    },
                    provider: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                        },
                        url: {
                          type: 'string',
                        },
                      },
                    },
                    thumbnail: {
                      type: 'object',
                      properties: {
                        height: {
                          type: 'integer',
                        },
                        is_animated: {
                          type: 'boolean',
                        },
                        placeholder: {
                          type: 'string',
                        },
                        placeholder_version: {
                          type: 'integer',
                        },
                        url: {
                          type: 'string',
                        },
                        width: {
                          type: 'integer',
                        },
                      },
                    },
                    timestamp: {
                      type: 'string',
                      format: 'date-time',
                    },
                    title: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                    url: {
                      type: 'string',
                    },
                    video: {
                      type: 'object',
                      properties: {
                        height: {
                          type: 'integer',
                        },
                        is_animated: {
                          type: 'boolean',
                        },
                        placeholder: {
                          type: 'string',
                        },
                        placeholder_version: {
                          type: 'integer',
                        },
                        url: {
                          type: 'string',
                        },
                        width: {
                          type: 'integer',
                        },
                      },
                    },
                  },
                },
              },
              flags: {
                type: 'integer',
              },
              poll: {
                type: 'object',
                properties: {
                  answers: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        poll_media: {
                          type: 'object',
                          properties: {
                            emoji: {
                              type: 'object',
                              properties: {
                                id: {
                                  type: 'string',
                                },
                                animated: {
                                  type: 'boolean',
                                },
                                name: {
                                  type: 'string',
                                },
                              },
                            },
                            text: {
                              type: 'string',
                            },
                          },
                        },
                      },
                      required: ['poll_media'],
                    },
                  },
                  question: {
                    type: 'object',
                    properties: {
                      emoji: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'string',
                          },
                          animated: {
                            type: 'boolean',
                          },
                          name: {
                            type: 'string',
                          },
                        },
                      },
                      text: {
                        type: 'string',
                      },
                    },
                  },
                  allow_multiselect: {
                    type: 'boolean',
                  },
                  duration: {
                    type: 'integer',
                  },
                  layout_type: {
                    type: 'integer',
                  },
                },
                required: ['answers', 'question'],
              },
              sticker_ids: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
          name: {
            type: 'string',
          },
          applied_tags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          auto_archive_duration: {
            type: 'string',
            description:
              '- `60` - One hour\n- `1440` - One day\n- `4320` - Three days\n- `10080` - Seven days',
            enum: [60, 1440, 4320, 10080],
          },
          rate_limit_per_user: {
            type: 'integer',
          },
        },
        required: ['channel_id', 'message', 'name'],
      },
      {
        type: 'object',
        properties: {
          channel_id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          auto_archive_duration: {
            type: 'string',
            description:
              '- `60` - One hour\n- `1440` - One day\n- `4320` - Three days\n- `10080` - Seven days',
            enum: [60, 1440, 4320, 10080],
          },
          invitable: {
            type: 'boolean',
          },
          rate_limit_per_user: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description:
              '- `1` - A direct message between users\n- `3` - A direct message between multiple users\n- `0` - A text channel within a server\n- `2` - A voice channel within a server\n- `4` - An organizational category that contains up to 50 channels\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\n- `13` - A voice channel for hosting events with an audience\n- `14` - The channel in a hub containing the listed servers\n- `15` - Channel that can only contain threads',
            enum: [1, 3, 0, 2, 4, 5, 10, 11, 12, 13, 14, 15],
          },
        },
        required: ['channel_id', 'name'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { channel_id, ...body } = args as any;
  return asTextContentResult(await client.channels.threads.create(channel_id, body));
};

export default { metadata, tool, handler };

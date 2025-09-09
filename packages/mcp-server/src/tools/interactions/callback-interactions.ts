// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'interactions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/interactions/{interaction_id}/{interaction_token}/callback',
  operationId: 'create_interaction_response',
};

export const tool: Tool = {
  name: 'callback_interactions',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          interaction_id: {
            type: 'string',
          },
          interaction_token: {
            type: 'string',
          },
          data: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  choices: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                        },
                        value: {
                          type: 'integer',
                        },
                        name_localizations: {
                          type: 'object',
                          additionalProperties: true,
                        },
                      },
                      required: ['name', 'value'],
                    },
                  },
                },
              },
              {
                type: 'object',
                properties: {
                  choices: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                        },
                        value: {
                          type: 'number',
                        },
                        name_localizations: {
                          type: 'object',
                          additionalProperties: true,
                        },
                      },
                      required: ['name', 'value'],
                    },
                  },
                },
              },
              {
                type: 'object',
                properties: {
                  choices: {
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
                        name_localizations: {
                          type: 'object',
                          additionalProperties: true,
                        },
                      },
                      required: ['name', 'value'],
                    },
                  },
                },
              },
            ],
          },
          type: {
            type: 'string',
            enum: [1, 4, 5, 6, 7, 8, 9, 12],
          },
          with_response: {
            type: 'boolean',
          },
        },
        required: ['interaction_id', 'interaction_token', 'data', 'type'],
      },
      {
        type: 'object',
        properties: {
          interaction_id: {
            type: 'string',
          },
          interaction_token: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: [1, 4, 5, 6, 7, 8, 9, 12],
          },
          with_response: {
            type: 'boolean',
          },
          data: {
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
              tts: {
                type: 'boolean',
              },
            },
          },
        },
        required: ['interaction_id', 'interaction_token', 'type'],
      },
      {
        type: 'object',
        properties: {
          interaction_id: {
            type: 'string',
          },
          interaction_token: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: [1, 4, 5, 6, 7, 8, 9, 12],
          },
          with_response: {
            type: 'boolean',
          },
        },
        required: ['interaction_id', 'interaction_token', 'type'],
      },
      {
        type: 'object',
        properties: {
          interaction_id: {
            type: 'string',
          },
          interaction_token: {
            type: 'string',
          },
          data: {
            type: 'object',
            properties: {
              components: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    components: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          custom_id: {
                            type: 'string',
                          },
                          label: {
                            type: 'string',
                          },
                          style: {
                            type: 'string',
                            description: '- `1` - Single-line input\n- `2` - Multi-line input',
                            enum: [1, 2],
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - Container for other components\n- `2` - Button object\n- `3` - Select menu for picking from defined text options\n- `4` - Text input object\n- `5` - Select menu for users\n- `6` - Select menu for roles\n- `7` - Select menu for mentionables (users and roles)\n- `8` - Select menu for channels',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8],
                          },
                          max_length: {
                            type: 'integer',
                          },
                          min_length: {
                            type: 'integer',
                          },
                          placeholder: {
                            type: 'string',
                          },
                          required: {
                            type: 'boolean',
                          },
                          value: {
                            type: 'string',
                          },
                        },
                        required: ['custom_id', 'label', 'style', 'type'],
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
              custom_id: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
            },
            required: ['components', 'custom_id', 'title'],
          },
          type: {
            type: 'string',
            enum: [1, 4, 5, 6, 7, 8, 9, 12],
          },
          with_response: {
            type: 'boolean',
          },
        },
        required: ['interaction_id', 'interaction_token', 'data', 'type'],
      },
      {
        type: 'object',
        properties: {
          interaction_id: {
            type: 'string',
          },
          interaction_token: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: [1, 4, 5, 6, 7, 8, 9, 12],
          },
          with_response: {
            type: 'boolean',
          },
        },
        required: ['interaction_id', 'interaction_token', 'type'],
      },
      {
        type: 'object',
        properties: {
          interaction_id: {
            type: 'string',
          },
          interaction_token: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: [1, 4, 5, 6, 7, 8, 9, 12],
          },
          with_response: {
            type: 'boolean',
          },
          data: {
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
            },
          },
        },
        required: ['interaction_id', 'interaction_token', 'type'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { interaction_id, interaction_token, ...body } = args as any;
  return asTextContentResult(await client.interactions.callback(interaction_id, interaction_token, body));
};

export default { metadata, tool, handler };

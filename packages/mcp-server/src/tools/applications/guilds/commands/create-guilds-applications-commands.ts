// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.guilds.commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/applications/{application_id}/guilds/{guild_id}/commands',
  operationId: 'create_guild_application_command',
};

export const tool: Tool = {
  name: 'create_guilds_applications_commands',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      guild_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      contexts: {
        type: 'array',
        items: {
          type: 'string',
          description:
            "- `0` - This command can be used within a Guild.\n- `1` - This command can be used within a DM with this application's bot.\n- `2` - This command can be used within DMs and Group DMs with users.",
          enum: [0, 1, 2],
        },
      },
      default_member_permissions: {
        type: 'integer',
      },
      description: {
        type: 'string',
      },
      description_localizations: {
        type: 'object',
        additionalProperties: true,
      },
      dm_permission: {
        type: 'boolean',
      },
      handler: {
        type: 'integer',
      },
      integration_types: {
        type: 'array',
        items: {
          type: 'string',
          description: '- `0` - For Guild install.\n- `1` - For User install.',
          enum: [0, 1],
        },
      },
      name_localizations: {
        type: 'object',
        additionalProperties: true,
      },
      options: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                autocomplete: {
                  type: 'boolean',
                },
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
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                max_value: {
                  type: 'integer',
                },
                min_value: {
                  type: 'integer',
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                autocomplete: {
                  type: 'boolean',
                },
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
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                max_value: {
                  type: 'number',
                },
                min_value: {
                  type: 'number',
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                autocomplete: {
                  type: 'boolean',
                },
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
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                max_length: {
                  type: 'integer',
                },
                min_length: {
                  type: 'integer',
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                options: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      description: {
                        type: 'string',
                      },
                      name: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        description:
                          '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                      },
                      description_localizations: {
                        type: 'object',
                        additionalProperties: true,
                      },
                      name_localizations: {
                        type: 'object',
                        additionalProperties: true,
                      },
                      options: {
                        type: 'array',
                        items: {
                          anyOf: [
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                autocomplete: {
                                  type: 'boolean',
                                },
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
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                max_value: {
                                  type: 'integer',
                                },
                                min_value: {
                                  type: 'integer',
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                autocomplete: {
                                  type: 'boolean',
                                },
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
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                max_value: {
                                  type: 'number',
                                },
                                min_value: {
                                  type: 'number',
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                autocomplete: {
                                  type: 'boolean',
                                },
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
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                max_length: {
                                  type: 'integer',
                                },
                                min_length: {
                                  type: 'integer',
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                            {
                              type: 'object',
                              properties: {
                                description: {
                                  type: 'string',
                                },
                                name: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                  description:
                                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                },
                                description_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                name_localizations: {
                                  type: 'object',
                                  additionalProperties: true,
                                },
                                required: {
                                  type: 'boolean',
                                },
                              },
                              required: ['description', 'name', 'type'],
                            },
                          ],
                        },
                      },
                      required: {
                        type: 'boolean',
                      },
                    },
                    required: ['description', 'name', 'type'],
                  },
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                options: {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          autocomplete: {
                            type: 'boolean',
                          },
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
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          max_value: {
                            type: 'integer',
                          },
                          min_value: {
                            type: 'integer',
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          autocomplete: {
                            type: 'boolean',
                          },
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
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          max_value: {
                            type: 'number',
                          },
                          min_value: {
                            type: 'number',
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          autocomplete: {
                            type: 'boolean',
                          },
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
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          max_length: {
                            type: 'integer',
                          },
                          min_length: {
                            type: 'integer',
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                          },
                          name: {
                            type: 'string',
                          },
                          type: {
                            type: 'string',
                            description:
                              '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                            enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          },
                          description_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          name_localizations: {
                            type: 'object',
                            additionalProperties: true,
                          },
                          required: {
                            type: 'boolean',
                          },
                        },
                        required: ['description', 'name', 'type'],
                      },
                    ],
                  },
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
            {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                  description:
                    '- `1` - A sub-action within a command or group\n- `2` - A group of subcommands\n- `3` - A string option\n- `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value\n- `5` - A boolean option\n- `6` - A snowflake option that represents a User\n- `7` - A snowflake option that represents a Channel. Includes all channel types and categories\n- `8` - A snowflake option that represents a Role\n- `9` - A snowflake option that represents anything you can mention\n- `10` - A number option. Any double between -2^53 and 2^53 is a valid value\n- `11` - An attachment option',
                  enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                description_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                name_localizations: {
                  type: 'object',
                  additionalProperties: true,
                },
                required: {
                  type: 'boolean',
                },
              },
              required: ['description', 'name', 'type'],
            },
          ],
        },
      },
      type: {
        type: 'string',
        description:
          '- `1` - Slash commands; a text-based command that shows up when a user types /\n- `2` - A UI-based command that shows up when you right click or tap on a user\n- `3` - A UI-based command that shows up when you right click or tap on a message\n- `4` - A command that represents the primary way to use an application (e.g. launching an Activity)',
        enum: [1, 2, 3, 4],
      },
    },
    required: ['application_id', 'guild_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, guild_id, ...body } = args as any;
  return asTextContentResult(
    await client.applications.guilds.commands.create(application_id, guild_id, body),
  );
};

export default { metadata, tool, handler };

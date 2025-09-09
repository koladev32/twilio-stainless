// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/guilds',
  operationId: 'create_guild',
};

export const tool: Tool = {
  name: 'create_guilds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      afk_channel_id: {
        type: 'string',
      },
      afk_timeout: {
        type: 'string',
        enum: [60, 300, 900, 1800, 3600],
      },
      channels: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            available_tags: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  emoji_id: {
                    type: 'string',
                  },
                  emoji_name: {
                    type: 'string',
                  },
                  moderated: {
                    type: 'boolean',
                  },
                },
                required: ['name'],
              },
            },
            bitrate: {
              type: 'integer',
            },
            default_auto_archive_duration: {
              type: 'string',
              description:
                '- `60` - One hour\n- `1440` - One day\n- `4320` - Three days\n- `10080` - Seven days',
              enum: [60, 1440, 4320, 10080],
            },
            default_forum_layout: {
              type: 'string',
              description:
                '- `0` - No default has been set for forum channel\n- `1` - Display posts as a list\n- `2` - Display posts as a collection of tiles',
              enum: [0, 1, 2],
            },
            default_reaction_emoji: {
              type: 'object',
              properties: {
                emoji_id: {
                  type: 'string',
                },
                emoji_name: {
                  type: 'string',
                },
              },
            },
            default_sort_order: {
              type: 'string',
              description:
                '- `0` - Sort forum posts by activity\n- `1` - Sort forum posts by creation time (from most recent to oldest)',
              enum: [0, 1],
            },
            default_thread_rate_limit_per_user: {
              type: 'integer',
            },
            nsfw: {
              type: 'boolean',
            },
            parent_id: {
              type: 'string',
            },
            permission_overwrites: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                  },
                  allow: {
                    type: 'integer',
                  },
                  deny: {
                    type: 'integer',
                  },
                  type: {
                    type: 'string',
                    enum: [0, 1],
                  },
                },
                required: ['id'],
              },
            },
            position: {
              type: 'integer',
            },
            rate_limit_per_user: {
              type: 'integer',
            },
            rtc_region: {
              type: 'string',
            },
            topic: {
              type: 'string',
            },
            type: {
              type: 'string',
              description:
                '- `1` - A direct message between users\n- `3` - A direct message between multiple users\n- `0` - A text channel within a server\n- `2` - A voice channel within a server\n- `4` - An organizational category that contains up to 50 channels\n- `5` - A channel that users can follow and crosspost into their own server (formerly news channels)\n- `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel\n- `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY channel type set\n- `12` - A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission\n- `13` - A voice channel for hosting events with an audience\n- `14` - The channel in a hub containing the listed servers\n- `15` - Channel that can only contain threads',
              enum: [1, 3, 0, 2, 4, 5, 10, 11, 12, 13, 14, 15],
            },
            user_limit: {
              type: 'integer',
            },
            video_quality_mode: {
              type: 'string',
              description: '- `1` - Discord chooses the quality for optimal performance\n- `2` - 720p',
              enum: [1, 2],
            },
          },
          required: ['name'],
        },
      },
      default_message_notifications: {
        type: 'string',
        description:
          '- `0` - members will receive notifications for all messages by default\n- `1` - members will receive notifications only for messages that @mention them by default',
        enum: [0, 1],
      },
      description: {
        type: 'string',
      },
      explicit_content_filter: {
        type: 'string',
        description:
          '- `0` - media content will not be scanned\n- `1` - media content sent by members without roles will be scanned\n- `2` - media content sent by all members will be scanned',
        enum: [0, 1, 2],
      },
      icon: {
        type: 'string',
      },
      preferred_locale: {
        type: 'string',
        description:
          '- `ar` - The ar locale\n- `bg` - The bg locale\n- `cs` - The cs locale\n- `da` - The da locale\n- `de` - The de locale\n- `el` - The el locale\n- `en-GB` - The en-GB locale\n- `en-US` - The en-US locale\n- `es-419` - The es-419 locale\n- `es-ES` - The es-ES locale\n- `fi` - The fi locale\n- `fr` - The fr locale\n- `he` - The he locale\n- `hi` - The hi locale\n- `hr` - The hr locale\n- `hu` - The hu locale\n- `id` - The id locale\n- `it` - The it locale\n- `ja` - The ja locale\n- `ko` - The ko locale\n- `lt` - The lt locale\n- `nl` - The nl locale\n- `no` - The no locale\n- `pl` - The pl locale\n- `pt-BR` - The pt-BR locale\n- `ro` - The ro locale\n- `ru` - The ru locale\n- `sv-SE` - The sv-SE locale\n- `th` - The th locale\n- `tr` - The tr locale\n- `uk` - The uk locale\n- `vi` - The vi locale\n- `zh-CN` - The zh-CN locale\n- `zh-TW` - The zh-TW locale',
        enum: [
          'ar',
          'bg',
          'cs',
          'da',
          'de',
          'el',
          'en-GB',
          'en-US',
          'es-419',
          'es-ES',
          'fi',
          'fr',
          'he',
          'hi',
          'hr',
          'hu',
          'id',
          'it',
          'ja',
          'ko',
          'lt',
          'nl',
          'no',
          'pl',
          'pt-BR',
          'ro',
          'ru',
          'sv-SE',
          'th',
          'tr',
          'uk',
          'vi',
          'zh-CN',
          'zh-TW',
        ],
      },
      region: {
        type: 'string',
      },
      roles: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            color: {
              type: 'integer',
            },
            hoist: {
              type: 'boolean',
            },
            mentionable: {
              type: 'boolean',
            },
            name: {
              type: 'string',
            },
            permissions: {
              type: 'integer',
            },
            unicode_emoji: {
              type: 'string',
            },
          },
          required: ['id'],
        },
      },
      system_channel_flags: {
        type: 'integer',
      },
      system_channel_id: {
        type: 'string',
      },
      verification_level: {
        type: 'string',
        description:
          '- `0` - unrestricted\n- `1` - must have verified email on account\n- `2` - must be registered on Discord for longer than 5 minutes\n- `3` - must be a member of the server for longer than 10 minutes\n- `4` - must have a verified phone number',
        enum: [0, 1, 2, 3, 4],
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.guilds.create(body));
};

export default { metadata, tool, handler };

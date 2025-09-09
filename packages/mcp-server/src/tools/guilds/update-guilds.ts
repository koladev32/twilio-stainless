// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/guilds/{guild_id}',
  operationId: 'update_guild',
};

export const tool: Tool = {
  name: 'update_guilds',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      afk_channel_id: {
        type: 'string',
      },
      afk_timeout: {
        type: 'string',
        enum: [60, 300, 900, 1800, 3600],
      },
      banner: {
        type: 'string',
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
      discovery_splash: {
        type: 'string',
      },
      explicit_content_filter: {
        type: 'string',
        description:
          '- `0` - media content will not be scanned\n- `1` - media content sent by members without roles will be scanned\n- `2` - media content sent by all members will be scanned',
        enum: [0, 1, 2],
      },
      features: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      home_header: {
        type: 'string',
      },
      icon: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      owner_id: {
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
      premium_progress_bar_enabled: {
        type: 'boolean',
      },
      public_updates_channel_id: {
        type: 'string',
      },
      region: {
        type: 'string',
      },
      rules_channel_id: {
        type: 'string',
      },
      safety_alerts_channel_id: {
        type: 'string',
      },
      splash: {
        type: 'string',
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
    required: ['guild_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  return asTextContentResult(await client.guilds.update(guild_id, body));
};

export default { metadata, tool, handler };

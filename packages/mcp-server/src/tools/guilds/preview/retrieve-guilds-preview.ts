// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discord-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.preview',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/preview',
  operationId: 'get_guild_preview',
};

export const tool: Tool = {
  name: 'retrieve_guilds_preview',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/guild_preview',\n  $defs: {\n    guild_preview: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        approximate_member_count: {\n          type: 'integer'\n        },\n        approximate_presence_count: {\n          type: 'integer'\n        },\n        emojis: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/emoji_response'\n          }\n        },\n        features: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: '- `ANIMATED_BANNER` - guild has access to set an animated guild banner image\\n- `ANIMATED_ICON` - guild has access to set an animated guild icon\\n- `APPLICATION_COMMAND_PERMISSIONS_V2` - guild is using the old permissions configuration behavior\\n- `AUTO_MODERATION` - guild has set up auto moderation rules\\n- `BANNER` - guild has access to set a guild banner image\\n- `COMMUNITY` - guild can enable welcome screen, Membership Screening, stage channels and discovery, and             receives community updates\\n- `CREATOR_MONETIZABLE_PROVISIONAL` - guild has enabled monetization\\n- `CREATOR_STORE_PAGE` - guild has enabled the role subscription promo page\\n- `DEVELOPER_SUPPORT_SERVER` - guild has been set as a support server on the App Directory\\n- `DISCOVERABLE` - guild is able to be discovered in the directory\\n- `FEATURABLE` - guild is able to be featured in the directory\\n- `INVITES_DISABLED` - guild has paused invites, preventing new users from joining\\n- `INVITE_SPLASH` - guild has access to set an invite splash background\\n- `MEMBER_VERIFICATION_GATE_ENABLED` - guild has enabled Membership Screening\\n- `MORE_STICKERS` - guild has increased custom sticker slots\\n- `NEWS` - guild has access to create announcement channels\\n- `PARTNERED` - guild is partnered\\n- `PREVIEW_ENABLED` - guild can be previewed before joining via Membership Screening or the directory\\n- `RAID_ALERTS_DISABLED` - guild has disabled activity alerts in the configured safety alerts channel\\n- `ROLE_ICONS` - guild is able to set role icons\\n- `ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE` - guild has role subscriptions that can be purchased\\n- `ROLE_SUBSCRIPTIONS_ENABLED` - guild has enabled role subscriptions\\n- `TICKETED_EVENTS_ENABLED` - guild has enabled ticketed events\\n- `VANITY_URL` - guild has access to set a vanity URL\\n- `VERIFIED` - guild is verified\\n- `VIP_REGIONS` - guild has access to set 384kbps bitrate in voice (previously VIP voice servers)\\n- `WELCOME_SCREEN_ENABLED` - guild has enabled the welcome screen',\n            enum: [              'ANIMATED_BANNER',\n              'ANIMATED_ICON',\n              'APPLICATION_COMMAND_PERMISSIONS_V2',\n              'AUTO_MODERATION',\n              'BANNER',\n              'COMMUNITY',\n              'CREATOR_MONETIZABLE_PROVISIONAL',\n              'CREATOR_STORE_PAGE',\n              'DEVELOPER_SUPPORT_SERVER',\n              'DISCOVERABLE',\n              'FEATURABLE',\n              'INVITES_DISABLED',\n              'INVITE_SPLASH',\n              'MEMBER_VERIFICATION_GATE_ENABLED',\n              'MORE_STICKERS',\n              'NEWS',\n              'PARTNERED',\n              'PREVIEW_ENABLED',\n              'RAID_ALERTS_DISABLED',\n              'ROLE_ICONS',\n              'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE',\n              'ROLE_SUBSCRIPTIONS_ENABLED',\n              'TICKETED_EVENTS_ENABLED',\n              'VANITY_URL',\n              'VERIFIED',\n              'VIP_REGIONS',\n              'WELCOME_SCREEN_ENABLED'\n            ]\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        stickers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/guild_sticker'\n          }\n        },\n        description: {\n          type: 'string'\n        },\n        discovery_splash: {\n          type: 'string'\n        },\n        home_header: {\n          type: 'string'\n        },\n        icon: {\n          type: 'string'\n        },\n        splash: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'approximate_member_count',\n        'approximate_presence_count',\n        'emojis',\n        'features',\n        'name',\n        'stickers'\n      ]\n    },\n    emoji_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        animated: {\n          type: 'boolean'\n        },\n        available: {\n          type: 'boolean'\n        },\n        managed: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        require_colons: {\n          type: 'boolean'\n        },\n        roles: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'id',\n        'animated',\n        'available',\n        'managed',\n        'name',\n        'require_colons',\n        'roles'\n      ]\n    },\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        discriminator: {\n          type: 'string'\n        },\n        flags: {\n          type: 'integer'\n        },\n        public_flags: {\n          type: 'integer'\n        },\n        username: {\n          type: 'string'\n        },\n        accent_color: {\n          type: 'integer'\n        },\n        avatar: {\n          type: 'string'\n        },\n        avatar_decoration_data: {\n          type: 'object',\n          properties: {\n            asset: {\n              type: 'string'\n            },\n            sku_id: {\n              type: 'string'\n            }\n          },\n          required: [            'asset'\n          ]\n        },\n        banner: {\n          type: 'string'\n        },\n        bot: {\n          type: 'boolean'\n        },\n        clan: {\n          type: 'object',\n          additionalProperties: true\n        },\n        global_name: {\n          type: 'string'\n        },\n        system: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'discriminator',\n        'flags',\n        'public_flags',\n        'username'\n      ]\n    },\n    guild_sticker: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        available: {\n          type: 'boolean'\n        },\n        guild_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        tags: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: '- `1` - an official sticker in a pack, part of Nitro or in a removed purchasable pack\\n- `2` - a sticker uploaded to a guild for the guild\\'s members',\n          enum: [            1,\n            2\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        format_type: {\n          type: 'string',\n          enum: [            1,\n            2,\n            3,\n            4\n          ]\n        },\n        user: {\n          $ref: '#/$defs/user'\n        }\n      },\n      required: [        'id',\n        'available',\n        'guild_id',\n        'name',\n        'tags',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.guilds.preview.retrieve(guild_id)));
};

export default { metadata, tool, handler };

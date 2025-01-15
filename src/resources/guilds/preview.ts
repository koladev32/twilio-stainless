// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as EmojisAPI from '../applications/emojis';

export class Preview extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildPreview> {
    return this._client.get(`/guilds/${guildId}/preview`, options);
  }
}

export interface GuildPreview {
  id: string;

  approximate_member_count: number;

  approximate_presence_count: number;

  emojis: Array<EmojisAPI.EmojiResponse>;

  features: Array<
    | 'ANIMATED_BANNER'
    | 'ANIMATED_ICON'
    | 'APPLICATION_COMMAND_PERMISSIONS_V2'
    | 'AUTO_MODERATION'
    | 'BANNER'
    | 'COMMUNITY'
    | 'CREATOR_MONETIZABLE_PROVISIONAL'
    | 'CREATOR_STORE_PAGE'
    | 'DEVELOPER_SUPPORT_SERVER'
    | 'DISCOVERABLE'
    | 'FEATURABLE'
    | 'INVITES_DISABLED'
    | 'INVITE_SPLASH'
    | 'MEMBER_VERIFICATION_GATE_ENABLED'
    | 'MORE_STICKERS'
    | 'NEWS'
    | 'PARTNERED'
    | 'PREVIEW_ENABLED'
    | 'RAID_ALERTS_DISABLED'
    | 'ROLE_ICONS'
    | 'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE'
    | 'ROLE_SUBSCRIPTIONS_ENABLED'
    | 'TICKETED_EVENTS_ENABLED'
    | 'VANITY_URL'
    | 'VERIFIED'
    | 'VIP_REGIONS'
    | 'WELCOME_SCREEN_ENABLED'
  >;

  name: string;

  stickers: Array<Shared.GuildSticker>;

  description?: string | null;

  discovery_splash?: string | null;

  home_header?: string | null;

  icon?: string | null;

  splash?: string | null;
}

export declare namespace Preview {
  export { type GuildPreview as GuildPreview };
}

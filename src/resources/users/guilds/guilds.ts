// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MemberAPI from './member';
import { Member, PrivateGuildMemberResponse } from './member';

export class Guilds extends APIResource {
  member: MemberAPI.Member = new MemberAPI.Member(this._client);

  list(query?: GuildListParams, options?: Core.RequestOptions): Core.APIPromise<GuildListResponse | null>;
  list(options?: Core.RequestOptions): Core.APIPromise<GuildListResponse | null>;
  list(
    query: GuildListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GuildListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/users/@me/guilds', { query, ...options });
  }

  delete(guildId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/users/@me/guilds/${guildId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MyGuildResponse {
  id: string;

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

  owner: boolean;

  permissions: string;

  approximate_member_count?: number | null;

  approximate_presence_count?: number | null;

  banner?: string | null;

  icon?: string | null;
}

export type GuildListResponse = Array<MyGuildResponse>;

export interface GuildListParams {
  after?: string;

  before?: string;

  limit?: number;

  with_counts?: boolean;
}

Guilds.Member = Member;

export declare namespace Guilds {
  export {
    type MyGuildResponse as MyGuildResponse,
    type GuildListResponse as GuildListResponse,
    type GuildListParams as GuildListParams,
  };

  export { Member as Member, type PrivateGuildMemberResponse as PrivateGuildMemberResponse };
}

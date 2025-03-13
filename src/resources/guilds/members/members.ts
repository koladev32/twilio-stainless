// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as MembersAPI from './members';
import * as UsersAPI from '../../users/users';
import * as RolesAPI from './roles';
import { Roles } from './roles';

export class Members extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  retrieve(guildId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<GuildMemberResponse> {
    return this._client.get(`/guilds/${guildId}/members/${userId}`, options);
  }

  update(guildId: string, userId: string, body: MemberUpdateParams, options?: Core.RequestOptions): Core.APIPromise<GuildMemberResponse> {
    return this._client.patch(`/guilds/${guildId}/members/${userId}`, { body, ...options });
  }

  list(guildId: string, query?: MemberListParams, options?: Core.RequestOptions): Core.APIPromise<MemberListResponse>
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<MemberListResponse>
  list(guildId: string, query: MemberListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<MemberListResponse> {
    if (isRequestOptions(query)) {
      return this.list(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/members`, { query, ...options });
  }

  delete(guildId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/members/${userId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  search(guildId: string, query: MemberSearchParams, options?: Core.RequestOptions): Core.APIPromise<MemberSearchResponse> {
    return this._client.get(`/guilds/${guildId}/members/search`, { query, ...options });
  }
}

export interface GuildMember {
  deaf: boolean;

  flags: number;

  joined_at: string;

  mute: boolean;

  pending: boolean;

  roles: Array<string>;

  user: UsersAPI.User;

  avatar?: string | null;

  avatar_decoration_data?: GuildMember.AvatarDecorationData | null;

  banner?: string | null;

  communication_disabled_until?: string | null;

  nick?: string | null;

  premium_since?: string | null;
}

export namespace GuildMember {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export interface GuildMemberResponse {
  deaf: boolean;

  flags: number;

  joined_at: string;

  mute: boolean;

  pending: boolean;

  roles: Array<string>;

  user: UsersAPI.User;

  avatar?: string | null;

  avatar_decoration_data?: GuildMemberResponse.AvatarDecorationData | null;

  banner?: string | null;

  communication_disabled_until?: string | null;

  nick?: string | null;

  premium_since?: string | null;
}

export namespace GuildMemberResponse {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export interface PrivateGuildMemberResponse {
  deaf: boolean;

  flags: number;

  joined_at: string;

  mute: boolean;

  pending: boolean;

  roles: Array<string>;

  user: UsersAPI.User;

  avatar?: string | null;

  avatar_decoration_data?: PrivateGuildMemberResponse.AvatarDecorationData | null;

  banner?: string | null;

  communication_disabled_until?: string | null;

  nick?: string | null;

  premium_since?: string | null;
}

export namespace PrivateGuildMemberResponse {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export type MemberListResponse = Array<GuildMemberResponse>

export type MemberSearchResponse = Array<GuildMemberResponse>

export interface MemberUpdateParams {
  channel_id?: string | null;

  communication_disabled_until?: string | null;

  deaf?: boolean | null;

  flags?: number | null;

  mute?: boolean | null;

  nick?: string | null;

  roles?: Array<string | null> | null;
}

export interface MemberListParams {
  after?: number;

  limit?: number;
}

export interface MemberSearchParams {
  limit: number;

  query: string;
}

Members.Roles = Roles;

export declare namespace Members {
  export {
    type GuildMember as GuildMember,
    type GuildMemberResponse as GuildMemberResponse,
    type PrivateGuildMemberResponse as PrivateGuildMemberResponse,
    type MemberListResponse as MemberListResponse,
    type MemberSearchResponse as MemberSearchResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberSearchParams as MemberSearchParams
  };

  export {
    Roles as Roles
  };
}

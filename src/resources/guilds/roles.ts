// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Roles extends APIResource {
  create(guildId: string, body: RoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<GuildRole> {
    return this._client.post(`/guilds/${guildId}/roles`, { body, ...options });
  }

  retrieve(guildId: string, roleId: string, options?: Core.RequestOptions): Core.APIPromise<GuildRole> {
    return this._client.get(`/guilds/${guildId}/roles/${roleId}`, options);
  }

  update(
    guildId: string,
    body: RoleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleUpdateResponse> {
    return this._client.patch(`/guilds/${guildId}/roles`, { body, ...options });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<RoleListResponse> {
    return this._client.get(`/guilds/${guildId}/roles`, options);
  }

  delete(guildId: string, roleId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/roles/${roleId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface GuildRole {
  id: string;

  color: number;

  hoist: boolean;

  managed: boolean;

  mentionable: boolean;

  name: string;

  permissions: string;

  position: number;

  description?: string | null;

  icon?: string | null;

  tags?: GuildRole.Tags | null;

  unicode_emoji?: string | null;
}

export namespace GuildRole {
  export interface Tags {
    available_for_purchase?: null;

    bot_id?: string | null;

    guild_connections?: null;

    integration_id?: string | null;

    premium_subscriber?: null;

    subscription_listing_id?: string | null;
  }
}

export type RoleUpdateResponse = Array<GuildRole>;

export type RoleListResponse = Array<GuildRole>;

export interface RoleCreateParams {
  color?: number | null;

  hoist?: boolean | null;

  icon?: string | null;

  mentionable?: boolean | null;

  name?: string | null;

  permissions?: number | null;

  unicode_emoji?: string | null;
}

export type RoleUpdateParams = Array<RoleUpdateParams.Body>;

export namespace RoleUpdateParams {
  export interface Body {
    id?: string | null;

    position?: number | null;
  }
}

export declare namespace Roles {
  export {
    type GuildRole as GuildRole,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
  };
}

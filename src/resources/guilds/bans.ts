// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from '../users/users';

export class Bans extends APIResource {
  retrieve(guildId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<GuildBan> {
    return this._client.get(`/guilds/${guildId}/bans/${userId}`, options);
  }

  update(
    guildId: string,
    userId: string,
    body: BanUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/guilds/${guildId}/bans/${userId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  list(
    guildId: string,
    query?: BanListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BanListResponse | null>;
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<BanListResponse | null>;
  list(
    guildId: string,
    query: BanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BanListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/bans`, { query, ...options });
  }

  delete(guildId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/bans/${userId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface GuildBan {
  user: UsersAPI.User;

  reason?: string | null;
}

export type BanListResponse = Array<GuildBan>;

export interface BanUpdateParams {
  delete_message_days?: number | null;

  delete_message_seconds?: number | null;
}

export interface BanListParams {
  after?: string;

  before?: string;

  limit?: number;
}

export declare namespace Bans {
  export {
    type GuildBan as GuildBan,
    type BanListResponse as BanListResponse,
    type BanUpdateParams as BanUpdateParams,
    type BanListParams as BanListParams,
  };
}

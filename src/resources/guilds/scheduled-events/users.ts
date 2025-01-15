// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from '../../users/users';
import * as MembersAPI from '../members/members';

export class Users extends APIResource {
  list(
    guildId: string,
    guildScheduledEventId: string,
    query?: UserListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse | null>;
  list(
    guildId: string,
    guildScheduledEventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse | null>;
  list(
    guildId: string,
    guildScheduledEventId: string,
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(guildId, guildScheduledEventId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`, {
      query,
      ...options,
    });
  }
}

export interface ScheduledEventUserResponse {
  guild_scheduled_event_id: string;

  user_id: string;

  member?: MembersAPI.GuildMemberResponse | null;

  user?: UsersAPI.User | null;
}

export type UserListResponse = Array<ScheduledEventUserResponse>;

export interface UserListParams {
  after?: string;

  before?: string;

  limit?: number;

  with_member?: boolean;
}

export declare namespace Users {
  export {
    type ScheduledEventUserResponse as ScheduledEventUserResponse,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };
}

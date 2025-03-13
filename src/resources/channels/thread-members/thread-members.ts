// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MeAPI from './me';
import { Me } from './me';
import * as MembersAPI from '../../guilds/members/members';

export class ThreadMembers extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);

  retrieve(
    channelId: string,
    userId: string,
    query?: ThreadMemberRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadMemberResponse>;
  retrieve(
    channelId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadMemberResponse>;
  retrieve(
    channelId: string,
    userId: string,
    query: ThreadMemberRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadMemberResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(channelId, userId, {}, query);
    }
    return this._client.get(`/channels/${channelId}/thread-members/${userId}`, { query, ...options });
  }

  update(channelId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/channels/${channelId}/thread-members/${userId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  list(
    channelId: string,
    query?: ThreadMemberListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadMemberListResponse>;
  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<ThreadMemberListResponse>;
  list(
    channelId: string,
    query: ThreadMemberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadMemberListResponse> {
    if (isRequestOptions(query)) {
      return this.list(channelId, {}, query);
    }
    return this._client.get(`/channels/${channelId}/thread-members`, { query, ...options });
  }

  delete(channelId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/thread-members/${userId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ThreadMemberResponse {
  id: string;

  flags: number;

  join_timestamp: string;

  user_id: string;

  member?: MembersAPI.GuildMemberResponse | null;
}

export type ThreadMemberListResponse = Array<ThreadMemberResponse>;

export interface ThreadMemberRetrieveParams {
  with_member?: boolean;
}

export interface ThreadMemberListParams {
  after?: string;

  limit?: number;

  with_member?: boolean;
}

ThreadMembers.Me = Me;

export declare namespace ThreadMembers {
  export {
    type ThreadMemberResponse as ThreadMemberResponse,
    type ThreadMemberListResponse as ThreadMemberListResponse,
    type ThreadMemberRetrieveParams as ThreadMemberRetrieveParams,
    type ThreadMemberListParams as ThreadMemberListParams,
  };

  export { Me as Me };
}

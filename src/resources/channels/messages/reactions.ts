// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from '../../users/users';

export class Reactions extends APIResource {
  add(
    channelId: string,
    messageId: string,
    emojiName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  clear(channelId: string, messageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/messages/${messageId}/reactions`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  remove(
    channelId: string,
    messageId: string,
    emojiName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/@me`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  removeEmoji(
    channelId: string,
    messageId: string,
    emojiName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  removeForUser(
    channelId: string,
    messageId: string,
    emojiName: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/channels/${channelId}/messages/${messageId}/reactions/${emojiName}/${userId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  retrieveAll(
    channelId: string,
    messageId: string,
    emojiName: string,
    query?: ReactionRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReactionRetrieveAllResponse>;
  retrieveAll(
    channelId: string,
    messageId: string,
    emojiName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReactionRetrieveAllResponse>;
  retrieveAll(
    channelId: string,
    messageId: string,
    emojiName: string,
    query: ReactionRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReactionRetrieveAllResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveAll(channelId, messageId, emojiName, {}, query);
    }
    return this._client.get(`/channels/${channelId}/messages/${messageId}/reactions/${emojiName}`, {
      query,
      ...options,
    });
  }
}

export interface UserResponse {
  id: string;

  discriminator: string;

  flags: number;

  public_flags: number;

  username: string;

  accent_color?: number | null;

  avatar?: string | null;

  avatar_decoration_data?: UserResponse.AvatarDecorationData | null;

  banner?: string | null;

  bot?: boolean | null;

  clan?: unknown | null;

  global_name?: string | null;

  system?: boolean | null;
}

export namespace UserResponse {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export type ReactionRetrieveAllResponse = Array<UsersAPI.User>;

export interface ReactionRetrieveAllParams {
  after?: string;

  limit?: number;

  /**
   * - `0` - Normal reaction type
   * - `1` - Burst reaction type
   */
  type?: 0 | 1;
}

export declare namespace Reactions {
  export {
    type UserResponse as UserResponse,
    type ReactionRetrieveAllResponse as ReactionRetrieveAllResponse,
    type ReactionRetrieveAllParams as ReactionRetrieveAllParams,
  };
}

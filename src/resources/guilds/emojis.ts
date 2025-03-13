// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as GuildsEmojisAPI from './emojis';
import * as EmojisAPI from '../applications/emojis';
import * as UsersAPI from '../users/users';

export class Emojis extends APIResource {
  create(guildId: string, body: EmojiCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmojisAPI.EmojiResponse> {
    return this._client.post(`/guilds/${guildId}/emojis`, { body, ...options });
  }

  retrieve(guildId: string, emojiId: string, options?: Core.RequestOptions): Core.APIPromise<EmojisAPI.EmojiResponse> {
    return this._client.get(`/guilds/${guildId}/emojis/${emojiId}`, options);
  }

  update(guildId: string, emojiId: string, body: EmojiUpdateParams, options?: Core.RequestOptions): Core.APIPromise<EmojisAPI.EmojiResponse> {
    return this._client.patch(`/guilds/${guildId}/emojis/${emojiId}`, { body, ...options });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<EmojiListResponse | null> {
    return this._client.get(`/guilds/${guildId}/emojis`, options);
  }

  delete(guildId: string, emojiId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/emojis/${emojiId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface Emoji {
  id: string;

  animated: boolean;

  available: boolean;

  managed: boolean;

  name: string;

  require_colons: boolean;

  roles: Array<string>;

  user?: UsersAPI.User | null;
}

export type EmojiListResponse = Array<EmojisAPI.EmojiResponse>

export interface EmojiCreateParams {
  image: string;

  name: string;

  roles?: Array<string | null> | null;
}

export interface EmojiUpdateParams {
  name?: string;

  roles?: Array<string | null> | null;
}

export declare namespace Emojis {
  export {
    type Emoji as Emoji,
    type EmojiListResponse as EmojiListResponse,
    type EmojiCreateParams as EmojiCreateParams,
    type EmojiUpdateParams as EmojiUpdateParams
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from '../users/users';

export class Emojis extends APIResource {
  create(
    applicationId: string,
    body: EmojiCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmojiResponse> {
    return this._client.post(`/applications/${applicationId}/emojis`, { body, ...options });
  }

  retrieve(
    applicationId: string,
    emojiId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmojiResponse> {
    return this._client.get(`/applications/${applicationId}/emojis/${emojiId}`, options);
  }

  update(
    applicationId: string,
    emojiId: string,
    body: EmojiUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmojiResponse> {
    return this._client.patch(`/applications/${applicationId}/emojis/${emojiId}`, { body, ...options });
  }

  list(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<ListApplicationEmojisResponse> {
    return this._client.get(`/applications/${applicationId}/emojis`, options);
  }

  delete(applicationId: string, emojiId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/applications/${applicationId}/emojis/${emojiId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EmojiResponse {
  id: string;

  animated: boolean;

  available: boolean;

  managed: boolean;

  name: string;

  require_colons: boolean;

  roles: Array<string>;

  user?: UsersAPI.User | null;
}

export interface ListApplicationEmojisResponse {
  items: Array<EmojiResponse>;
}

export interface EmojiCreateParams {
  image: string;

  name: string;
}

export interface EmojiUpdateParams {
  name?: string;
}

export declare namespace Emojis {
  export {
    type EmojiResponse as EmojiResponse,
    type ListApplicationEmojisResponse as ListApplicationEmojisResponse,
    type EmojiCreateParams as EmojiCreateParams,
    type EmojiUpdateParams as EmojiUpdateParams,
  };
}

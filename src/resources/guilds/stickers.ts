// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as StickersAPI from './stickers';
import { multipartFormRequestOptions } from '../../core';
import * as Shared from '../shared';

export class Stickers extends APIResource {
  create(guildId: string, body: StickerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.GuildSticker> {
    return this._client.post(`/guilds/${guildId}/stickers`, Core.multipartFormRequestOptions({ body, ...options }));
  }

  retrieve(guildId: string, stickerId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.GuildSticker> {
    return this._client.get(`/guilds/${guildId}/stickers/${stickerId}`, options);
  }

  update(guildId: string, stickerId: string, body: StickerUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.GuildSticker> {
    return this._client.patch(`/guilds/${guildId}/stickers/${stickerId}`, { body, ...options });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<StickerListResponse> {
    return this._client.get(`/guilds/${guildId}/stickers`, options);
  }

  delete(guildId: string, stickerId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/stickers/${stickerId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export type StickerListResponse = Array<Shared.GuildSticker>

export interface StickerCreateParams {
  file: string;

  name: string;

  tags: string;

  description?: string | null;
}

export interface StickerUpdateParams {
  description?: string | null;

  name?: string;

  tags?: string;
}

export declare namespace Stickers {
  export {
    type StickerListResponse as StickerListResponse,
    type StickerCreateParams as StickerCreateParams,
    type StickerUpdateParams as StickerUpdateParams
  };
}

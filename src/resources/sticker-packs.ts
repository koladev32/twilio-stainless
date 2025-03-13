// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as StickerPacksAPI from './sticker-packs';
import * as StickersAPI from './stickers';

export class StickerPacks extends APIResource {
  retrieve(packId: string, options?: Core.RequestOptions): Core.APIPromise<StickerPack> {
    return this._client.get(`/sticker-packs/${packId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<StickerPackCollectionResponse> {
    return this._client.get('/sticker-packs', options);
  }
}

export interface StickerPack {
  id: string;

  name: string;

  sku_id: string;

  stickers: Array<StickersAPI.StandardSticker>;

  banner_asset_id?: string | null;

  cover_sticker_id?: string | null;

  description?: string | null;
}

export interface StickerPackCollectionResponse {
  sticker_packs: Array<StickerPack>;
}

export declare namespace StickerPacks {
  export {
    type StickerPack as StickerPack,
    type StickerPackCollectionResponse as StickerPackCollectionResponse
  };
}

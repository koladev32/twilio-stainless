// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Stickers extends APIResource {
  retrieve(stickerId: string, options?: Core.RequestOptions): Core.APIPromise<StickerRetrieveResponse> {
    return this._client.get(`/stickers/${stickerId}`, options);
  }
}

export interface StandardSticker {
  id: string;

  name: string;

  pack_id: string;

  sort_value: number;

  tags: string;

  /**
   * - `1` - an official sticker in a pack, part of Nitro or in a removed purchasable
   *   pack
   * - `2` - a sticker uploaded to a guild for the guild's members
   */
  type: 1 | 2;

  description?: string | null;

  format_type?: 1 | 2 | 3 | 4 | null;
}

export type StickerRetrieveResponse = Shared.GuildSticker | StandardSticker;

export declare namespace Stickers {
  export { type StandardSticker as StandardSticker, type StickerRetrieveResponse as StickerRetrieveResponse };
}

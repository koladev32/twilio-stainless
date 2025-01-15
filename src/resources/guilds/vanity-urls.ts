// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GuildsAPI from './guilds';

export class VanityURLs extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildsAPI.VanityURL> {
    return this._client.get(`/guilds/${guildId}/vanity-url`, options);
  }
}

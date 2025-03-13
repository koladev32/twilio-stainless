// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PruneAPI from './prune';

export class Prune extends APIResource {
  retrieve(guildId: string, query?: PruneRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<GuildPrune>
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildPrune>
  retrieve(guildId: string, query: PruneRetrieveParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<GuildPrune> {
    if (isRequestOptions(query)) {
      return this.retrieve(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/prune`, { query, ...options });
  }
}

export interface GuildPrune {
  pruned?: number | null;
}

export interface PruneRetrieveParams {
  days?: number;

  include_roles?: string | Array<string | null>;
}

export declare namespace Prune {
  export {
    type GuildPrune as GuildPrune,
    type PruneRetrieveParams as PruneRetrieveParams
  };
}

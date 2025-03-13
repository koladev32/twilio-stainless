// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as VoiceRegionsAPI from '../voice/regions';

export class Regions extends APIResource {
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<RegionListResponse | null> {
    return this._client.get(`/guilds/${guildId}/regions`, options);
  }
}

export interface VoiceRegion {
  id: string;

  custom: boolean;

  deprecated: boolean;

  name: string;

  optimal: boolean;
}

export type RegionListResponse = Array<VoiceRegionsAPI.VoiceRegionResponse>;

export declare namespace Regions {
  export { type VoiceRegion as VoiceRegion, type RegionListResponse as RegionListResponse };
}

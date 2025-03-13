// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Regions extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<RegionListResponse | null> {
    return this._client.get('/voice/regions', options);
  }
}

export interface VoiceRegionResponse {
  id: string;

  custom: boolean;

  deprecated: boolean;

  name: string;

  optimal: boolean;
}

export type RegionListResponse = Array<VoiceRegionResponse>;

export declare namespace Regions {
  export { type VoiceRegionResponse as VoiceRegionResponse, type RegionListResponse as RegionListResponse };
}

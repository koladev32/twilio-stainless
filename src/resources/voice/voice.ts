// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as RegionsAPI from './regions';
import { RegionListResponse, Regions, VoiceRegionResponse } from './regions';

export class Voice extends APIResource {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
}

Voice.Regions = Regions;

export declare namespace Voice {
  export {
    Regions as Regions,
    type VoiceRegionResponse as VoiceRegionResponse,
    type RegionListResponse as RegionListResponse
  };
}

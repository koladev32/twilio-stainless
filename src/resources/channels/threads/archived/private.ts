// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';

export class Private extends APIResource {
  list(
    channelId: string,
    query?: PrivateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ThreadsResponse>;
  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ThreadsResponse>;
  list(
    channelId: string,
    query: PrivateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ThreadsResponse> {
    if (isRequestOptions(query)) {
      return this.list(channelId, {}, query);
    }
    return this._client.get(`/channels/${channelId}/threads/archived/private`, { query, ...options });
  }
}

export interface PrivateListParams {
  before?: string;

  limit?: number;
}

export declare namespace Private {
  export { type PrivateListParams as PrivateListParams };
}

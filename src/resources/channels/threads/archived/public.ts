// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';

export class Public extends APIResource {
  list(
    channelId: string,
    query?: PublicListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ThreadsResponse>;
  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ThreadsResponse>;
  list(
    channelId: string,
    query: PublicListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ThreadsResponse> {
    if (isRequestOptions(query)) {
      return this.list(channelId, {}, query);
    }
    return this._client.get(`/channels/${channelId}/threads/archived/public`, { query, ...options });
  }
}

export interface PublicListParams {
  before?: string;

  limit?: number;
}

export declare namespace Public {
  export { type PublicListParams as PublicListParams };
}

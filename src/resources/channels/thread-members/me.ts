// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Me extends APIResource {
  delete(channelId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/thread-members/@me`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  put(channelId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/channels/${channelId}/thread-members/@me`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

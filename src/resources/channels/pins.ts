// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PinsAPI from './pins';
import * as Shared from '../shared';

export class Pins extends APIResource {
  update(channelId: string, messageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/channels/${channelId}/pins/${messageId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<PinListResponse | null> {
    return this._client.get(`/channels/${channelId}/pins`, options);
  }

  delete(channelId: string, messageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/pins/${messageId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export type PinListResponse = Array<Shared.MessageResponse>

export declare namespace Pins {
  export {
    type PinListResponse as PinListResponse
  };
}

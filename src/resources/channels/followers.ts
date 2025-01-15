// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Followers extends APIResource {
  create(
    channelId: string,
    body: FollowerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChannelFollowerResponse> {
    return this._client.post(`/channels/${channelId}/followers`, { body, ...options });
  }
}

export interface ChannelFollowerResponse {
  channel_id: string;

  webhook_id: string;
}

export interface FollowerCreateParams {
  webhook_channel_id: string;
}

export declare namespace Followers {
  export {
    type ChannelFollowerResponse as ChannelFollowerResponse,
    type FollowerCreateParams as FollowerCreateParams,
  };
}

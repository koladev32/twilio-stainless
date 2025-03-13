// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class StageInstances extends APIResource {
  create(
    body: StageInstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StageInstanceResponse> {
    return this._client.post('/stage-instances', { body, ...options });
  }

  retrieve(channelId: string, options?: Core.RequestOptions): Core.APIPromise<StageInstanceResponse> {
    return this._client.get(`/stage-instances/${channelId}`, options);
  }

  update(
    channelId: string,
    body: StageInstanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StageInstanceResponse> {
    return this._client.patch(`/stage-instances/${channelId}`, { body, ...options });
  }

  delete(channelId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/stage-instances/${channelId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface StageInstance {
  id: string;

  channel_id: string;

  guild_id: string;

  /**
   * - `1` - The Stage instance is visible publicly. (deprecated)
   * - `2` - The Stage instance is visible publicly. (deprecated)
   */
  privacy_level: 1 | 2;

  topic: string;

  discoverable_disabled?: boolean | null;

  guild_scheduled_event_id?: string | null;
}

export interface StageInstanceResponse {
  id: string;

  channel_id: string;

  guild_id: string;

  /**
   * - `1` - The Stage instance is visible publicly. (deprecated)
   * - `2` - The Stage instance is visible publicly. (deprecated)
   */
  privacy_level: 1 | 2;

  topic: string;

  discoverable_disabled?: boolean | null;

  guild_scheduled_event_id?: string | null;
}

export interface StageInstanceCreateParams {
  channel_id: string;

  topic: string;

  guild_scheduled_event_id?: string | null;

  /**
   * - `1` - The Stage instance is visible publicly. (deprecated)
   * - `2` - The Stage instance is visible publicly. (deprecated)
   */
  privacy_level?: 1 | 2 | null;

  send_start_notification?: boolean | null;
}

export interface StageInstanceUpdateParams {
  /**
   * - `1` - The Stage instance is visible publicly. (deprecated)
   * - `2` - The Stage instance is visible publicly. (deprecated)
   */
  privacy_level?: 1 | 2;

  topic?: string;
}

export declare namespace StageInstances {
  export {
    type StageInstance as StageInstance,
    type StageInstanceResponse as StageInstanceResponse,
    type StageInstanceCreateParams as StageInstanceCreateParams,
    type StageInstanceUpdateParams as StageInstanceUpdateParams,
  };
}

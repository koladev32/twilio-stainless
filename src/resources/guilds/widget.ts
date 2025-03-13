// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as WidgetAPI from './widget';

export class Widget extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<WidgetSettings> {
    return this._client.get(`/guilds/${guildId}/widget`, options);
  }

  update(guildId: string, body: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<WidgetSettings> {
    return this._client.patch(`/guilds/${guildId}/widget`, { body, ...options });
  }
}

export interface WidgetSettings {
  enabled: boolean;

  channel_id?: string | null;
}

export interface WidgetUpdateParams {
  channel_id?: string | null;

  enabled?: boolean | null;
}

export declare namespace Widget {
  export {
    type WidgetSettings as WidgetSettings,
    type WidgetUpdateParams as WidgetUpdateParams
  };
}

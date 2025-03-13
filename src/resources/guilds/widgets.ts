// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as WidgetsAPI from './widgets';
import * as GuildsAPI from './guilds';
import { type Response } from '../../_shims/index';

export class Widgets extends APIResource {
  retrieveJson(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildsAPI.Widget> {
    return this._client.get(`/guilds/${guildId}/widget.json`, options);
  }

  retrievePng(guildId: string, query?: WidgetRetrievePngParams, options?: Core.RequestOptions): Core.APIPromise<Response>
  retrievePng(guildId: string, options?: Core.RequestOptions): Core.APIPromise<Response>
  retrievePng(guildId: string, query: WidgetRetrievePngParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrievePng(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/widget.png`, { query, ...options, headers: { Accept: 'image/png', ...options?.headers }, __binaryResponse: true });
  }
}

export interface WidgetRetrievePngParams {
  /**
   * - `shield` - shield style widget with Discord icon and guild members online
   *   count
   * - `banner1` - large image with guild icon, name and online count. "POWERED BY
   *   DISCORD" as the footer of the widget
   * - `banner2` - smaller widget style with guild icon, name and online count. Split
   *   on the right with Discord logo
   * - `banner3` - large image with guild icon, name and online count. In the footer,
   *   Discord logo on the left and "Chat Now" on the right
   * - `banner4` - large Discord logo at the top of the widget. Guild icon, name and
   *   online count in the middle portion of the widget and a "JOIN MY SERVER" button
   *   at the bottom
   */
  style?: 'shield' | 'banner1' | 'banner2' | 'banner3' | 'banner4';
}

export declare namespace Widgets {
  export {
    type WidgetRetrievePngParams as WidgetRetrievePngParams
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ConnectionsAPI from './connections';

export class Connections extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<ConnectionListResponse | null> {
    return this._client.get('/users/@me/connections', options);
  }
}

export interface ConnectedAccountResponse {
  id: string;

  friend_sync: boolean;

  show_activity: boolean;

  two_way_link: boolean;

  type: 'battlenet' | 'bluesky' | 'bungie' | 'ebay' | 'epicgames' | 'facebook' | 'github' | 'instagram' | 'mastodon' | 'leagueoflegends' | 'paypal' | 'playstation' | 'reddit' | 'riotgames' | 'roblox' | 'skype' | 'spotify' | 'steam' | 'tiktok' | 'twitch' | 'twitter' | 'xbox' | 'youtube' | 'domain';

  verified: boolean;

  visibility: 0 | 1;

  integrations?: Array<ConnectedAccountResponse.Integration> | null;

  name?: string | null;

  revoked?: boolean | null;
}

export namespace ConnectedAccountResponse {
  export interface Integration {
    id: string;

    account: Integration.Account;

    guild: Integration.Guild;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';
  }

  export namespace Integration {
    export interface Account {
      id: string;

      name?: string | null;
    }

    export interface Guild {
      id: string;

      name: string;

      icon?: string | null;
    }
  }
}

export type ConnectionListResponse = Array<ConnectedAccountResponse>

export declare namespace Connections {
  export {
    type ConnectedAccountResponse as ConnectedAccountResponse,
    type ConnectionListResponse as ConnectionListResponse
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as ChannelsAPI from './channels';
import { ChannelCreateParams, ChannelCreateResponse, Channels, PrivateChannelResponse, PrivateGroupChannelResponse } from './channels';
import * as ConnectionsAPI from './connections';
import { ConnectedAccountResponse, ConnectionListResponse, Connections } from './connections';
import * as ApplicationsAPI from './applications/applications';
import { Applications } from './applications/applications';
import * as GuildsAPI from './guilds/guilds';
import { GuildListParams, GuildListResponse, Guilds, MyGuildResponse } from './guilds/guilds';

export class Users extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  channels: ChannelsAPI.Channels = new ChannelsAPI.Channels(this._client);
  guilds: GuildsAPI.Guilds = new GuildsAPI.Guilds(this._client);
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);

  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/users/${userId}`, options);
  }

  retrieveMe(options?: Core.RequestOptions): Core.APIPromise<UserPiiResponse> {
    return this._client.get('/users/@me', options);
  }

  updateMe(body: UserUpdateMeParams, options?: Core.RequestOptions): Core.APIPromise<UserPiiResponse> {
    return this._client.patch('/users/@me', { body, ...options });
  }
}

export interface User {
  id: string;

  discriminator: string;

  flags: number;

  public_flags: number;

  username: string;

  accent_color?: number | null;

  avatar?: string | null;

  avatar_decoration_data?: User.AvatarDecorationData | null;

  banner?: string | null;

  bot?: boolean | null;

  clan?: unknown | null;

  global_name?: string | null;

  system?: boolean | null;
}

export namespace User {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export interface UserPiiResponse {
  id: string;

  discriminator: string;

  flags: number;

  /**
   * - `ar` - The ar locale
   * - `bg` - The bg locale
   * - `cs` - The cs locale
   * - `da` - The da locale
   * - `de` - The de locale
   * - `el` - The el locale
   * - `en-GB` - The en-GB locale
   * - `en-US` - The en-US locale
   * - `es-419` - The es-419 locale
   * - `es-ES` - The es-ES locale
   * - `fi` - The fi locale
   * - `fr` - The fr locale
   * - `he` - The he locale
   * - `hi` - The hi locale
   * - `hr` - The hr locale
   * - `hu` - The hu locale
   * - `id` - The id locale
   * - `it` - The it locale
   * - `ja` - The ja locale
   * - `ko` - The ko locale
   * - `lt` - The lt locale
   * - `nl` - The nl locale
   * - `no` - The no locale
   * - `pl` - The pl locale
   * - `pt-BR` - The pt-BR locale
   * - `ro` - The ro locale
   * - `ru` - The ru locale
   * - `sv-SE` - The sv-SE locale
   * - `th` - The th locale
   * - `tr` - The tr locale
   * - `uk` - The uk locale
   * - `vi` - The vi locale
   * - `zh-CN` - The zh-CN locale
   * - `zh-TW` - The zh-TW locale
   */
  locale: 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en-GB' | 'en-US' | 'es-419' | 'es-ES' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'nl' | 'no' | 'pl' | 'pt-BR' | 'ro' | 'ru' | 'sv-SE' | 'th' | 'tr' | 'uk' | 'vi' | 'zh-CN' | 'zh-TW';

  mfa_enabled: boolean;

  public_flags: number;

  username: string;

  accent_color?: number | null;

  avatar?: string | null;

  avatar_decoration_data?: UserPiiResponse.AvatarDecorationData | null;

  banner?: string | null;

  bot?: boolean | null;

  clan?: unknown | null;

  email?: string | null;

  global_name?: string | null;

  /**
   * - `0` - None
   * - `1` - Nitro Classic
   * - `2` - Nitro Standard
   * - `3` - Nitro Basic
   */
  premium_type?: 0 | 1 | 2 | 3 | null;

  system?: boolean | null;

  verified?: boolean | null;
}

export namespace UserPiiResponse {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export interface UserUpdateMeParams {
  username: string;

  avatar?: string | null;

  banner?: string | null;
}

Users.Connections = Connections;
Users.Channels = Channels;
Users.Guilds = Guilds;
Users.Applications = Applications;

export declare namespace Users {
  export {
    type User as User,
    type UserPiiResponse as UserPiiResponse,
    type UserUpdateMeParams as UserUpdateMeParams
  };

  export {
    Connections as Connections,
    type ConnectedAccountResponse as ConnectedAccountResponse,
    type ConnectionListResponse as ConnectionListResponse
  };

  export {
    Channels as Channels,
    type PrivateChannelResponse as PrivateChannelResponse,
    type PrivateGroupChannelResponse as PrivateGroupChannelResponse,
    type ChannelCreateResponse as ChannelCreateResponse,
    type ChannelCreateParams as ChannelCreateParams
  };

  export {
    Guilds as Guilds,
    type MyGuildResponse as MyGuildResponse,
    type GuildListResponse as GuildListResponse,
    type GuildListParams as GuildListParams
  };

  export {
    Applications as Applications
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as RecipientsAPI from './recipients';
import * as ChannelsAPI from '../users/channels';
import * as UsersAPI from '../users/users';

export class Recipients extends APIResource {
  update(channelId: string, userId: string, body: RecipientUpdateParams, options?: Core.RequestOptions): Core.APIPromise<RecipientUpdateResponse> {
    return this._client.put(`/channels/${channelId}/recipients/${userId}`, { body, ...options });
  }

  delete(channelId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/recipients/${userId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface PrivateChannelResponse {
  id: string;

  flags: number;

  recipients: Array<UsersAPI.User>;

  /**
   * - `1` - A direct message between users
   * - `3` - A direct message between multiple users
   * - `0` - A text channel within a server
   * - `2` - A voice channel within a server
   * - `4` - An organizational category that contains up to 50 channels
   * - `5` - A channel that users can follow and crosspost into their own server
   *   (formerly news channels)
   * - `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel
   * - `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY
   *   channel type set
   * - `12` - A temporary sub-channel within a GUILD_TEXT channel that is only
   *   viewable by those invited and those with the MANAGE_THREADS permission
   * - `13` - A voice channel for hosting events with an audience
   * - `14` - The channel in a hub containing the listed servers
   * - `15` - Channel that can only contain threads
   */
  type: 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;

  last_message_id?: string | null;

  last_pin_timestamp?: string | null;
}

export interface PrivateGroupChannelResponse {
  id: string;

  flags: number;

  recipients: Array<UsersAPI.User>;

  /**
   * - `1` - A direct message between users
   * - `3` - A direct message between multiple users
   * - `0` - A text channel within a server
   * - `2` - A voice channel within a server
   * - `4` - An organizational category that contains up to 50 channels
   * - `5` - A channel that users can follow and crosspost into their own server
   *   (formerly news channels)
   * - `10` - A temporary sub-channel within a GUILD_ANNOUNCEMENT channel
   * - `11` - A temporary sub-channel within a GUILD_TEXT or GUILD_THREADS_ONLY
   *   channel type set
   * - `12` - A temporary sub-channel within a GUILD_TEXT channel that is only
   *   viewable by those invited and those with the MANAGE_THREADS permission
   * - `13` - A voice channel for hosting events with an audience
   * - `14` - The channel in a hub containing the listed servers
   * - `15` - Channel that can only contain threads
   */
  type: 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;

  application_id?: string | null;

  icon?: string | null;

  last_message_id?: string | null;

  last_pin_timestamp?: string | null;

  managed?: boolean | null;

  name?: string | null;

  owner_id?: string | null;
}

export type RecipientUpdateResponse = ChannelsAPI.PrivateChannelResponse | ChannelsAPI.PrivateGroupChannelResponse

export interface RecipientUpdateParams {
  access_token?: string | null;

  nick?: string | null;
}

export declare namespace Recipients {
  export {
    type PrivateChannelResponse as PrivateChannelResponse,
    type PrivateGroupChannelResponse as PrivateGroupChannelResponse,
    type RecipientUpdateResponse as RecipientUpdateResponse,
    type RecipientUpdateParams as RecipientUpdateParams
  };
}

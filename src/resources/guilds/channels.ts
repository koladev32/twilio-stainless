// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ChannelsAPI from '../channels/channels';
import * as UsersChannelsAPI from '../users/channels';

export class Channels extends APIResource {
  create(
    guildId: string,
    body: ChannelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.GuildChannel> {
    return this._client.post(`/guilds/${guildId}/channels`, { body, ...options });
  }

  update(guildId: string, body: ChannelUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.patch(`/guilds/${guildId}/channels`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<ChannelListResponse | null> {
    return this._client.get(`/guilds/${guildId}/channels`, options);
  }
}

export type ChannelListResponse = Array<
  | Shared.GuildChannel
  | UsersChannelsAPI.PrivateChannelResponse
  | UsersChannelsAPI.PrivateGroupChannelResponse
  | ChannelsAPI.Thread
>;

export interface ChannelCreateParams {
  name: string;

  available_tags?: Array<ChannelCreateParams.AvailableTag | null> | null;

  bitrate?: number | null;

  /**
   * - `60` - One hour
   * - `1440` - One day
   * - `4320` - Three days
   * - `10080` - Seven days
   */
  default_auto_archive_duration?: 60 | 1440 | 4320 | 10080 | null;

  /**
   * - `0` - No default has been set for forum channel
   * - `1` - Display posts as a list
   * - `2` - Display posts as a collection of tiles
   */
  default_forum_layout?: 0 | 1 | 2 | null;

  default_reaction_emoji?: ChannelCreateParams.DefaultReactionEmoji | null;

  /**
   * - `0` - Sort forum posts by activity
   * - `1` - Sort forum posts by creation time (from most recent to oldest)
   */
  default_sort_order?: 0 | 1 | null;

  default_thread_rate_limit_per_user?: number | null;

  nsfw?: boolean | null;

  parent_id?: string | null;

  permission_overwrites?: Array<ChannelCreateParams.PermissionOverwrite> | null;

  position?: number | null;

  rate_limit_per_user?: number | null;

  rtc_region?: string | null;

  topic?: string | null;

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
  type?: 1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15 | null;

  user_limit?: number | null;

  /**
   * - `1` - Discord chooses the quality for optimal performance
   * - `2` - 720p
   */
  video_quality_mode?: 1 | 2 | null;
}

export namespace ChannelCreateParams {
  export interface AvailableTag {
    name: string;

    emoji_id?: string | null;

    emoji_name?: string | null;

    moderated?: boolean | null;
  }

  export interface DefaultReactionEmoji {
    emoji_id?: string | null;

    emoji_name?: string | null;
  }

  export interface PermissionOverwrite {
    id: string;

    allow?: number | null;

    deny?: number | null;

    type?: 0 | 1 | null;
  }
}

export type ChannelUpdateParams = Array<ChannelUpdateParams.Body>;

export namespace ChannelUpdateParams {
  export interface Body {
    id?: string;

    lock_permissions?: boolean | null;

    parent_id?: string | null;

    position?: number | null;
  }
}

export declare namespace Channels {
  export {
    type ChannelListResponse as ChannelListResponse,
    type ChannelCreateParams as ChannelCreateParams,
    type ChannelUpdateParams as ChannelUpdateParams,
  };
}

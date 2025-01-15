// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ChannelsAPI from '../channels';
import * as ThreadMembersAPI from '../thread-members/thread-members';

export class Threads extends APIResource {
  create(
    channelId: string,
    messageId: string,
    body: ThreadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChannelsAPI.Thread> {
    return this._client.post(`/channels/${channelId}/messages/${messageId}/threads`, { body, ...options });
  }
}

export interface ThreadResponse {
  id: string;

  flags: number;

  guild_id: string;

  member_count: number;

  message_count: number;

  name: string;

  owner_id: string;

  total_message_sent: number;

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

  applied_tags?: Array<string> | null;

  bitrate?: number | null;

  last_message_id?: string | null;

  last_pin_timestamp?: string | null;

  member?: ThreadMembersAPI.ThreadMemberResponse | null;

  parent_id?: string | null;

  permissions?: string | null;

  rate_limit_per_user?: number | null;

  rtc_region?: string | null;

  thread_metadata?: ThreadResponse.ThreadMetadata | null;

  user_limit?: number | null;

  /**
   * - `1` - Discord chooses the quality for optimal performance
   * - `2` - 720p
   */
  video_quality_mode?: 1 | 2 | null;
}

export namespace ThreadResponse {
  export interface ThreadMetadata {
    archived: boolean;

    /**
     * - `60` - One hour
     * - `1440` - One day
     * - `4320` - Three days
     * - `10080` - Seven days
     */
    auto_archive_duration: 60 | 1440 | 4320 | 10080;

    locked: boolean;

    archive_timestamp?: string | null;

    create_timestamp?: string | null;

    invitable?: boolean | null;
  }
}

export interface ThreadCreateParams {
  name: string;

  /**
   * - `60` - One hour
   * - `1440` - One day
   * - `4320` - Three days
   * - `10080` - Seven days
   */
  auto_archive_duration?: 60 | 1440 | 4320 | 10080 | null;

  rate_limit_per_user?: number | null;
}

export declare namespace Threads {
  export { type ThreadResponse as ThreadResponse, type ThreadCreateParams as ThreadCreateParams };
}

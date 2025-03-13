// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as FollowersAPI from './followers';
import { ChannelFollowerResponse, FollowerCreateParams, Followers } from './followers';
import * as InvitesAPI from './invites';
import { InviteCreateParams, InviteCreateResponse, InviteListResponse, Invites } from './invites';
import * as PermissionsAPI from './permissions';
import { PermissionUpdateParams, Permissions } from './permissions';
import * as PinsAPI from './pins';
import { PinListResponse, Pins } from './pins';
import * as RecipientsAPI from './recipients';
import {
  PrivateChannelResponse,
  PrivateGroupChannelResponse,
  RecipientUpdateParams,
  RecipientUpdateResponse,
  Recipients,
} from './recipients';
import * as WebhooksAPI from './webhooks';
import { WebhookCreateParams, WebhookListResponse, Webhooks } from './webhooks';
import * as UsersChannelsAPI from '../users/channels';
import * as UsersAPI from '../users/users';
import * as MessagesAPI from './messages/messages';
import {
  MessageBulkDeleteParams,
  MessageCreateParams,
  MessageListParams,
  MessageListResponse,
  MessageUpdateParams,
  Messages,
} from './messages/messages';
import * as PollsAPI from './polls/polls';
import { PollAnswerDetailsResponse, Polls } from './polls/polls';
import * as ThreadMembersAPI from './thread-members/thread-members';
import {
  ThreadMemberListParams,
  ThreadMemberListResponse,
  ThreadMemberResponse,
  ThreadMemberRetrieveParams,
  ThreadMembers,
} from './thread-members/thread-members';
import * as ThreadsAPI from './threads/threads';
import { CreatedThread, ThreadCreateParams, Threads } from './threads/threads';
import * as UsersUsersAPI from './users/users';
import { Users } from './users/users';

export class Channels extends APIResource {
  users: UsersUsersAPI.Users = new UsersUsersAPI.Users(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
  threadMembers: ThreadMembersAPI.ThreadMembers = new ThreadMembersAPI.ThreadMembers(this._client);
  polls: PollsAPI.Polls = new PollsAPI.Polls(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);
  followers: FollowersAPI.Followers = new FollowersAPI.Followers(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  pins: PinsAPI.Pins = new PinsAPI.Pins(this._client);

  retrieve(channelId: string, options?: Core.RequestOptions): Core.APIPromise<ChannelRetrieveResponse> {
    return this._client.get(`/channels/${channelId}`, options);
  }

  update(
    channelId: string,
    body: ChannelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChannelUpdateResponse> {
    return this._client.patch(`/channels/${channelId}`, { body, ...options });
  }

  delete(channelId: string, options?: Core.RequestOptions): Core.APIPromise<ChannelDeleteResponse> {
    return this._client.delete(`/channels/${channelId}`, options);
  }

  sendSoundboardSound(
    channelId: string,
    body: ChannelSendSoundboardSoundParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/channels/${channelId}/send-soundboard-sound`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  typing(channelId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(`/channels/${channelId}/typing`, options);
  }
}

export interface PrivateChannel {
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

export interface PrivateGroupChannel {
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

export interface Thread {
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

  thread_metadata?: Thread.ThreadMetadata | null;

  user_limit?: number | null;

  /**
   * - `1` - Discord chooses the quality for optimal performance
   * - `2` - 720p
   */
  video_quality_mode?: 1 | 2 | null;
}

export namespace Thread {
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

export type TypingIndicator = unknown;

export type ChannelRetrieveResponse =
  | Shared.GuildChannel
  | UsersChannelsAPI.PrivateChannelResponse
  | UsersChannelsAPI.PrivateGroupChannelResponse
  | Thread;

export type ChannelUpdateResponse =
  | Shared.GuildChannel
  | UsersChannelsAPI.PrivateChannelResponse
  | UsersChannelsAPI.PrivateGroupChannelResponse
  | Thread;

export type ChannelDeleteResponse =
  | Shared.GuildChannel
  | UsersChannelsAPI.PrivateChannelResponse
  | UsersChannelsAPI.PrivateGroupChannelResponse
  | Thread;

export type ChannelUpdateParams =
  | ChannelUpdateParams.PrivateChannelRequestPartial
  | ChannelUpdateParams.UpdateGuildChannelRequestPartial
  | ChannelUpdateParams.UpdateThreadRequestPartial;

export declare namespace ChannelUpdateParams {
  export interface PrivateChannelRequestPartial {
    icon?: string | null;

    name?: string | null;
  }

  export interface UpdateGuildChannelRequestPartial {
    available_tags?: Array<UpdateGuildChannelRequestPartial.AvailableTag> | null;

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

    default_reaction_emoji?: UpdateGuildChannelRequestPartial.DefaultReactionEmoji | null;

    /**
     * - `0` - Sort forum posts by activity
     * - `1` - Sort forum posts by creation time (from most recent to oldest)
     */
    default_sort_order?: 0 | 1 | null;

    default_thread_rate_limit_per_user?: number | null;

    flags?: number | null;

    name?: string;

    nsfw?: boolean | null;

    parent_id?: string | null;

    permission_overwrites?: Array<UpdateGuildChannelRequestPartial.PermissionOverwrite> | null;

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

  export namespace UpdateGuildChannelRequestPartial {
    export interface AvailableTag {
      name: string;

      id?: string | null;

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

  export interface UpdateThreadRequestPartial {
    applied_tags?: Array<string> | null;

    archived?: boolean | null;

    /**
     * - `60` - One hour
     * - `1440` - One day
     * - `4320` - Three days
     * - `10080` - Seven days
     */
    auto_archive_duration?: 60 | 1440 | 4320 | 10080 | null;

    bitrate?: number | null;

    flags?: number | null;

    invitable?: boolean | null;

    locked?: boolean | null;

    name?: string | null;

    rate_limit_per_user?: number | null;

    rtc_region?: string | null;

    user_limit?: number | null;

    /**
     * - `1` - Discord chooses the quality for optimal performance
     * - `2` - 720p
     */
    video_quality_mode?: 1 | 2 | null;
  }
}

export interface ChannelSendSoundboardSoundParams {
  sound_id: string;

  source_guild_id?: string | null;
}

Channels.Users = Users;
Channels.Messages = Messages;
Channels.Threads = Threads;
Channels.ThreadMembers = ThreadMembers;
Channels.Polls = Polls;
Channels.Permissions = Permissions;
Channels.Recipients = Recipients;
Channels.Followers = Followers;
Channels.Webhooks = Webhooks;
Channels.Invites = Invites;
Channels.Pins = Pins;

export declare namespace Channels {
  export {
    type PrivateChannel as PrivateChannel,
    type PrivateGroupChannel as PrivateGroupChannel,
    type Thread as Thread,
    type TypingIndicator as TypingIndicator,
    type ChannelRetrieveResponse as ChannelRetrieveResponse,
    type ChannelUpdateResponse as ChannelUpdateResponse,
    type ChannelDeleteResponse as ChannelDeleteResponse,
    type ChannelUpdateParams as ChannelUpdateParams,
    type ChannelSendSoundboardSoundParams as ChannelSendSoundboardSoundParams,
  };

  export { Users as Users };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageBulkDeleteParams as MessageBulkDeleteParams,
  };

  export {
    Threads as Threads,
    type CreatedThread as CreatedThread,
    type ThreadCreateParams as ThreadCreateParams,
  };

  export {
    ThreadMembers as ThreadMembers,
    type ThreadMemberResponse as ThreadMemberResponse,
    type ThreadMemberListResponse as ThreadMemberListResponse,
    type ThreadMemberRetrieveParams as ThreadMemberRetrieveParams,
    type ThreadMemberListParams as ThreadMemberListParams,
  };

  export { Polls as Polls, type PollAnswerDetailsResponse as PollAnswerDetailsResponse };

  export { Permissions as Permissions, type PermissionUpdateParams as PermissionUpdateParams };

  export {
    Recipients as Recipients,
    type PrivateChannelResponse as PrivateChannelResponse,
    type PrivateGroupChannelResponse as PrivateGroupChannelResponse,
    type RecipientUpdateResponse as RecipientUpdateResponse,
    type RecipientUpdateParams as RecipientUpdateParams,
  };

  export {
    Followers as Followers,
    type ChannelFollowerResponse as ChannelFollowerResponse,
    type FollowerCreateParams as FollowerCreateParams,
  };

  export {
    Webhooks as Webhooks,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
  };

  export {
    Invites as Invites,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteListResponse as InviteListResponse,
    type InviteCreateParams as InviteCreateParams,
  };

  export { Pins as Pins, type PinListResponse as PinListResponse };
}

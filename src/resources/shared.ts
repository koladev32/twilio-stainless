// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import * as Shared from './shared';
import * as StickersAPI from './stickers';
import * as EmojisAPI from './applications/emojis';
import * as ChannelsAPI from './channels/channels';
import * as RolesAPI from './guilds/roles';
import * as UsersChannelsAPI from './users/channels';
import * as UsersAPI from './users/users';
import * as ThreadMembersAPI from './channels/thread-members/thread-members';
import * as MembersAPI from './guilds/members/members';
import * as ScheduledEventsUsersAPI from './guilds/scheduled-events/users';

export interface FriendInvite {
  code: string;

  channel?: FriendInvite.Channel | null;

  created_at?: string | null;

  expires_at?: string | null;

  flags?: number | null;

  friends_count?: number | null;

  inviter?: UsersAPI.User | null;

  is_contact?: boolean | null;

  max_age?: number | null;

  max_uses?: number | null;

  type?: 0 | 1 | 2 | null;

  uses?: number | null;
}

export namespace FriendInvite {
  export interface Channel {
    id: string;

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

    icon?: string | null;

    name?: string | null;

    recipients?: Array<Channel.Recipient> | null;
  }

  export namespace Channel {
    export interface Recipient {
      username: string;
    }
  }
}

export interface GroupDmInvite {
  code: string;

  approximate_member_count?: number | null;

  channel?: GroupDmInvite.Channel | null;

  created_at?: string | null;

  expires_at?: string | null;

  inviter?: UsersAPI.User | null;

  max_age?: number | null;

  type?: 0 | 1 | 2 | null;
}

export namespace GroupDmInvite {
  export interface Channel {
    id: string;

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

    icon?: string | null;

    name?: string | null;

    recipients?: Array<Channel.Recipient> | null;
  }

  export namespace Channel {
    export interface Recipient {
      username: string;
    }
  }
}

export interface Guild {
  id: string;

  afk_timeout: 60 | 300 | 900 | 1800 | 3600;

  /**
   * - `0` - members will receive notifications for all messages by default
   * - `1` - members will receive notifications only for messages that @mention them
   *   by default
   */
  default_message_notifications: 0 | 1;

  emojis: Array<EmojisAPI.EmojiResponse>;

  /**
   * - `0` - media content will not be scanned
   * - `1` - media content sent by members without roles will be scanned
   * - `2` - media content sent by all members will be scanned
   */
  explicit_content_filter: 0 | 1 | 2;

  features: Array<'ANIMATED_BANNER' | 'ANIMATED_ICON' | 'APPLICATION_COMMAND_PERMISSIONS_V2' | 'AUTO_MODERATION' | 'BANNER' | 'COMMUNITY' | 'CREATOR_MONETIZABLE_PROVISIONAL' | 'CREATOR_STORE_PAGE' | 'DEVELOPER_SUPPORT_SERVER' | 'DISCOVERABLE' | 'FEATURABLE' | 'INVITES_DISABLED' | 'INVITE_SPLASH' | 'MEMBER_VERIFICATION_GATE_ENABLED' | 'MORE_STICKERS' | 'NEWS' | 'PARTNERED' | 'PREVIEW_ENABLED' | 'RAID_ALERTS_DISABLED' | 'ROLE_ICONS' | 'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE' | 'ROLE_SUBSCRIPTIONS_ENABLED' | 'TICKETED_EVENTS_ENABLED' | 'VANITY_URL' | 'VERIFIED' | 'VIP_REGIONS' | 'WELCOME_SCREEN_ENABLED'>;

  /**
   * - `0` - Guild has no MFA/2FA requirement for moderation actions
   * - `1` - Guild has a 2FA requirement for moderation actions
   */
  mfa_level: 0 | 1;

  name: string;

  nsfw: boolean;

  nsfw_level: 0 | 1 | 2 | 3;

  owner_id: string;

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
  preferred_locale: 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en-GB' | 'en-US' | 'es-419' | 'es-ES' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'nl' | 'no' | 'pl' | 'pt-BR' | 'ro' | 'ru' | 'sv-SE' | 'th' | 'tr' | 'uk' | 'vi' | 'zh-CN' | 'zh-TW';

  premium_progress_bar_enabled: boolean;

  premium_subscription_count: number;

  /**
   * - `0` - Guild has not unlocked any Server Boost perks
   * - `1` - Guild has unlocked Server Boost level 1 perks
   * - `2` - Guild has unlocked Server Boost level 2 perks
   * - `3` - Guild has unlocked Server Boost level 3 perks
   */
  premium_tier: 0 | 1 | 2 | 3;

  region: string;

  roles: Array<RolesAPI.GuildRole>;

  stickers: Array<GuildSticker>;

  system_channel_flags: number;

  /**
   * - `0` - unrestricted
   * - `1` - must have verified email on account
   * - `2` - must be registered on Discord for longer than 5 minutes
   * - `3` - must be a member of the server for longer than 10 minutes
   * - `4` - must have a verified phone number
   */
  verification_level: 0 | 1 | 2 | 3 | 4;

  widget_enabled: boolean;

  afk_channel_id?: string | null;

  application_id?: string | null;

  banner?: string | null;

  description?: string | null;

  discovery_splash?: string | null;

  home_header?: string | null;

  icon?: string | null;

  max_members?: number | null;

  max_presences?: number | null;

  max_stage_video_channel_users?: number | null;

  max_video_channel_users?: number | null;

  public_updates_channel_id?: string | null;

  rules_channel_id?: string | null;

  safety_alerts_channel_id?: string | null;

  splash?: string | null;

  system_channel_id?: string | null;

  vanity_url_code?: string | null;

  widget_channel_id?: string | null;
}

export interface GuildChannel {
  id: string;

  flags: number;

  guild_id: string;

  name: string;

  position: number;

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

  available_tags?: Array<GuildChannel.AvailableTag> | null;

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

  default_reaction_emoji?: GuildChannel.DefaultReactionEmoji | null;

  /**
   * - `0` - Sort forum posts by activity
   * - `1` - Sort forum posts by creation time (from most recent to oldest)
   */
  default_sort_order?: 0 | 1 | null;

  default_thread_rate_limit_per_user?: number | null;

  hd_streaming_buyer_id?: string | null;

  hd_streaming_until?: string | null;

  last_message_id?: string | null;

  last_pin_timestamp?: string | null;

  nsfw?: boolean | null;

  parent_id?: string | null;

  permission_overwrites?: Array<GuildChannel.PermissionOverwrite> | null;

  permissions?: string | null;

  rate_limit_per_user?: number | null;

  rtc_region?: string | null;

  topic?: string | null;

  user_limit?: number | null;

  /**
   * - `1` - Discord chooses the quality for optimal performance
   * - `2` - 720p
   */
  video_quality_mode?: 1 | 2 | null;
}

export namespace GuildChannel {
  export interface AvailableTag {
    id: string;

    moderated: boolean;

    name: string;

    emoji_id?: string | null;

    emoji_name?: string | null;
  }

  export interface DefaultReactionEmoji {
    emoji_id?: string | null;

    emoji_name?: string | null;
  }

  export interface PermissionOverwrite {
    id: string;

    allow: string;

    deny: string;

    type: 0 | 1;
  }
}

export interface GuildIncomingWebhook {
  id: string;

  name: string;

  /**
   * - `1` - Incoming Webhooks can post messages to channels with a generated token
   * - `2` - Channel Follower Webhooks are internal webhooks used with Channel
   *   Following to post new messages into channels
   * - `3` - Application webhooks are webhooks used with Interactions
   */
  type: 1 | 2 | 3;

  token?: string | null;

  application_id?: string | null;

  avatar?: string | null;

  channel_id?: string | null;

  guild_id?: string | null;

  url?: string | null;

  user?: UsersAPI.User | null;
}

export interface GuildInvite {
  code: string;

  approximate_member_count?: number | null;

  approximate_presence_count?: number | null;

  channel?: GuildInvite.Channel | null;

  created_at?: string | null;

  expires_at?: string | null;

  flags?: number | null;

  guild?: GuildInvite.Guild | null;

  guild_id?: string | null;

  guild_scheduled_event?: GuildInvite.GuildScheduledEvent | null;

  inviter?: UsersAPI.User | null;

  is_contact?: boolean | null;

  max_age?: number | null;

  max_uses?: number | null;

  stage_instance?: GuildInvite.StageInstance | null;

  target_application?: GuildInvite.TargetApplication | null;

  target_type?: 1 | 2 | 3 | null;

  target_user?: UsersAPI.User | null;

  temporary?: boolean | null;

  type?: 0 | 1 | 2 | null;

  uses?: number | null;
}

export namespace GuildInvite {
  export interface Channel {
    id: string;

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

    icon?: string | null;

    name?: string | null;

    recipients?: Array<Channel.Recipient> | null;
  }

  export namespace Channel {
    export interface Recipient {
      username: string;
    }
  }

  export interface Guild {
    id: string;

    features: Array<'ANIMATED_BANNER' | 'ANIMATED_ICON' | 'APPLICATION_COMMAND_PERMISSIONS_V2' | 'AUTO_MODERATION' | 'BANNER' | 'COMMUNITY' | 'CREATOR_MONETIZABLE_PROVISIONAL' | 'CREATOR_STORE_PAGE' | 'DEVELOPER_SUPPORT_SERVER' | 'DISCOVERABLE' | 'FEATURABLE' | 'INVITES_DISABLED' | 'INVITE_SPLASH' | 'MEMBER_VERIFICATION_GATE_ENABLED' | 'MORE_STICKERS' | 'NEWS' | 'PARTNERED' | 'PREVIEW_ENABLED' | 'RAID_ALERTS_DISABLED' | 'ROLE_ICONS' | 'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE' | 'ROLE_SUBSCRIPTIONS_ENABLED' | 'TICKETED_EVENTS_ENABLED' | 'VANITY_URL' | 'VERIFIED' | 'VIP_REGIONS' | 'WELCOME_SCREEN_ENABLED'>;

    name: string;

    banner?: string | null;

    description?: string | null;

    icon?: string | null;

    nsfw?: boolean | null;

    nsfw_level?: 0 | 1 | 2 | 3 | null;

    premium_subscription_count?: number | null;

    splash?: string | null;

    vanity_url_code?: string | null;

    /**
     * - `0` - unrestricted
     * - `1` - must have verified email on account
     * - `2` - must be registered on Discord for longer than 5 minutes
     * - `3` - must be a member of the server for longer than 10 minutes
     * - `4` - must have a verified phone number
     */
    verification_level?: 0 | 1 | 2 | 3 | 4 | null;
  }

  export interface GuildScheduledEvent {
    id: string;

    entity_type: 0 | 1 | 2 | 3;

    guild_id: string;

    name: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level: 2;

    scheduled_start_time: string;

    status: 1 | 2 | 3 | 4;

    channel_id?: string | null;

    creator?: UsersAPI.User | null;

    creator_id?: string | null;

    description?: string | null;

    entity_id?: string | null;

    image?: string | null;

    scheduled_end_time?: string | null;

    user_count?: number | null;

    user_rsvp?: ScheduledEventsUsersAPI.ScheduledEventUserResponse | null;
  }

  export interface StageInstance {
    topic: string;

    members?: Array<MembersAPI.GuildMemberResponse> | null;

    participant_count?: number | null;

    speaker_count?: number | null;
  }

  export interface TargetApplication {
    id: string;

    description: string;

    flags: number;

    name: string;

    verify_key: string;

    bot?: UsersAPI.User | null;

    bot_public?: boolean | null;

    bot_require_code_grant?: boolean | null;

    cover_image?: string | null;

    custom_install_url?: string | null;

    guild_id?: string | null;

    icon?: string | null;

    install_params?: TargetApplication.InstallParams | null;

    integration_types_config?: Record<string, TargetApplication.IntegrationTypesConfig> | null;

    max_participants?: number | null;

    primary_sku_id?: string | null;

    privacy_policy_url?: string | null;

    rpc_origins?: Array<string | null> | null;

    slug?: string | null;

    tags?: Array<string> | null;

    terms_of_service_url?: string | null;

    type?: 4 | null;
  }

  export namespace TargetApplication {
    export interface InstallParams {
      permissions: string;

      scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
    }

    export interface IntegrationTypesConfig {
      oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
    }

    export namespace IntegrationTypesConfig {
      export interface Oauth2InstallParams {
        permissions: string;

        scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
      }
    }
  }
}

export interface GuildSticker {
  id: string;

  available: boolean;

  guild_id: string;

  name: string;

  tags: string;

  /**
   * - `1` - an official sticker in a pack, part of Nitro or in a removed purchasable
   *   pack
   * - `2` - a sticker uploaded to a guild for the guild's members
   */
  type: 1 | 2;

  description?: string | null;

  format_type?: 1 | 2 | 3 | 4 | null;

  user?: UsersAPI.User | null;
}

export interface Message {
  id: string;

  attachments: Array<Message.Attachment>;

  author: UsersAPI.User;

  channel_id: string;

  components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

  content: string;

  embeds: Array<Message.Embed>;

  flags: number;

  mention_everyone: boolean;

  mention_roles: Array<string>;

  mentions: Array<UsersAPI.User>;

  pinned: boolean;

  timestamp: string;

  tts: boolean;

  type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

  activity?: unknown | null;

  application?: Message.Application | null;

  application_id?: string | null;

  call?: Message.Call | null;

  edited_timestamp?: string | null;

  interaction?: Message.Interaction | null;

  interaction_metadata?: Message.ApplicationCommandInteractionMetadataResponse | Message.MessageComponentInteractionMetadataResponse | Message.ModalSubmitInteractionMetadataResponse | null;

  mention_channels?: Array<Message.MentionChannel | null> | null;

  message_reference?: Message.MessageReference | null;

  message_snapshots?: Array<Message.MessageSnapshot> | null;

  nonce?: number | string | null;

  poll?: Message.Poll | null;

  position?: number | null;

  purchase_notification?: Message.PurchaseNotification | null;

  reactions?: Array<Message.Reaction> | null;

  referenced_message?: Message.ReferencedMessage | null;

  resolved?: Message.Resolved | null;

  role_subscription_data?: Message.RoleSubscriptionData | null;

  sticker_items?: Array<Message.StickerItem> | null;

  stickers?: Array<GuildSticker | StickersAPI.StandardSticker> | null;

  thread?: ChannelsAPI.Thread | null;

  webhook_id?: string | null;
}

export namespace Message {
  export interface Attachment {
    id: string;

    filename: string;

    proxy_url: string;

    size: number;

    url: string;

    application?: Attachment.Application | null;

    clip_created_at?: string | null;

    clip_participants?: Array<UsersAPI.User> | null;

    content_type?: string | null;

    description?: string | null;

    duration_secs?: number | null;

    ephemeral?: boolean | null;

    height?: number | null;

    title?: string | null;

    waveform?: string | null;

    width?: number | null;
  }

  export namespace Attachment {
    export interface Application {
      id: string;

      description: string;

      flags: number;

      name: string;

      verify_key: string;

      bot?: UsersAPI.User | null;

      bot_public?: boolean | null;

      bot_require_code_grant?: boolean | null;

      cover_image?: string | null;

      custom_install_url?: string | null;

      guild_id?: string | null;

      icon?: string | null;

      install_params?: Application.InstallParams | null;

      integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

      max_participants?: number | null;

      primary_sku_id?: string | null;

      privacy_policy_url?: string | null;

      rpc_origins?: Array<string | null> | null;

      slug?: string | null;

      tags?: Array<string> | null;

      terms_of_service_url?: string | null;

      type?: 4 | null;
    }

    export namespace Application {
      export interface InstallParams {
        permissions: string;

        scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
      }

      export interface IntegrationTypesConfig {
        oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
      }

      export namespace IntegrationTypesConfig {
        export interface Oauth2InstallParams {
          permissions: string;

          scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
        }
      }
    }
  }

  export interface ActionRowComponentResponse {
    id: number;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
  }

  export namespace ActionRowComponentResponse {
    export interface ButtonComponentResponse {
      id: number;

      style: 1 | 2 | 3 | 4 | 5 | 6;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      custom_id?: string | null;

      disabled?: boolean | null;

      emoji?: ButtonComponentResponse.Emoji | null;

      label?: string | null;

      sku_id?: string | null;

      url?: string | null;
    }

    export namespace ButtonComponentResponse {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }

    export interface ChannelSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace ChannelSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface MentionableSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace MentionableSelectComponentResponse {
      export interface RoleSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }

      export interface UserSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface RoleSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace RoleSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface StringSelectComponentResponse {
      id: number;

      custom_id: string;

      options: Array<StringSelectComponentResponse.Option>;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace StringSelectComponentResponse {
      export interface Option {
        label: string;

        value: string;

        default?: boolean | null;

        description?: string | null;

        emoji?: Option.Emoji | null;
      }

      export namespace Option {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }
    }

    export interface TextInputComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Single-line input
       * - `2` - Multi-line input
       */
      style: 1 | 2;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      label?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      placeholder?: string | null;

      required?: boolean | null;

      value?: string | null;
    }

    export interface UserSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace UserSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }
  }

  export interface ButtonComponentResponse {
    id: number;

    style: 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    custom_id?: string | null;

    disabled?: boolean | null;

    emoji?: ButtonComponentResponse.Emoji | null;

    label?: string | null;

    sku_id?: string | null;

    url?: string | null;
  }

  export namespace ButtonComponentResponse {
    export interface Emoji {
      name: string;

      id?: string | null;

      animated?: boolean | null;
    }
  }

  export interface ChannelSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

    default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace ChannelSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface MentionableSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace MentionableSelectComponentResponse {
    export interface RoleSelectDefaultValueResponse {
      id: string;

      type: 'user' | 'role' | 'channel';
    }

    export interface UserSelectDefaultValueResponse {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface RoleSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace RoleSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface StringSelectComponentResponse {
    id: number;

    custom_id: string;

    options: Array<StringSelectComponentResponse.Option>;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace StringSelectComponentResponse {
    export interface Option {
      label: string;

      value: string;

      default?: boolean | null;

      description?: string | null;

      emoji?: Option.Emoji | null;
    }

    export namespace Option {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }
  }

  export interface TextInputComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Single-line input
     * - `2` - Multi-line input
     */
    style: 1 | 2;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    label?: string | null;

    max_length?: number | null;

    min_length?: number | null;

    placeholder?: string | null;

    required?: boolean | null;

    value?: string | null;
  }

  export interface UserSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace UserSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface Embed {
    type: string;

    author?: Embed.Author | null;

    color?: number | null;

    description?: string | null;

    fields?: Array<Embed.Field> | null;

    footer?: Embed.Footer | null;

    image?: Embed.Image | null;

    provider?: Embed.Provider | null;

    thumbnail?: Embed.Thumbnail | null;

    timestamp?: string | null;

    title?: string | null;

    url?: string | null;

    video?: Embed.Video | null;
  }

  export namespace Embed {
    export interface Author {
      name: string;

      icon_url?: string | null;

      proxy_icon_url?: string | null;

      url?: string | null;
    }

    export interface Field {
      inline: boolean;

      name: string;

      value: string;
    }

    export interface Footer {
      text: string;

      icon_url?: string | null;

      proxy_icon_url?: string | null;
    }

    export interface Image {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }

    export interface Provider {
      name: string;

      url?: string | null;
    }

    export interface Thumbnail {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }

    export interface Video {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }
  }

  export interface Application {
    id: string;

    description: string;

    name: string;

    bot?: UsersAPI.User | null;

    cover_image?: string | null;

    icon?: string | null;

    primary_sku_id?: string | null;

    type?: 4 | null;
  }

  export interface Call {
    participants: Array<string>;

    ended_timestamp?: string | null;
  }

  export interface Interaction {
    id: string;

    name: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    name_localized?: string | null;

    user?: UsersAPI.User | null;
  }

  export interface ApplicationCommandInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    target_message_id?: string | null;

    target_user?: UsersAPI.User | null;

    user?: UsersAPI.User | null;
  }

  export interface MessageComponentInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    interacted_message_id: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    user?: UsersAPI.User | null;
  }

  export interface ModalSubmitInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse.ApplicationCommandInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse.MessageComponentInteractionMetadataResponse;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    user?: UsersAPI.User | null;
  }

  export namespace ModalSubmitInteractionMetadataResponse {
    export interface ApplicationCommandInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      target_message_id?: string | null;

      target_user?: UsersAPI.User | null;

      user?: UsersAPI.User | null;
    }

    export interface MessageComponentInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      interacted_message_id: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }
  }

  export interface MentionChannel {
    id: string;

    guild_id: string;

    name: string;

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
  }

  export interface MessageReference {
    channel_id: string;

    guild_id?: string | null;

    message_id?: string | null;

    /**
     * - `0` - Reference to a message
     */
    type?: 0 | null;
  }

  export interface MessageSnapshot {
    message?: MessageSnapshot.Message | null;
  }

  export namespace MessageSnapshot {
    export interface Message {
      attachments: Array<Message.Attachment>;

      components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

      content: string;

      embeds: Array<Message.Embed>;

      flags: number;

      mention_roles: Array<string>;

      mentions: Array<UsersAPI.User>;

      timestamp: string;

      type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

      edited_timestamp?: string | null;

      resolved?: Message.Resolved | null;

      sticker_items?: Array<Message.StickerItem> | null;

      stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;
    }

    export namespace Message {
      export interface Attachment {
        id: string;

        filename: string;

        proxy_url: string;

        size: number;

        url: string;

        application?: Attachment.Application | null;

        clip_created_at?: string | null;

        clip_participants?: Array<UsersAPI.User> | null;

        content_type?: string | null;

        description?: string | null;

        duration_secs?: number | null;

        ephemeral?: boolean | null;

        height?: number | null;

        title?: string | null;

        waveform?: string | null;

        width?: number | null;
      }

      export namespace Attachment {
        export interface Application {
          id: string;

          description: string;

          flags: number;

          name: string;

          verify_key: string;

          bot?: UsersAPI.User | null;

          bot_public?: boolean | null;

          bot_require_code_grant?: boolean | null;

          cover_image?: string | null;

          custom_install_url?: string | null;

          guild_id?: string | null;

          icon?: string | null;

          install_params?: Application.InstallParams | null;

          integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

          max_participants?: number | null;

          primary_sku_id?: string | null;

          privacy_policy_url?: string | null;

          rpc_origins?: Array<string | null> | null;

          slug?: string | null;

          tags?: Array<string> | null;

          terms_of_service_url?: string | null;

          type?: 4 | null;
        }

        export namespace Application {
          export interface InstallParams {
            permissions: string;

            scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
          }

          export interface IntegrationTypesConfig {
            oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
          }

          export namespace IntegrationTypesConfig {
            export interface Oauth2InstallParams {
              permissions: string;

              scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
            }
          }
        }
      }

      export interface ActionRowComponentResponse {
        id: number;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
      }

      export namespace ActionRowComponentResponse {
        export interface ButtonComponentResponse {
          id: number;

          style: 1 | 2 | 3 | 4 | 5 | 6;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          custom_id?: string | null;

          disabled?: boolean | null;

          emoji?: ButtonComponentResponse.Emoji | null;

          label?: string | null;

          sku_id?: string | null;

          url?: string | null;
        }

        export namespace ButtonComponentResponse {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }

        export interface ChannelSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace ChannelSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface MentionableSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace MentionableSelectComponentResponse {
          export interface RoleSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }

          export interface UserSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface RoleSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace RoleSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface StringSelectComponentResponse {
          id: number;

          custom_id: string;

          options: Array<StringSelectComponentResponse.Option>;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace StringSelectComponentResponse {
          export interface Option {
            label: string;

            value: string;

            default?: boolean | null;

            description?: string | null;

            emoji?: Option.Emoji | null;
          }

          export namespace Option {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }
        }

        export interface TextInputComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Single-line input
           * - `2` - Multi-line input
           */
          style: 1 | 2;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          label?: string | null;

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }

        export interface UserSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace UserSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }
      }

      export interface ButtonComponentResponse {
        id: number;

        style: 1 | 2 | 3 | 4 | 5 | 6;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        custom_id?: string | null;

        disabled?: boolean | null;

        emoji?: ButtonComponentResponse.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentResponse {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }

      export interface ChannelSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentResponse {
        export interface RoleSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentResponse {
        id: number;

        custom_id: string;

        options: Array<StringSelectComponentResponse.Option>;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace StringSelectComponentResponse {
        export interface Option {
          label: string;

          value: string;

          default?: boolean | null;

          description?: string | null;

          emoji?: Option.Emoji | null;
        }

        export namespace Option {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }
      }

      export interface TextInputComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Single-line input
         * - `2` - Multi-line input
         */
        style: 1 | 2;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        label?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        placeholder?: string | null;

        required?: boolean | null;

        value?: string | null;
      }

      export interface UserSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface Embed {
        type: string;

        author?: Embed.Author | null;

        color?: number | null;

        description?: string | null;

        fields?: Array<Embed.Field> | null;

        footer?: Embed.Footer | null;

        image?: Embed.Image | null;

        provider?: Embed.Provider | null;

        thumbnail?: Embed.Thumbnail | null;

        timestamp?: string | null;

        title?: string | null;

        url?: string | null;

        video?: Embed.Video | null;
      }

      export namespace Embed {
        export interface Author {
          name: string;

          icon_url?: string | null;

          proxy_icon_url?: string | null;

          url?: string | null;
        }

        export interface Field {
          inline: boolean;

          name: string;

          value: string;
        }

        export interface Footer {
          text: string;

          icon_url?: string | null;

          proxy_icon_url?: string | null;
        }

        export interface Image {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }

        export interface Provider {
          name: string;

          url?: string | null;
        }

        export interface Thumbnail {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }

        export interface Video {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }
      }

      export interface Resolved {
        channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

        members: Record<string, MembersAPI.GuildMemberResponse>;

        roles: Record<string, RolesAPI.GuildRole>;

        users: Record<string, UsersAPI.User>;
      }

      export interface StickerItem {
        id: string;

        format_type: 1 | 2 | 3 | 4;

        name: string;
      }
    }
  }

  export interface Poll {
    allow_multiselect: boolean;

    answers: Array<Poll.Answer>;

    expiry: string;

    layout_type;

    question: Poll.Question;

    results: Poll.Results;
  }

  export namespace Poll {
    export interface Answer {
      answer_id: number;

      poll_media: Answer.PollMedia;
    }

    export namespace Answer {
      export interface PollMedia {
        emoji?: PollMedia.Emoji | null;

        text?: string | null;
      }

      export namespace PollMedia {
        export interface Emoji {
          id?: string | null;

          animated?: boolean | null;

          name?: string | null;
        }
      }
    }

    export interface Question {
      emoji?: Question.Emoji | null;

      text?: string | null;
    }

    export namespace Question {
      export interface Emoji {
        id?: string | null;

        animated?: boolean | null;

        name?: string | null;
      }
    }

    export interface Results {
      is_finalized: boolean;

      answer_counts?: Array<Results.AnswerCount> | null;
    }

    export namespace Results {
      export interface AnswerCount {
        id: number;

        count: number;

        me_voted?: boolean | null;
      }
    }
  }

  export interface PurchaseNotification {
    type: number;

    guild_product_purchase?: PurchaseNotification.GuildProductPurchase | null;
  }

  export namespace PurchaseNotification {
    export interface GuildProductPurchase {
      listing_id: string;

      product_name: string;
    }
  }

  export interface Reaction {
    burst_colors: Array<string>;

    count: number;

    count_details: Reaction.CountDetails;

    emoji: Reaction.Emoji;

    me: boolean;

    me_burst: boolean;
  }

  export namespace Reaction {
    export interface CountDetails {
      burst: number;

      normal: number;
    }

    export interface Emoji {
      id?: string | null;

      animated?: boolean | null;

      name?: string | null;
    }
  }

  export interface ReferencedMessage {
    id: string;

    attachments: Array<ReferencedMessage.Attachment>;

    author: UsersAPI.User;

    channel_id: string;

    components: Array<ReferencedMessage.ActionRowComponentResponse | ReferencedMessage.ButtonComponentResponse | ReferencedMessage.ChannelSelectComponentResponse | ReferencedMessage.MentionableSelectComponentResponse | ReferencedMessage.RoleSelectComponentResponse | ReferencedMessage.StringSelectComponentResponse | ReferencedMessage.TextInputComponentResponse | ReferencedMessage.UserSelectComponentResponse>;

    content: string;

    embeds: Array<ReferencedMessage.Embed>;

    flags: number;

    mention_everyone: boolean;

    mention_roles: Array<string>;

    mentions: Array<UsersAPI.User>;

    pinned: boolean;

    timestamp: string;

    tts: boolean;

    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

    activity?: unknown | null;

    application?: ReferencedMessage.Application | null;

    application_id?: string | null;

    call?: ReferencedMessage.Call | null;

    edited_timestamp?: string | null;

    interaction?: ReferencedMessage.Interaction | null;

    interaction_metadata?: ReferencedMessage.ApplicationCommandInteractionMetadataResponse | ReferencedMessage.MessageComponentInteractionMetadataResponse | ReferencedMessage.ModalSubmitInteractionMetadataResponse | null;

    mention_channels?: Array<ReferencedMessage.MentionChannel | null> | null;

    message_reference?: ReferencedMessage.MessageReference | null;

    message_snapshots?: Array<ReferencedMessage.MessageSnapshot> | null;

    nonce?: number | string | null;

    poll?: ReferencedMessage.Poll | null;

    position?: number | null;

    purchase_notification?: ReferencedMessage.PurchaseNotification | null;

    resolved?: ReferencedMessage.Resolved | null;

    role_subscription_data?: ReferencedMessage.RoleSubscriptionData | null;

    sticker_items?: Array<ReferencedMessage.StickerItem> | null;

    stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;

    thread?: ChannelsAPI.Thread | null;

    webhook_id?: string | null;
  }

  export namespace ReferencedMessage {
    export interface Attachment {
      id: string;

      filename: string;

      proxy_url: string;

      size: number;

      url: string;

      application?: Attachment.Application | null;

      clip_created_at?: string | null;

      clip_participants?: Array<UsersAPI.User> | null;

      content_type?: string | null;

      description?: string | null;

      duration_secs?: number | null;

      ephemeral?: boolean | null;

      height?: number | null;

      title?: string | null;

      waveform?: string | null;

      width?: number | null;
    }

    export namespace Attachment {
      export interface Application {
        id: string;

        description: string;

        flags: number;

        name: string;

        verify_key: string;

        bot?: UsersAPI.User | null;

        bot_public?: boolean | null;

        bot_require_code_grant?: boolean | null;

        cover_image?: string | null;

        custom_install_url?: string | null;

        guild_id?: string | null;

        icon?: string | null;

        install_params?: Application.InstallParams | null;

        integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

        max_participants?: number | null;

        primary_sku_id?: string | null;

        privacy_policy_url?: string | null;

        rpc_origins?: Array<string | null> | null;

        slug?: string | null;

        tags?: Array<string> | null;

        terms_of_service_url?: string | null;

        type?: 4 | null;
      }

      export namespace Application {
        export interface InstallParams {
          permissions: string;

          scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
        }

        export interface IntegrationTypesConfig {
          oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
        }

        export namespace IntegrationTypesConfig {
          export interface Oauth2InstallParams {
            permissions: string;

            scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
          }
        }
      }
    }

    export interface ActionRowComponentResponse {
      id: number;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
    }

    export namespace ActionRowComponentResponse {
      export interface ButtonComponentResponse {
        id: number;

        style: 1 | 2 | 3 | 4 | 5 | 6;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        custom_id?: string | null;

        disabled?: boolean | null;

        emoji?: ButtonComponentResponse.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentResponse {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }

      export interface ChannelSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentResponse {
        export interface RoleSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentResponse {
        id: number;

        custom_id: string;

        options: Array<StringSelectComponentResponse.Option>;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace StringSelectComponentResponse {
        export interface Option {
          label: string;

          value: string;

          default?: boolean | null;

          description?: string | null;

          emoji?: Option.Emoji | null;
        }

        export namespace Option {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }
      }

      export interface TextInputComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Single-line input
         * - `2` - Multi-line input
         */
        style: 1 | 2;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        label?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        placeholder?: string | null;

        required?: boolean | null;

        value?: string | null;
      }

      export interface UserSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }
    }

    export interface ButtonComponentResponse {
      id: number;

      style: 1 | 2 | 3 | 4 | 5 | 6;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      custom_id?: string | null;

      disabled?: boolean | null;

      emoji?: ButtonComponentResponse.Emoji | null;

      label?: string | null;

      sku_id?: string | null;

      url?: string | null;
    }

    export namespace ButtonComponentResponse {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }

    export interface ChannelSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace ChannelSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface MentionableSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace MentionableSelectComponentResponse {
      export interface RoleSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }

      export interface UserSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface RoleSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace RoleSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface StringSelectComponentResponse {
      id: number;

      custom_id: string;

      options: Array<StringSelectComponentResponse.Option>;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace StringSelectComponentResponse {
      export interface Option {
        label: string;

        value: string;

        default?: boolean | null;

        description?: string | null;

        emoji?: Option.Emoji | null;
      }

      export namespace Option {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }
    }

    export interface TextInputComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Single-line input
       * - `2` - Multi-line input
       */
      style: 1 | 2;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      label?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      placeholder?: string | null;

      required?: boolean | null;

      value?: string | null;
    }

    export interface UserSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace UserSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface Embed {
      type: string;

      author?: Embed.Author | null;

      color?: number | null;

      description?: string | null;

      fields?: Array<Embed.Field> | null;

      footer?: Embed.Footer | null;

      image?: Embed.Image | null;

      provider?: Embed.Provider | null;

      thumbnail?: Embed.Thumbnail | null;

      timestamp?: string | null;

      title?: string | null;

      url?: string | null;

      video?: Embed.Video | null;
    }

    export namespace Embed {
      export interface Author {
        name: string;

        icon_url?: string | null;

        proxy_icon_url?: string | null;

        url?: string | null;
      }

      export interface Field {
        inline: boolean;

        name: string;

        value: string;
      }

      export interface Footer {
        text: string;

        icon_url?: string | null;

        proxy_icon_url?: string | null;
      }

      export interface Image {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Provider {
        name: string;

        url?: string | null;
      }

      export interface Thumbnail {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Video {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }
    }

    export interface Application {
      id: string;

      description: string;

      name: string;

      bot?: UsersAPI.User | null;

      cover_image?: string | null;

      icon?: string | null;

      primary_sku_id?: string | null;

      type?: 4 | null;
    }

    export interface Call {
      participants: Array<string>;

      ended_timestamp?: string | null;
    }

    export interface Interaction {
      id: string;

      name: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      name_localized?: string | null;

      user?: UsersAPI.User | null;
    }

    export interface ApplicationCommandInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      target_message_id?: string | null;

      target_user?: UsersAPI.User | null;

      user?: UsersAPI.User | null;
    }

    export interface MessageComponentInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      interacted_message_id: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }

    export interface ModalSubmitInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse.ApplicationCommandInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse.MessageComponentInteractionMetadataResponse;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }

    export namespace ModalSubmitInteractionMetadataResponse {
      export interface ApplicationCommandInteractionMetadataResponse {
        id: string;

        authorizing_integration_owners: Record<string, string>;

        /**
         * - `1` - Sent by Discord to validate your application's interaction handler
         * - `2` - Sent when a user uses an application command
         * - `3` - Sent when a user interacts with a message component previously sent by
         *   your application
         * - `4` - Sent when a user is filling in an autocomplete option in a chat command
         * - `5` - Sent when a user submits a modal previously sent by your application
         */
        type: 1 | 2 | 3 | 4 | 5;

        original_response_message_id?: string | null;

        target_message_id?: string | null;

        target_user?: UsersAPI.User | null;

        user?: UsersAPI.User | null;
      }

      export interface MessageComponentInteractionMetadataResponse {
        id: string;

        authorizing_integration_owners: Record<string, string>;

        interacted_message_id: string;

        /**
         * - `1` - Sent by Discord to validate your application's interaction handler
         * - `2` - Sent when a user uses an application command
         * - `3` - Sent when a user interacts with a message component previously sent by
         *   your application
         * - `4` - Sent when a user is filling in an autocomplete option in a chat command
         * - `5` - Sent when a user submits a modal previously sent by your application
         */
        type: 1 | 2 | 3 | 4 | 5;

        original_response_message_id?: string | null;

        user?: UsersAPI.User | null;
      }
    }

    export interface MentionChannel {
      id: string;

      guild_id: string;

      name: string;

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
    }

    export interface MessageReference {
      channel_id: string;

      guild_id?: string | null;

      message_id?: string | null;

      /**
       * - `0` - Reference to a message
       */
      type?: 0 | null;
    }

    export interface MessageSnapshot {
      message?: MessageSnapshot.Message | null;
    }

    export namespace MessageSnapshot {
      export interface Message {
        attachments: Array<Message.Attachment>;

        components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

        content: string;

        embeds: Array<Message.Embed>;

        flags: number;

        mention_roles: Array<string>;

        mentions: Array<UsersAPI.User>;

        timestamp: string;

        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

        edited_timestamp?: string | null;

        resolved?: Message.Resolved | null;

        sticker_items?: Array<Message.StickerItem> | null;

        stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;
      }

      export namespace Message {
        export interface Attachment {
          id: string;

          filename: string;

          proxy_url: string;

          size: number;

          url: string;

          application?: Attachment.Application | null;

          clip_created_at?: string | null;

          clip_participants?: Array<UsersAPI.User> | null;

          content_type?: string | null;

          description?: string | null;

          duration_secs?: number | null;

          ephemeral?: boolean | null;

          height?: number | null;

          title?: string | null;

          waveform?: string | null;

          width?: number | null;
        }

        export namespace Attachment {
          export interface Application {
            id: string;

            description: string;

            flags: number;

            name: string;

            verify_key: string;

            bot?: UsersAPI.User | null;

            bot_public?: boolean | null;

            bot_require_code_grant?: boolean | null;

            cover_image?: string | null;

            custom_install_url?: string | null;

            guild_id?: string | null;

            icon?: string | null;

            install_params?: Application.InstallParams | null;

            integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

            max_participants?: number | null;

            primary_sku_id?: string | null;

            privacy_policy_url?: string | null;

            rpc_origins?: Array<string | null> | null;

            slug?: string | null;

            tags?: Array<string> | null;

            terms_of_service_url?: string | null;

            type?: 4 | null;
          }

          export namespace Application {
            export interface InstallParams {
              permissions: string;

              scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
            }

            export interface IntegrationTypesConfig {
              oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
            }

            export namespace IntegrationTypesConfig {
              export interface Oauth2InstallParams {
                permissions: string;

                scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
              }
            }
          }
        }

        export interface ActionRowComponentResponse {
          id: number;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
        }

        export namespace ActionRowComponentResponse {
          export interface ButtonComponentResponse {
            id: number;

            style: 1 | 2 | 3 | 4 | 5 | 6;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            custom_id?: string | null;

            disabled?: boolean | null;

            emoji?: ButtonComponentResponse.Emoji | null;

            label?: string | null;

            sku_id?: string | null;

            url?: string | null;
          }

          export namespace ButtonComponentResponse {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }

          export interface ChannelSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

            default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace ChannelSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface MentionableSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace MentionableSelectComponentResponse {
            export interface RoleSelectDefaultValueResponse {
              id: string;

              type: 'user' | 'role' | 'channel';
            }

            export interface UserSelectDefaultValueResponse {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface RoleSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace RoleSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface StringSelectComponentResponse {
            id: number;

            custom_id: string;

            options: Array<StringSelectComponentResponse.Option>;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace StringSelectComponentResponse {
            export interface Option {
              label: string;

              value: string;

              default?: boolean | null;

              description?: string | null;

              emoji?: Option.Emoji | null;
            }

            export namespace Option {
              export interface Emoji {
                name: string;

                id?: string | null;

                animated?: boolean | null;
              }
            }
          }

          export interface TextInputComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Single-line input
             * - `2` - Multi-line input
             */
            style: 1 | 2;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            label?: string | null;

            max_length?: number | null;

            min_length?: number | null;

            placeholder?: string | null;

            required?: boolean | null;

            value?: string | null;
          }

          export interface UserSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace UserSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }
        }

        export interface ButtonComponentResponse {
          id: number;

          style: 1 | 2 | 3 | 4 | 5 | 6;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          custom_id?: string | null;

          disabled?: boolean | null;

          emoji?: ButtonComponentResponse.Emoji | null;

          label?: string | null;

          sku_id?: string | null;

          url?: string | null;
        }

        export namespace ButtonComponentResponse {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }

        export interface ChannelSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace ChannelSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface MentionableSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace MentionableSelectComponentResponse {
          export interface RoleSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }

          export interface UserSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface RoleSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace RoleSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface StringSelectComponentResponse {
          id: number;

          custom_id: string;

          options: Array<StringSelectComponentResponse.Option>;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace StringSelectComponentResponse {
          export interface Option {
            label: string;

            value: string;

            default?: boolean | null;

            description?: string | null;

            emoji?: Option.Emoji | null;
          }

          export namespace Option {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }
        }

        export interface TextInputComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Single-line input
           * - `2` - Multi-line input
           */
          style: 1 | 2;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          label?: string | null;

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }

        export interface UserSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace UserSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface Embed {
          type: string;

          author?: Embed.Author | null;

          color?: number | null;

          description?: string | null;

          fields?: Array<Embed.Field> | null;

          footer?: Embed.Footer | null;

          image?: Embed.Image | null;

          provider?: Embed.Provider | null;

          thumbnail?: Embed.Thumbnail | null;

          timestamp?: string | null;

          title?: string | null;

          url?: string | null;

          video?: Embed.Video | null;
        }

        export namespace Embed {
          export interface Author {
            name: string;

            icon_url?: string | null;

            proxy_icon_url?: string | null;

            url?: string | null;
          }

          export interface Field {
            inline: boolean;

            name: string;

            value: string;
          }

          export interface Footer {
            text: string;

            icon_url?: string | null;

            proxy_icon_url?: string | null;
          }

          export interface Image {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }

          export interface Provider {
            name: string;

            url?: string | null;
          }

          export interface Thumbnail {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }

          export interface Video {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }
        }

        export interface Resolved {
          channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

          members: Record<string, MembersAPI.GuildMemberResponse>;

          roles: Record<string, RolesAPI.GuildRole>;

          users: Record<string, UsersAPI.User>;
        }

        export interface StickerItem {
          id: string;

          format_type: 1 | 2 | 3 | 4;

          name: string;
        }
      }
    }

    export interface Poll {
      allow_multiselect: boolean;

      answers: Array<Poll.Answer>;

      expiry: string;

      layout_type;

      question: Poll.Question;

      results: Poll.Results;
    }

    export namespace Poll {
      export interface Answer {
        answer_id: number;

        poll_media: Answer.PollMedia;
      }

      export namespace Answer {
        export interface PollMedia {
          emoji?: PollMedia.Emoji | null;

          text?: string | null;
        }

        export namespace PollMedia {
          export interface Emoji {
            id?: string | null;

            animated?: boolean | null;

            name?: string | null;
          }
        }
      }

      export interface Question {
        emoji?: Question.Emoji | null;

        text?: string | null;
      }

      export namespace Question {
        export interface Emoji {
          id?: string | null;

          animated?: boolean | null;

          name?: string | null;
        }
      }

      export interface Results {
        is_finalized: boolean;

        answer_counts?: Array<Results.AnswerCount> | null;
      }

      export namespace Results {
        export interface AnswerCount {
          id: number;

          count: number;

          me_voted?: boolean | null;
        }
      }
    }

    export interface PurchaseNotification {
      type: number;

      guild_product_purchase?: PurchaseNotification.GuildProductPurchase | null;
    }

    export namespace PurchaseNotification {
      export interface GuildProductPurchase {
        listing_id: string;

        product_name: string;
      }
    }

    export interface Resolved {
      channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

      members: Record<string, MembersAPI.GuildMemberResponse>;

      roles: Record<string, RolesAPI.GuildRole>;

      users: Record<string, UsersAPI.User>;
    }

    export interface RoleSubscriptionData {
      is_renewal: boolean;

      role_subscription_listing_id: string;

      tier_name: string;

      total_months_subscribed: number;
    }

    export interface StickerItem {
      id: string;

      format_type: 1 | 2 | 3 | 4;

      name: string;
    }
  }

  export interface Resolved {
    channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

    members: Record<string, MembersAPI.GuildMemberResponse>;

    roles: Record<string, RolesAPI.GuildRole>;

    users: Record<string, UsersAPI.User>;
  }

  export interface RoleSubscriptionData {
    is_renewal: boolean;

    role_subscription_listing_id: string;

    tier_name: string;

    total_months_subscribed: number;
  }

  export interface StickerItem {
    id: string;

    format_type: 1 | 2 | 3 | 4;

    name: string;
  }
}

export interface MessageResponse {
  id: string;

  attachments: Array<MessageResponse.Attachment>;

  author: UsersAPI.User;

  channel_id: string;

  components: Array<MessageResponse.ActionRowComponentResponse | MessageResponse.ButtonComponentResponse | MessageResponse.ChannelSelectComponentResponse | MessageResponse.MentionableSelectComponentResponse | MessageResponse.RoleSelectComponentResponse | MessageResponse.StringSelectComponentResponse | MessageResponse.TextInputComponentResponse | MessageResponse.UserSelectComponentResponse>;

  content: string;

  embeds: Array<MessageResponse.Embed>;

  flags: number;

  mention_everyone: boolean;

  mention_roles: Array<string>;

  mentions: Array<UsersAPI.User>;

  pinned: boolean;

  timestamp: string;

  tts: boolean;

  type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

  activity?: unknown | null;

  application?: MessageResponse.Application | null;

  application_id?: string | null;

  call?: MessageResponse.Call | null;

  edited_timestamp?: string | null;

  interaction?: MessageResponse.Interaction | null;

  interaction_metadata?: MessageResponse.ApplicationCommandInteractionMetadataResponse | MessageResponse.MessageComponentInteractionMetadataResponse | MessageResponse.ModalSubmitInteractionMetadataResponse | null;

  mention_channels?: Array<MessageResponse.MentionChannel | null> | null;

  message_reference?: MessageResponse.MessageReference | null;

  message_snapshots?: Array<MessageResponse.MessageSnapshot> | null;

  nonce?: number | string | null;

  poll?: MessageResponse.Poll | null;

  position?: number | null;

  purchase_notification?: MessageResponse.PurchaseNotification | null;

  reactions?: Array<MessageResponse.Reaction> | null;

  referenced_message?: MessageResponse.ReferencedMessage | null;

  resolved?: MessageResponse.Resolved | null;

  role_subscription_data?: MessageResponse.RoleSubscriptionData | null;

  sticker_items?: Array<MessageResponse.StickerItem> | null;

  stickers?: Array<GuildSticker | StickersAPI.StandardSticker> | null;

  thread?: ChannelsAPI.Thread | null;

  webhook_id?: string | null;
}

export namespace MessageResponse {
  export interface Attachment {
    id: string;

    filename: string;

    proxy_url: string;

    size: number;

    url: string;

    application?: Attachment.Application | null;

    clip_created_at?: string | null;

    clip_participants?: Array<UsersAPI.User> | null;

    content_type?: string | null;

    description?: string | null;

    duration_secs?: number | null;

    ephemeral?: boolean | null;

    height?: number | null;

    title?: string | null;

    waveform?: string | null;

    width?: number | null;
  }

  export namespace Attachment {
    export interface Application {
      id: string;

      description: string;

      flags: number;

      name: string;

      verify_key: string;

      bot?: UsersAPI.User | null;

      bot_public?: boolean | null;

      bot_require_code_grant?: boolean | null;

      cover_image?: string | null;

      custom_install_url?: string | null;

      guild_id?: string | null;

      icon?: string | null;

      install_params?: Application.InstallParams | null;

      integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

      max_participants?: number | null;

      primary_sku_id?: string | null;

      privacy_policy_url?: string | null;

      rpc_origins?: Array<string | null> | null;

      slug?: string | null;

      tags?: Array<string> | null;

      terms_of_service_url?: string | null;

      type?: 4 | null;
    }

    export namespace Application {
      export interface InstallParams {
        permissions: string;

        scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
      }

      export interface IntegrationTypesConfig {
        oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
      }

      export namespace IntegrationTypesConfig {
        export interface Oauth2InstallParams {
          permissions: string;

          scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
        }
      }
    }
  }

  export interface ActionRowComponentResponse {
    id: number;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
  }

  export namespace ActionRowComponentResponse {
    export interface ButtonComponentResponse {
      id: number;

      style: 1 | 2 | 3 | 4 | 5 | 6;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      custom_id?: string | null;

      disabled?: boolean | null;

      emoji?: ButtonComponentResponse.Emoji | null;

      label?: string | null;

      sku_id?: string | null;

      url?: string | null;
    }

    export namespace ButtonComponentResponse {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }

    export interface ChannelSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace ChannelSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface MentionableSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace MentionableSelectComponentResponse {
      export interface RoleSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }

      export interface UserSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface RoleSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace RoleSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface StringSelectComponentResponse {
      id: number;

      custom_id: string;

      options: Array<StringSelectComponentResponse.Option>;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace StringSelectComponentResponse {
      export interface Option {
        label: string;

        value: string;

        default?: boolean | null;

        description?: string | null;

        emoji?: Option.Emoji | null;
      }

      export namespace Option {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }
    }

    export interface TextInputComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Single-line input
       * - `2` - Multi-line input
       */
      style: 1 | 2;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      label?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      placeholder?: string | null;

      required?: boolean | null;

      value?: string | null;
    }

    export interface UserSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace UserSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }
  }

  export interface ButtonComponentResponse {
    id: number;

    style: 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    custom_id?: string | null;

    disabled?: boolean | null;

    emoji?: ButtonComponentResponse.Emoji | null;

    label?: string | null;

    sku_id?: string | null;

    url?: string | null;
  }

  export namespace ButtonComponentResponse {
    export interface Emoji {
      name: string;

      id?: string | null;

      animated?: boolean | null;
    }
  }

  export interface ChannelSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

    default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace ChannelSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface MentionableSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace MentionableSelectComponentResponse {
    export interface RoleSelectDefaultValueResponse {
      id: string;

      type: 'user' | 'role' | 'channel';
    }

    export interface UserSelectDefaultValueResponse {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface RoleSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace RoleSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface StringSelectComponentResponse {
    id: number;

    custom_id: string;

    options: Array<StringSelectComponentResponse.Option>;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace StringSelectComponentResponse {
    export interface Option {
      label: string;

      value: string;

      default?: boolean | null;

      description?: string | null;

      emoji?: Option.Emoji | null;
    }

    export namespace Option {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }
  }

  export interface TextInputComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Single-line input
     * - `2` - Multi-line input
     */
    style: 1 | 2;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    label?: string | null;

    max_length?: number | null;

    min_length?: number | null;

    placeholder?: string | null;

    required?: boolean | null;

    value?: string | null;
  }

  export interface UserSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace UserSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface Embed {
    type: string;

    author?: Embed.Author | null;

    color?: number | null;

    description?: string | null;

    fields?: Array<Embed.Field> | null;

    footer?: Embed.Footer | null;

    image?: Embed.Image | null;

    provider?: Embed.Provider | null;

    thumbnail?: Embed.Thumbnail | null;

    timestamp?: string | null;

    title?: string | null;

    url?: string | null;

    video?: Embed.Video | null;
  }

  export namespace Embed {
    export interface Author {
      name: string;

      icon_url?: string | null;

      proxy_icon_url?: string | null;

      url?: string | null;
    }

    export interface Field {
      inline: boolean;

      name: string;

      value: string;
    }

    export interface Footer {
      text: string;

      icon_url?: string | null;

      proxy_icon_url?: string | null;
    }

    export interface Image {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }

    export interface Provider {
      name: string;

      url?: string | null;
    }

    export interface Thumbnail {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }

    export interface Video {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }
  }

  export interface Application {
    id: string;

    description: string;

    name: string;

    bot?: UsersAPI.User | null;

    cover_image?: string | null;

    icon?: string | null;

    primary_sku_id?: string | null;

    type?: 4 | null;
  }

  export interface Call {
    participants: Array<string>;

    ended_timestamp?: string | null;
  }

  export interface Interaction {
    id: string;

    name: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    name_localized?: string | null;

    user?: UsersAPI.User | null;
  }

  export interface ApplicationCommandInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    target_message_id?: string | null;

    target_user?: UsersAPI.User | null;

    user?: UsersAPI.User | null;
  }

  export interface MessageComponentInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    interacted_message_id: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    user?: UsersAPI.User | null;
  }

  export interface ModalSubmitInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse.ApplicationCommandInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse.MessageComponentInteractionMetadataResponse;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    user?: UsersAPI.User | null;
  }

  export namespace ModalSubmitInteractionMetadataResponse {
    export interface ApplicationCommandInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      target_message_id?: string | null;

      target_user?: UsersAPI.User | null;

      user?: UsersAPI.User | null;
    }

    export interface MessageComponentInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      interacted_message_id: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }
  }

  export interface MentionChannel {
    id: string;

    guild_id: string;

    name: string;

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
  }

  export interface MessageReference {
    channel_id: string;

    guild_id?: string | null;

    message_id?: string | null;

    /**
     * - `0` - Reference to a message
     */
    type?: 0 | null;
  }

  export interface MessageSnapshot {
    message?: MessageSnapshot.Message | null;
  }

  export namespace MessageSnapshot {
    export interface Message {
      attachments: Array<Message.Attachment>;

      components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

      content: string;

      embeds: Array<Message.Embed>;

      flags: number;

      mention_roles: Array<string>;

      mentions: Array<UsersAPI.User>;

      timestamp: string;

      type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

      edited_timestamp?: string | null;

      resolved?: Message.Resolved | null;

      sticker_items?: Array<Message.StickerItem> | null;

      stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;
    }

    export namespace Message {
      export interface Attachment {
        id: string;

        filename: string;

        proxy_url: string;

        size: number;

        url: string;

        application?: Attachment.Application | null;

        clip_created_at?: string | null;

        clip_participants?: Array<UsersAPI.User> | null;

        content_type?: string | null;

        description?: string | null;

        duration_secs?: number | null;

        ephemeral?: boolean | null;

        height?: number | null;

        title?: string | null;

        waveform?: string | null;

        width?: number | null;
      }

      export namespace Attachment {
        export interface Application {
          id: string;

          description: string;

          flags: number;

          name: string;

          verify_key: string;

          bot?: UsersAPI.User | null;

          bot_public?: boolean | null;

          bot_require_code_grant?: boolean | null;

          cover_image?: string | null;

          custom_install_url?: string | null;

          guild_id?: string | null;

          icon?: string | null;

          install_params?: Application.InstallParams | null;

          integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

          max_participants?: number | null;

          primary_sku_id?: string | null;

          privacy_policy_url?: string | null;

          rpc_origins?: Array<string | null> | null;

          slug?: string | null;

          tags?: Array<string> | null;

          terms_of_service_url?: string | null;

          type?: 4 | null;
        }

        export namespace Application {
          export interface InstallParams {
            permissions: string;

            scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
          }

          export interface IntegrationTypesConfig {
            oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
          }

          export namespace IntegrationTypesConfig {
            export interface Oauth2InstallParams {
              permissions: string;

              scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
            }
          }
        }
      }

      export interface ActionRowComponentResponse {
        id: number;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
      }

      export namespace ActionRowComponentResponse {
        export interface ButtonComponentResponse {
          id: number;

          style: 1 | 2 | 3 | 4 | 5 | 6;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          custom_id?: string | null;

          disabled?: boolean | null;

          emoji?: ButtonComponentResponse.Emoji | null;

          label?: string | null;

          sku_id?: string | null;

          url?: string | null;
        }

        export namespace ButtonComponentResponse {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }

        export interface ChannelSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace ChannelSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface MentionableSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace MentionableSelectComponentResponse {
          export interface RoleSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }

          export interface UserSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface RoleSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace RoleSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface StringSelectComponentResponse {
          id: number;

          custom_id: string;

          options: Array<StringSelectComponentResponse.Option>;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace StringSelectComponentResponse {
          export interface Option {
            label: string;

            value: string;

            default?: boolean | null;

            description?: string | null;

            emoji?: Option.Emoji | null;
          }

          export namespace Option {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }
        }

        export interface TextInputComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Single-line input
           * - `2` - Multi-line input
           */
          style: 1 | 2;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          label?: string | null;

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }

        export interface UserSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace UserSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }
      }

      export interface ButtonComponentResponse {
        id: number;

        style: 1 | 2 | 3 | 4 | 5 | 6;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        custom_id?: string | null;

        disabled?: boolean | null;

        emoji?: ButtonComponentResponse.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentResponse {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }

      export interface ChannelSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentResponse {
        export interface RoleSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentResponse {
        id: number;

        custom_id: string;

        options: Array<StringSelectComponentResponse.Option>;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace StringSelectComponentResponse {
        export interface Option {
          label: string;

          value: string;

          default?: boolean | null;

          description?: string | null;

          emoji?: Option.Emoji | null;
        }

        export namespace Option {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }
      }

      export interface TextInputComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Single-line input
         * - `2` - Multi-line input
         */
        style: 1 | 2;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        label?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        placeholder?: string | null;

        required?: boolean | null;

        value?: string | null;
      }

      export interface UserSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface Embed {
        type: string;

        author?: Embed.Author | null;

        color?: number | null;

        description?: string | null;

        fields?: Array<Embed.Field> | null;

        footer?: Embed.Footer | null;

        image?: Embed.Image | null;

        provider?: Embed.Provider | null;

        thumbnail?: Embed.Thumbnail | null;

        timestamp?: string | null;

        title?: string | null;

        url?: string | null;

        video?: Embed.Video | null;
      }

      export namespace Embed {
        export interface Author {
          name: string;

          icon_url?: string | null;

          proxy_icon_url?: string | null;

          url?: string | null;
        }

        export interface Field {
          inline: boolean;

          name: string;

          value: string;
        }

        export interface Footer {
          text: string;

          icon_url?: string | null;

          proxy_icon_url?: string | null;
        }

        export interface Image {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }

        export interface Provider {
          name: string;

          url?: string | null;
        }

        export interface Thumbnail {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }

        export interface Video {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }
      }

      export interface Resolved {
        channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

        members: Record<string, MembersAPI.GuildMemberResponse>;

        roles: Record<string, RolesAPI.GuildRole>;

        users: Record<string, UsersAPI.User>;
      }

      export interface StickerItem {
        id: string;

        format_type: 1 | 2 | 3 | 4;

        name: string;
      }
    }
  }

  export interface Poll {
    allow_multiselect: boolean;

    answers: Array<Poll.Answer>;

    expiry: string;

    layout_type;

    question: Poll.Question;

    results: Poll.Results;
  }

  export namespace Poll {
    export interface Answer {
      answer_id: number;

      poll_media: Answer.PollMedia;
    }

    export namespace Answer {
      export interface PollMedia {
        emoji?: PollMedia.Emoji | null;

        text?: string | null;
      }

      export namespace PollMedia {
        export interface Emoji {
          id?: string | null;

          animated?: boolean | null;

          name?: string | null;
        }
      }
    }

    export interface Question {
      emoji?: Question.Emoji | null;

      text?: string | null;
    }

    export namespace Question {
      export interface Emoji {
        id?: string | null;

        animated?: boolean | null;

        name?: string | null;
      }
    }

    export interface Results {
      is_finalized: boolean;

      answer_counts?: Array<Results.AnswerCount> | null;
    }

    export namespace Results {
      export interface AnswerCount {
        id: number;

        count: number;

        me_voted?: boolean | null;
      }
    }
  }

  export interface PurchaseNotification {
    type: number;

    guild_product_purchase?: PurchaseNotification.GuildProductPurchase | null;
  }

  export namespace PurchaseNotification {
    export interface GuildProductPurchase {
      listing_id: string;

      product_name: string;
    }
  }

  export interface Reaction {
    burst_colors: Array<string>;

    count: number;

    count_details: Reaction.CountDetails;

    emoji: Reaction.Emoji;

    me: boolean;

    me_burst: boolean;
  }

  export namespace Reaction {
    export interface CountDetails {
      burst: number;

      normal: number;
    }

    export interface Emoji {
      id?: string | null;

      animated?: boolean | null;

      name?: string | null;
    }
  }

  export interface ReferencedMessage {
    id: string;

    attachments: Array<ReferencedMessage.Attachment>;

    author: UsersAPI.User;

    channel_id: string;

    components: Array<ReferencedMessage.ActionRowComponentResponse | ReferencedMessage.ButtonComponentResponse | ReferencedMessage.ChannelSelectComponentResponse | ReferencedMessage.MentionableSelectComponentResponse | ReferencedMessage.RoleSelectComponentResponse | ReferencedMessage.StringSelectComponentResponse | ReferencedMessage.TextInputComponentResponse | ReferencedMessage.UserSelectComponentResponse>;

    content: string;

    embeds: Array<ReferencedMessage.Embed>;

    flags: number;

    mention_everyone: boolean;

    mention_roles: Array<string>;

    mentions: Array<UsersAPI.User>;

    pinned: boolean;

    timestamp: string;

    tts: boolean;

    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

    activity?: unknown | null;

    application?: ReferencedMessage.Application | null;

    application_id?: string | null;

    call?: ReferencedMessage.Call | null;

    edited_timestamp?: string | null;

    interaction?: ReferencedMessage.Interaction | null;

    interaction_metadata?: ReferencedMessage.ApplicationCommandInteractionMetadataResponse | ReferencedMessage.MessageComponentInteractionMetadataResponse | ReferencedMessage.ModalSubmitInteractionMetadataResponse | null;

    mention_channels?: Array<ReferencedMessage.MentionChannel | null> | null;

    message_reference?: ReferencedMessage.MessageReference | null;

    message_snapshots?: Array<ReferencedMessage.MessageSnapshot> | null;

    nonce?: number | string | null;

    poll?: ReferencedMessage.Poll | null;

    position?: number | null;

    purchase_notification?: ReferencedMessage.PurchaseNotification | null;

    resolved?: ReferencedMessage.Resolved | null;

    role_subscription_data?: ReferencedMessage.RoleSubscriptionData | null;

    sticker_items?: Array<ReferencedMessage.StickerItem> | null;

    stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;

    thread?: ChannelsAPI.Thread | null;

    webhook_id?: string | null;
  }

  export namespace ReferencedMessage {
    export interface Attachment {
      id: string;

      filename: string;

      proxy_url: string;

      size: number;

      url: string;

      application?: Attachment.Application | null;

      clip_created_at?: string | null;

      clip_participants?: Array<UsersAPI.User> | null;

      content_type?: string | null;

      description?: string | null;

      duration_secs?: number | null;

      ephemeral?: boolean | null;

      height?: number | null;

      title?: string | null;

      waveform?: string | null;

      width?: number | null;
    }

    export namespace Attachment {
      export interface Application {
        id: string;

        description: string;

        flags: number;

        name: string;

        verify_key: string;

        bot?: UsersAPI.User | null;

        bot_public?: boolean | null;

        bot_require_code_grant?: boolean | null;

        cover_image?: string | null;

        custom_install_url?: string | null;

        guild_id?: string | null;

        icon?: string | null;

        install_params?: Application.InstallParams | null;

        integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

        max_participants?: number | null;

        primary_sku_id?: string | null;

        privacy_policy_url?: string | null;

        rpc_origins?: Array<string | null> | null;

        slug?: string | null;

        tags?: Array<string> | null;

        terms_of_service_url?: string | null;

        type?: 4 | null;
      }

      export namespace Application {
        export interface InstallParams {
          permissions: string;

          scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
        }

        export interface IntegrationTypesConfig {
          oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
        }

        export namespace IntegrationTypesConfig {
          export interface Oauth2InstallParams {
            permissions: string;

            scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
          }
        }
      }
    }

    export interface ActionRowComponentResponse {
      id: number;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
    }

    export namespace ActionRowComponentResponse {
      export interface ButtonComponentResponse {
        id: number;

        style: 1 | 2 | 3 | 4 | 5 | 6;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        custom_id?: string | null;

        disabled?: boolean | null;

        emoji?: ButtonComponentResponse.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentResponse {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }

      export interface ChannelSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentResponse {
        export interface RoleSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentResponse {
        id: number;

        custom_id: string;

        options: Array<StringSelectComponentResponse.Option>;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace StringSelectComponentResponse {
        export interface Option {
          label: string;

          value: string;

          default?: boolean | null;

          description?: string | null;

          emoji?: Option.Emoji | null;
        }

        export namespace Option {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }
      }

      export interface TextInputComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Single-line input
         * - `2` - Multi-line input
         */
        style: 1 | 2;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        label?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        placeholder?: string | null;

        required?: boolean | null;

        value?: string | null;
      }

      export interface UserSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }
    }

    export interface ButtonComponentResponse {
      id: number;

      style: 1 | 2 | 3 | 4 | 5 | 6;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      custom_id?: string | null;

      disabled?: boolean | null;

      emoji?: ButtonComponentResponse.Emoji | null;

      label?: string | null;

      sku_id?: string | null;

      url?: string | null;
    }

    export namespace ButtonComponentResponse {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }

    export interface ChannelSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace ChannelSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface MentionableSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace MentionableSelectComponentResponse {
      export interface RoleSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }

      export interface UserSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface RoleSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace RoleSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface StringSelectComponentResponse {
      id: number;

      custom_id: string;

      options: Array<StringSelectComponentResponse.Option>;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace StringSelectComponentResponse {
      export interface Option {
        label: string;

        value: string;

        default?: boolean | null;

        description?: string | null;

        emoji?: Option.Emoji | null;
      }

      export namespace Option {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }
    }

    export interface TextInputComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Single-line input
       * - `2` - Multi-line input
       */
      style: 1 | 2;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      label?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      placeholder?: string | null;

      required?: boolean | null;

      value?: string | null;
    }

    export interface UserSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace UserSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface Embed {
      type: string;

      author?: Embed.Author | null;

      color?: number | null;

      description?: string | null;

      fields?: Array<Embed.Field> | null;

      footer?: Embed.Footer | null;

      image?: Embed.Image | null;

      provider?: Embed.Provider | null;

      thumbnail?: Embed.Thumbnail | null;

      timestamp?: string | null;

      title?: string | null;

      url?: string | null;

      video?: Embed.Video | null;
    }

    export namespace Embed {
      export interface Author {
        name: string;

        icon_url?: string | null;

        proxy_icon_url?: string | null;

        url?: string | null;
      }

      export interface Field {
        inline: boolean;

        name: string;

        value: string;
      }

      export interface Footer {
        text: string;

        icon_url?: string | null;

        proxy_icon_url?: string | null;
      }

      export interface Image {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Provider {
        name: string;

        url?: string | null;
      }

      export interface Thumbnail {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Video {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }
    }

    export interface Application {
      id: string;

      description: string;

      name: string;

      bot?: UsersAPI.User | null;

      cover_image?: string | null;

      icon?: string | null;

      primary_sku_id?: string | null;

      type?: 4 | null;
    }

    export interface Call {
      participants: Array<string>;

      ended_timestamp?: string | null;
    }

    export interface Interaction {
      id: string;

      name: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      name_localized?: string | null;

      user?: UsersAPI.User | null;
    }

    export interface ApplicationCommandInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      target_message_id?: string | null;

      target_user?: UsersAPI.User | null;

      user?: UsersAPI.User | null;
    }

    export interface MessageComponentInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      interacted_message_id: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }

    export interface ModalSubmitInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse.ApplicationCommandInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse.MessageComponentInteractionMetadataResponse;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }

    export namespace ModalSubmitInteractionMetadataResponse {
      export interface ApplicationCommandInteractionMetadataResponse {
        id: string;

        authorizing_integration_owners: Record<string, string>;

        /**
         * - `1` - Sent by Discord to validate your application's interaction handler
         * - `2` - Sent when a user uses an application command
         * - `3` - Sent when a user interacts with a message component previously sent by
         *   your application
         * - `4` - Sent when a user is filling in an autocomplete option in a chat command
         * - `5` - Sent when a user submits a modal previously sent by your application
         */
        type: 1 | 2 | 3 | 4 | 5;

        original_response_message_id?: string | null;

        target_message_id?: string | null;

        target_user?: UsersAPI.User | null;

        user?: UsersAPI.User | null;
      }

      export interface MessageComponentInteractionMetadataResponse {
        id: string;

        authorizing_integration_owners: Record<string, string>;

        interacted_message_id: string;

        /**
         * - `1` - Sent by Discord to validate your application's interaction handler
         * - `2` - Sent when a user uses an application command
         * - `3` - Sent when a user interacts with a message component previously sent by
         *   your application
         * - `4` - Sent when a user is filling in an autocomplete option in a chat command
         * - `5` - Sent when a user submits a modal previously sent by your application
         */
        type: 1 | 2 | 3 | 4 | 5;

        original_response_message_id?: string | null;

        user?: UsersAPI.User | null;
      }
    }

    export interface MentionChannel {
      id: string;

      guild_id: string;

      name: string;

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
    }

    export interface MessageReference {
      channel_id: string;

      guild_id?: string | null;

      message_id?: string | null;

      /**
       * - `0` - Reference to a message
       */
      type?: 0 | null;
    }

    export interface MessageSnapshot {
      message?: MessageSnapshot.Message | null;
    }

    export namespace MessageSnapshot {
      export interface Message {
        attachments: Array<Message.Attachment>;

        components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

        content: string;

        embeds: Array<Message.Embed>;

        flags: number;

        mention_roles: Array<string>;

        mentions: Array<UsersAPI.User>;

        timestamp: string;

        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

        edited_timestamp?: string | null;

        resolved?: Message.Resolved | null;

        sticker_items?: Array<Message.StickerItem> | null;

        stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;
      }

      export namespace Message {
        export interface Attachment {
          id: string;

          filename: string;

          proxy_url: string;

          size: number;

          url: string;

          application?: Attachment.Application | null;

          clip_created_at?: string | null;

          clip_participants?: Array<UsersAPI.User> | null;

          content_type?: string | null;

          description?: string | null;

          duration_secs?: number | null;

          ephemeral?: boolean | null;

          height?: number | null;

          title?: string | null;

          waveform?: string | null;

          width?: number | null;
        }

        export namespace Attachment {
          export interface Application {
            id: string;

            description: string;

            flags: number;

            name: string;

            verify_key: string;

            bot?: UsersAPI.User | null;

            bot_public?: boolean | null;

            bot_require_code_grant?: boolean | null;

            cover_image?: string | null;

            custom_install_url?: string | null;

            guild_id?: string | null;

            icon?: string | null;

            install_params?: Application.InstallParams | null;

            integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

            max_participants?: number | null;

            primary_sku_id?: string | null;

            privacy_policy_url?: string | null;

            rpc_origins?: Array<string | null> | null;

            slug?: string | null;

            tags?: Array<string> | null;

            terms_of_service_url?: string | null;

            type?: 4 | null;
          }

          export namespace Application {
            export interface InstallParams {
              permissions: string;

              scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
            }

            export interface IntegrationTypesConfig {
              oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
            }

            export namespace IntegrationTypesConfig {
              export interface Oauth2InstallParams {
                permissions: string;

                scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
              }
            }
          }
        }

        export interface ActionRowComponentResponse {
          id: number;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
        }

        export namespace ActionRowComponentResponse {
          export interface ButtonComponentResponse {
            id: number;

            style: 1 | 2 | 3 | 4 | 5 | 6;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            custom_id?: string | null;

            disabled?: boolean | null;

            emoji?: ButtonComponentResponse.Emoji | null;

            label?: string | null;

            sku_id?: string | null;

            url?: string | null;
          }

          export namespace ButtonComponentResponse {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }

          export interface ChannelSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

            default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace ChannelSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface MentionableSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace MentionableSelectComponentResponse {
            export interface RoleSelectDefaultValueResponse {
              id: string;

              type: 'user' | 'role' | 'channel';
            }

            export interface UserSelectDefaultValueResponse {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface RoleSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace RoleSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface StringSelectComponentResponse {
            id: number;

            custom_id: string;

            options: Array<StringSelectComponentResponse.Option>;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace StringSelectComponentResponse {
            export interface Option {
              label: string;

              value: string;

              default?: boolean | null;

              description?: string | null;

              emoji?: Option.Emoji | null;
            }

            export namespace Option {
              export interface Emoji {
                name: string;

                id?: string | null;

                animated?: boolean | null;
              }
            }
          }

          export interface TextInputComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Single-line input
             * - `2` - Multi-line input
             */
            style: 1 | 2;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            label?: string | null;

            max_length?: number | null;

            min_length?: number | null;

            placeholder?: string | null;

            required?: boolean | null;

            value?: string | null;
          }

          export interface UserSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace UserSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }
        }

        export interface ButtonComponentResponse {
          id: number;

          style: 1 | 2 | 3 | 4 | 5 | 6;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          custom_id?: string | null;

          disabled?: boolean | null;

          emoji?: ButtonComponentResponse.Emoji | null;

          label?: string | null;

          sku_id?: string | null;

          url?: string | null;
        }

        export namespace ButtonComponentResponse {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }

        export interface ChannelSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace ChannelSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface MentionableSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace MentionableSelectComponentResponse {
          export interface RoleSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }

          export interface UserSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface RoleSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace RoleSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface StringSelectComponentResponse {
          id: number;

          custom_id: string;

          options: Array<StringSelectComponentResponse.Option>;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace StringSelectComponentResponse {
          export interface Option {
            label: string;

            value: string;

            default?: boolean | null;

            description?: string | null;

            emoji?: Option.Emoji | null;
          }

          export namespace Option {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }
        }

        export interface TextInputComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Single-line input
           * - `2` - Multi-line input
           */
          style: 1 | 2;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          label?: string | null;

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }

        export interface UserSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace UserSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface Embed {
          type: string;

          author?: Embed.Author | null;

          color?: number | null;

          description?: string | null;

          fields?: Array<Embed.Field> | null;

          footer?: Embed.Footer | null;

          image?: Embed.Image | null;

          provider?: Embed.Provider | null;

          thumbnail?: Embed.Thumbnail | null;

          timestamp?: string | null;

          title?: string | null;

          url?: string | null;

          video?: Embed.Video | null;
        }

        export namespace Embed {
          export interface Author {
            name: string;

            icon_url?: string | null;

            proxy_icon_url?: string | null;

            url?: string | null;
          }

          export interface Field {
            inline: boolean;

            name: string;

            value: string;
          }

          export interface Footer {
            text: string;

            icon_url?: string | null;

            proxy_icon_url?: string | null;
          }

          export interface Image {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }

          export interface Provider {
            name: string;

            url?: string | null;
          }

          export interface Thumbnail {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }

          export interface Video {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }
        }

        export interface Resolved {
          channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

          members: Record<string, MembersAPI.GuildMemberResponse>;

          roles: Record<string, RolesAPI.GuildRole>;

          users: Record<string, UsersAPI.User>;
        }

        export interface StickerItem {
          id: string;

          format_type: 1 | 2 | 3 | 4;

          name: string;
        }
      }
    }

    export interface Poll {
      allow_multiselect: boolean;

      answers: Array<Poll.Answer>;

      expiry: string;

      layout_type;

      question: Poll.Question;

      results: Poll.Results;
    }

    export namespace Poll {
      export interface Answer {
        answer_id: number;

        poll_media: Answer.PollMedia;
      }

      export namespace Answer {
        export interface PollMedia {
          emoji?: PollMedia.Emoji | null;

          text?: string | null;
        }

        export namespace PollMedia {
          export interface Emoji {
            id?: string | null;

            animated?: boolean | null;

            name?: string | null;
          }
        }
      }

      export interface Question {
        emoji?: Question.Emoji | null;

        text?: string | null;
      }

      export namespace Question {
        export interface Emoji {
          id?: string | null;

          animated?: boolean | null;

          name?: string | null;
        }
      }

      export interface Results {
        is_finalized: boolean;

        answer_counts?: Array<Results.AnswerCount> | null;
      }

      export namespace Results {
        export interface AnswerCount {
          id: number;

          count: number;

          me_voted?: boolean | null;
        }
      }
    }

    export interface PurchaseNotification {
      type: number;

      guild_product_purchase?: PurchaseNotification.GuildProductPurchase | null;
    }

    export namespace PurchaseNotification {
      export interface GuildProductPurchase {
        listing_id: string;

        product_name: string;
      }
    }

    export interface Resolved {
      channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

      members: Record<string, MembersAPI.GuildMemberResponse>;

      roles: Record<string, RolesAPI.GuildRole>;

      users: Record<string, UsersAPI.User>;
    }

    export interface RoleSubscriptionData {
      is_renewal: boolean;

      role_subscription_listing_id: string;

      tier_name: string;

      total_months_subscribed: number;
    }

    export interface StickerItem {
      id: string;

      format_type: 1 | 2 | 3 | 4;

      name: string;
    }
  }

  export interface Resolved {
    channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

    members: Record<string, MembersAPI.GuildMemberResponse>;

    roles: Record<string, RolesAPI.GuildRole>;

    users: Record<string, UsersAPI.User>;
  }

  export interface RoleSubscriptionData {
    is_renewal: boolean;

    role_subscription_listing_id: string;

    tier_name: string;

    total_months_subscribed: number;
  }

  export interface StickerItem {
    id: string;

    format_type: 1 | 2 | 3 | 4;

    name: string;
  }
}

export interface MessageResponse {
  id: string;

  attachments: Array<MessageResponse.Attachment>;

  author: UsersAPI.User;

  channel_id: string;

  components: Array<MessageResponse.ActionRowComponentResponse | MessageResponse.ButtonComponentResponse | MessageResponse.ChannelSelectComponentResponse | MessageResponse.MentionableSelectComponentResponse | MessageResponse.RoleSelectComponentResponse | MessageResponse.StringSelectComponentResponse | MessageResponse.TextInputComponentResponse | MessageResponse.UserSelectComponentResponse>;

  content: string;

  embeds: Array<MessageResponse.Embed>;

  flags: number;

  mention_everyone: boolean;

  mention_roles: Array<string>;

  mentions: Array<UsersAPI.User>;

  pinned: boolean;

  timestamp: string;

  tts: boolean;

  type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

  activity?: unknown | null;

  application?: MessageResponse.Application | null;

  application_id?: string | null;

  call?: MessageResponse.Call | null;

  edited_timestamp?: string | null;

  interaction?: MessageResponse.Interaction | null;

  interaction_metadata?: MessageResponse.ApplicationCommandInteractionMetadataResponse | MessageResponse.MessageComponentInteractionMetadataResponse | MessageResponse.ModalSubmitInteractionMetadataResponse | null;

  mention_channels?: Array<MessageResponse.MentionChannel | null> | null;

  message_reference?: MessageResponse.MessageReference | null;

  message_snapshots?: Array<MessageResponse.MessageSnapshot> | null;

  nonce?: number | string | null;

  poll?: MessageResponse.Poll | null;

  position?: number | null;

  purchase_notification?: MessageResponse.PurchaseNotification | null;

  reactions?: Array<MessageResponse.Reaction> | null;

  referenced_message?: MessageResponse.ReferencedMessage | null;

  resolved?: MessageResponse.Resolved | null;

  role_subscription_data?: MessageResponse.RoleSubscriptionData | null;

  sticker_items?: Array<MessageResponse.StickerItem> | null;

  stickers?: Array<GuildSticker | StickersAPI.StandardSticker> | null;

  thread?: ChannelsAPI.Thread | null;

  webhook_id?: string | null;
}

export namespace MessageResponse {
  export interface Attachment {
    id: string;

    filename: string;

    proxy_url: string;

    size: number;

    url: string;

    application?: Attachment.Application | null;

    clip_created_at?: string | null;

    clip_participants?: Array<UsersAPI.User> | null;

    content_type?: string | null;

    description?: string | null;

    duration_secs?: number | null;

    ephemeral?: boolean | null;

    height?: number | null;

    title?: string | null;

    waveform?: string | null;

    width?: number | null;
  }

  export namespace Attachment {
    export interface Application {
      id: string;

      description: string;

      flags: number;

      name: string;

      verify_key: string;

      bot?: UsersAPI.User | null;

      bot_public?: boolean | null;

      bot_require_code_grant?: boolean | null;

      cover_image?: string | null;

      custom_install_url?: string | null;

      guild_id?: string | null;

      icon?: string | null;

      install_params?: Application.InstallParams | null;

      integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

      max_participants?: number | null;

      primary_sku_id?: string | null;

      privacy_policy_url?: string | null;

      rpc_origins?: Array<string | null> | null;

      slug?: string | null;

      tags?: Array<string> | null;

      terms_of_service_url?: string | null;

      type?: 4 | null;
    }

    export namespace Application {
      export interface InstallParams {
        permissions: string;

        scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
      }

      export interface IntegrationTypesConfig {
        oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
      }

      export namespace IntegrationTypesConfig {
        export interface Oauth2InstallParams {
          permissions: string;

          scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
        }
      }
    }
  }

  export interface ActionRowComponentResponse {
    id: number;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
  }

  export namespace ActionRowComponentResponse {
    export interface ButtonComponentResponse {
      id: number;

      style: 1 | 2 | 3 | 4 | 5 | 6;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      custom_id?: string | null;

      disabled?: boolean | null;

      emoji?: ButtonComponentResponse.Emoji | null;

      label?: string | null;

      sku_id?: string | null;

      url?: string | null;
    }

    export namespace ButtonComponentResponse {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }

    export interface ChannelSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace ChannelSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface MentionableSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace MentionableSelectComponentResponse {
      export interface RoleSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }

      export interface UserSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface RoleSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace RoleSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface StringSelectComponentResponse {
      id: number;

      custom_id: string;

      options: Array<StringSelectComponentResponse.Option>;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace StringSelectComponentResponse {
      export interface Option {
        label: string;

        value: string;

        default?: boolean | null;

        description?: string | null;

        emoji?: Option.Emoji | null;
      }

      export namespace Option {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }
    }

    export interface TextInputComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Single-line input
       * - `2` - Multi-line input
       */
      style: 1 | 2;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      label?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      placeholder?: string | null;

      required?: boolean | null;

      value?: string | null;
    }

    export interface UserSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace UserSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }
  }

  export interface ButtonComponentResponse {
    id: number;

    style: 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    custom_id?: string | null;

    disabled?: boolean | null;

    emoji?: ButtonComponentResponse.Emoji | null;

    label?: string | null;

    sku_id?: string | null;

    url?: string | null;
  }

  export namespace ButtonComponentResponse {
    export interface Emoji {
      name: string;

      id?: string | null;

      animated?: boolean | null;
    }
  }

  export interface ChannelSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

    default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace ChannelSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface MentionableSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace MentionableSelectComponentResponse {
    export interface RoleSelectDefaultValueResponse {
      id: string;

      type: 'user' | 'role' | 'channel';
    }

    export interface UserSelectDefaultValueResponse {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface RoleSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace RoleSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface StringSelectComponentResponse {
    id: number;

    custom_id: string;

    options: Array<StringSelectComponentResponse.Option>;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace StringSelectComponentResponse {
    export interface Option {
      label: string;

      value: string;

      default?: boolean | null;

      description?: string | null;

      emoji?: Option.Emoji | null;
    }

    export namespace Option {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }
  }

  export interface TextInputComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Single-line input
     * - `2` - Multi-line input
     */
    style: 1 | 2;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    label?: string | null;

    max_length?: number | null;

    min_length?: number | null;

    placeholder?: string | null;

    required?: boolean | null;

    value?: string | null;
  }

  export interface UserSelectComponentResponse {
    id: number;

    custom_id: string;

    /**
     * - `1` - Container for other components
     * - `2` - Button object
     * - `3` - Select menu for picking from defined text options
     * - `4` - Text input object
     * - `5` - Select menu for users
     * - `6` - Select menu for roles
     * - `7` - Select menu for mentionables (users and roles)
     * - `8` - Select menu for channels
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

    disabled?: boolean | null;

    max_values?: number | null;

    min_values?: number | null;

    placeholder?: string | null;
  }

  export namespace UserSelectComponentResponse {
    export interface DefaultValue {
      id: string;

      type: 'user' | 'role' | 'channel';
    }
  }

  export interface Embed {
    type: string;

    author?: Embed.Author | null;

    color?: number | null;

    description?: string | null;

    fields?: Array<Embed.Field> | null;

    footer?: Embed.Footer | null;

    image?: Embed.Image | null;

    provider?: Embed.Provider | null;

    thumbnail?: Embed.Thumbnail | null;

    timestamp?: string | null;

    title?: string | null;

    url?: string | null;

    video?: Embed.Video | null;
  }

  export namespace Embed {
    export interface Author {
      name: string;

      icon_url?: string | null;

      proxy_icon_url?: string | null;

      url?: string | null;
    }

    export interface Field {
      inline: boolean;

      name: string;

      value: string;
    }

    export interface Footer {
      text: string;

      icon_url?: string | null;

      proxy_icon_url?: string | null;
    }

    export interface Image {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }

    export interface Provider {
      name: string;

      url?: string | null;
    }

    export interface Thumbnail {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }

    export interface Video {
      flags?: number | null;

      height?: number | null;

      placeholder?: string | null;

      placeholder_version?: number | null;

      proxy_url?: string | null;

      url?: string | null;

      width?: number | null;
    }
  }

  export interface Application {
    id: string;

    description: string;

    name: string;

    bot?: UsersAPI.User | null;

    cover_image?: string | null;

    icon?: string | null;

    primary_sku_id?: string | null;

    type?: 4 | null;
  }

  export interface Call {
    participants: Array<string>;

    ended_timestamp?: string | null;
  }

  export interface Interaction {
    id: string;

    name: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    name_localized?: string | null;

    user?: UsersAPI.User | null;
  }

  export interface ApplicationCommandInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    target_message_id?: string | null;

    target_user?: UsersAPI.User | null;

    user?: UsersAPI.User | null;
  }

  export interface MessageComponentInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    interacted_message_id: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    user?: UsersAPI.User | null;
  }

  export interface ModalSubmitInteractionMetadataResponse {
    id: string;

    authorizing_integration_owners: Record<string, string>;

    triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse.ApplicationCommandInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse.MessageComponentInteractionMetadataResponse;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    original_response_message_id?: string | null;

    user?: UsersAPI.User | null;
  }

  export namespace ModalSubmitInteractionMetadataResponse {
    export interface ApplicationCommandInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      target_message_id?: string | null;

      target_user?: UsersAPI.User | null;

      user?: UsersAPI.User | null;
    }

    export interface MessageComponentInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      interacted_message_id: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }
  }

  export interface MentionChannel {
    id: string;

    guild_id: string;

    name: string;

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
  }

  export interface MessageReference {
    channel_id: string;

    guild_id?: string | null;

    message_id?: string | null;

    /**
     * - `0` - Reference to a message
     */
    type?: 0 | null;
  }

  export interface MessageSnapshot {
    message?: MessageSnapshot.Message | null;
  }

  export namespace MessageSnapshot {
    export interface Message {
      attachments: Array<Message.Attachment>;

      components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

      content: string;

      embeds: Array<Message.Embed>;

      flags: number;

      mention_roles: Array<string>;

      mentions: Array<UsersAPI.User>;

      timestamp: string;

      type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

      edited_timestamp?: string | null;

      resolved?: Message.Resolved | null;

      sticker_items?: Array<Message.StickerItem> | null;

      stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;
    }

    export namespace Message {
      export interface Attachment {
        id: string;

        filename: string;

        proxy_url: string;

        size: number;

        url: string;

        application?: Attachment.Application | null;

        clip_created_at?: string | null;

        clip_participants?: Array<UsersAPI.User> | null;

        content_type?: string | null;

        description?: string | null;

        duration_secs?: number | null;

        ephemeral?: boolean | null;

        height?: number | null;

        title?: string | null;

        waveform?: string | null;

        width?: number | null;
      }

      export namespace Attachment {
        export interface Application {
          id: string;

          description: string;

          flags: number;

          name: string;

          verify_key: string;

          bot?: UsersAPI.User | null;

          bot_public?: boolean | null;

          bot_require_code_grant?: boolean | null;

          cover_image?: string | null;

          custom_install_url?: string | null;

          guild_id?: string | null;

          icon?: string | null;

          install_params?: Application.InstallParams | null;

          integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

          max_participants?: number | null;

          primary_sku_id?: string | null;

          privacy_policy_url?: string | null;

          rpc_origins?: Array<string | null> | null;

          slug?: string | null;

          tags?: Array<string> | null;

          terms_of_service_url?: string | null;

          type?: 4 | null;
        }

        export namespace Application {
          export interface InstallParams {
            permissions: string;

            scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
          }

          export interface IntegrationTypesConfig {
            oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
          }

          export namespace IntegrationTypesConfig {
            export interface Oauth2InstallParams {
              permissions: string;

              scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
            }
          }
        }
      }

      export interface ActionRowComponentResponse {
        id: number;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
      }

      export namespace ActionRowComponentResponse {
        export interface ButtonComponentResponse {
          id: number;

          style: 1 | 2 | 3 | 4 | 5 | 6;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          custom_id?: string | null;

          disabled?: boolean | null;

          emoji?: ButtonComponentResponse.Emoji | null;

          label?: string | null;

          sku_id?: string | null;

          url?: string | null;
        }

        export namespace ButtonComponentResponse {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }

        export interface ChannelSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace ChannelSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface MentionableSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace MentionableSelectComponentResponse {
          export interface RoleSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }

          export interface UserSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface RoleSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace RoleSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface StringSelectComponentResponse {
          id: number;

          custom_id: string;

          options: Array<StringSelectComponentResponse.Option>;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace StringSelectComponentResponse {
          export interface Option {
            label: string;

            value: string;

            default?: boolean | null;

            description?: string | null;

            emoji?: Option.Emoji | null;
          }

          export namespace Option {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }
        }

        export interface TextInputComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Single-line input
           * - `2` - Multi-line input
           */
          style: 1 | 2;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          label?: string | null;

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }

        export interface UserSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace UserSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }
      }

      export interface ButtonComponentResponse {
        id: number;

        style: 1 | 2 | 3 | 4 | 5 | 6;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        custom_id?: string | null;

        disabled?: boolean | null;

        emoji?: ButtonComponentResponse.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentResponse {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }

      export interface ChannelSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentResponse {
        export interface RoleSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentResponse {
        id: number;

        custom_id: string;

        options: Array<StringSelectComponentResponse.Option>;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace StringSelectComponentResponse {
        export interface Option {
          label: string;

          value: string;

          default?: boolean | null;

          description?: string | null;

          emoji?: Option.Emoji | null;
        }

        export namespace Option {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }
      }

      export interface TextInputComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Single-line input
         * - `2` - Multi-line input
         */
        style: 1 | 2;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        label?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        placeholder?: string | null;

        required?: boolean | null;

        value?: string | null;
      }

      export interface UserSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface Embed {
        type: string;

        author?: Embed.Author | null;

        color?: number | null;

        description?: string | null;

        fields?: Array<Embed.Field> | null;

        footer?: Embed.Footer | null;

        image?: Embed.Image | null;

        provider?: Embed.Provider | null;

        thumbnail?: Embed.Thumbnail | null;

        timestamp?: string | null;

        title?: string | null;

        url?: string | null;

        video?: Embed.Video | null;
      }

      export namespace Embed {
        export interface Author {
          name: string;

          icon_url?: string | null;

          proxy_icon_url?: string | null;

          url?: string | null;
        }

        export interface Field {
          inline: boolean;

          name: string;

          value: string;
        }

        export interface Footer {
          text: string;

          icon_url?: string | null;

          proxy_icon_url?: string | null;
        }

        export interface Image {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }

        export interface Provider {
          name: string;

          url?: string | null;
        }

        export interface Thumbnail {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }

        export interface Video {
          flags?: number | null;

          height?: number | null;

          placeholder?: string | null;

          placeholder_version?: number | null;

          proxy_url?: string | null;

          url?: string | null;

          width?: number | null;
        }
      }

      export interface Resolved {
        channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

        members: Record<string, MembersAPI.GuildMemberResponse>;

        roles: Record<string, RolesAPI.GuildRole>;

        users: Record<string, UsersAPI.User>;
      }

      export interface StickerItem {
        id: string;

        format_type: 1 | 2 | 3 | 4;

        name: string;
      }
    }
  }

  export interface Poll {
    allow_multiselect: boolean;

    answers: Array<Poll.Answer>;

    expiry: string;

    layout_type;

    question: Poll.Question;

    results: Poll.Results;
  }

  export namespace Poll {
    export interface Answer {
      answer_id: number;

      poll_media: Answer.PollMedia;
    }

    export namespace Answer {
      export interface PollMedia {
        emoji?: PollMedia.Emoji | null;

        text?: string | null;
      }

      export namespace PollMedia {
        export interface Emoji {
          id?: string | null;

          animated?: boolean | null;

          name?: string | null;
        }
      }
    }

    export interface Question {
      emoji?: Question.Emoji | null;

      text?: string | null;
    }

    export namespace Question {
      export interface Emoji {
        id?: string | null;

        animated?: boolean | null;

        name?: string | null;
      }
    }

    export interface Results {
      is_finalized: boolean;

      answer_counts?: Array<Results.AnswerCount> | null;
    }

    export namespace Results {
      export interface AnswerCount {
        id: number;

        count: number;

        me_voted?: boolean | null;
      }
    }
  }

  export interface PurchaseNotification {
    type: number;

    guild_product_purchase?: PurchaseNotification.GuildProductPurchase | null;
  }

  export namespace PurchaseNotification {
    export interface GuildProductPurchase {
      listing_id: string;

      product_name: string;
    }
  }

  export interface Reaction {
    burst_colors: Array<string>;

    count: number;

    count_details: Reaction.CountDetails;

    emoji: Reaction.Emoji;

    me: boolean;

    me_burst: boolean;
  }

  export namespace Reaction {
    export interface CountDetails {
      burst: number;

      normal: number;
    }

    export interface Emoji {
      id?: string | null;

      animated?: boolean | null;

      name?: string | null;
    }
  }

  export interface ReferencedMessage {
    id: string;

    attachments: Array<ReferencedMessage.Attachment>;

    author: UsersAPI.User;

    channel_id: string;

    components: Array<ReferencedMessage.ActionRowComponentResponse | ReferencedMessage.ButtonComponentResponse | ReferencedMessage.ChannelSelectComponentResponse | ReferencedMessage.MentionableSelectComponentResponse | ReferencedMessage.RoleSelectComponentResponse | ReferencedMessage.StringSelectComponentResponse | ReferencedMessage.TextInputComponentResponse | ReferencedMessage.UserSelectComponentResponse>;

    content: string;

    embeds: Array<ReferencedMessage.Embed>;

    flags: number;

    mention_everyone: boolean;

    mention_roles: Array<string>;

    mentions: Array<UsersAPI.User>;

    pinned: boolean;

    timestamp: string;

    tts: boolean;

    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

    activity?: unknown | null;

    application?: ReferencedMessage.Application | null;

    application_id?: string | null;

    call?: ReferencedMessage.Call | null;

    edited_timestamp?: string | null;

    interaction?: ReferencedMessage.Interaction | null;

    interaction_metadata?: ReferencedMessage.ApplicationCommandInteractionMetadataResponse | ReferencedMessage.MessageComponentInteractionMetadataResponse | ReferencedMessage.ModalSubmitInteractionMetadataResponse | null;

    mention_channels?: Array<ReferencedMessage.MentionChannel | null> | null;

    message_reference?: ReferencedMessage.MessageReference | null;

    message_snapshots?: Array<ReferencedMessage.MessageSnapshot> | null;

    nonce?: number | string | null;

    poll?: ReferencedMessage.Poll | null;

    position?: number | null;

    purchase_notification?: ReferencedMessage.PurchaseNotification | null;

    resolved?: ReferencedMessage.Resolved | null;

    role_subscription_data?: ReferencedMessage.RoleSubscriptionData | null;

    sticker_items?: Array<ReferencedMessage.StickerItem> | null;

    stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;

    thread?: ChannelsAPI.Thread | null;

    webhook_id?: string | null;
  }

  export namespace ReferencedMessage {
    export interface Attachment {
      id: string;

      filename: string;

      proxy_url: string;

      size: number;

      url: string;

      application?: Attachment.Application | null;

      clip_created_at?: string | null;

      clip_participants?: Array<UsersAPI.User> | null;

      content_type?: string | null;

      description?: string | null;

      duration_secs?: number | null;

      ephemeral?: boolean | null;

      height?: number | null;

      title?: string | null;

      waveform?: string | null;

      width?: number | null;
    }

    export namespace Attachment {
      export interface Application {
        id: string;

        description: string;

        flags: number;

        name: string;

        verify_key: string;

        bot?: UsersAPI.User | null;

        bot_public?: boolean | null;

        bot_require_code_grant?: boolean | null;

        cover_image?: string | null;

        custom_install_url?: string | null;

        guild_id?: string | null;

        icon?: string | null;

        install_params?: Application.InstallParams | null;

        integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

        max_participants?: number | null;

        primary_sku_id?: string | null;

        privacy_policy_url?: string | null;

        rpc_origins?: Array<string | null> | null;

        slug?: string | null;

        tags?: Array<string> | null;

        terms_of_service_url?: string | null;

        type?: 4 | null;
      }

      export namespace Application {
        export interface InstallParams {
          permissions: string;

          scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
        }

        export interface IntegrationTypesConfig {
          oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
        }

        export namespace IntegrationTypesConfig {
          export interface Oauth2InstallParams {
            permissions: string;

            scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
          }
        }
      }
    }

    export interface ActionRowComponentResponse {
      id: number;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
    }

    export namespace ActionRowComponentResponse {
      export interface ButtonComponentResponse {
        id: number;

        style: 1 | 2 | 3 | 4 | 5 | 6;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        custom_id?: string | null;

        disabled?: boolean | null;

        emoji?: ButtonComponentResponse.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentResponse {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }

      export interface ChannelSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentResponse {
        export interface RoleSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValueResponse {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentResponse {
        id: number;

        custom_id: string;

        options: Array<StringSelectComponentResponse.Option>;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace StringSelectComponentResponse {
        export interface Option {
          label: string;

          value: string;

          default?: boolean | null;

          description?: string | null;

          emoji?: Option.Emoji | null;
        }

        export namespace Option {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }
      }

      export interface TextInputComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Single-line input
         * - `2` - Multi-line input
         */
        style: 1 | 2;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        label?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        placeholder?: string | null;

        required?: boolean | null;

        value?: string | null;
      }

      export interface UserSelectComponentResponse {
        id: number;

        custom_id: string;

        /**
         * - `1` - Container for other components
         * - `2` - Button object
         * - `3` - Select menu for picking from defined text options
         * - `4` - Text input object
         * - `5` - Select menu for users
         * - `6` - Select menu for roles
         * - `7` - Select menu for mentionables (users and roles)
         * - `8` - Select menu for channels
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentResponse {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }
    }

    export interface ButtonComponentResponse {
      id: number;

      style: 1 | 2 | 3 | 4 | 5 | 6;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      custom_id?: string | null;

      disabled?: boolean | null;

      emoji?: ButtonComponentResponse.Emoji | null;

      label?: string | null;

      sku_id?: string | null;

      url?: string | null;
    }

    export namespace ButtonComponentResponse {
      export interface Emoji {
        name: string;

        id?: string | null;

        animated?: boolean | null;
      }
    }

    export interface ChannelSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace ChannelSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface MentionableSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace MentionableSelectComponentResponse {
      export interface RoleSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }

      export interface UserSelectDefaultValueResponse {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface RoleSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace RoleSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface StringSelectComponentResponse {
      id: number;

      custom_id: string;

      options: Array<StringSelectComponentResponse.Option>;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace StringSelectComponentResponse {
      export interface Option {
        label: string;

        value: string;

        default?: boolean | null;

        description?: string | null;

        emoji?: Option.Emoji | null;
      }

      export namespace Option {
        export interface Emoji {
          name: string;

          id?: string | null;

          animated?: boolean | null;
        }
      }
    }

    export interface TextInputComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Single-line input
       * - `2` - Multi-line input
       */
      style: 1 | 2;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      label?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      placeholder?: string | null;

      required?: boolean | null;

      value?: string | null;
    }

    export interface UserSelectComponentResponse {
      id: number;

      custom_id: string;

      /**
       * - `1` - Container for other components
       * - `2` - Button object
       * - `3` - Select menu for picking from defined text options
       * - `4` - Text input object
       * - `5` - Select menu for users
       * - `6` - Select menu for roles
       * - `7` - Select menu for mentionables (users and roles)
       * - `8` - Select menu for channels
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

      default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

      disabled?: boolean | null;

      max_values?: number | null;

      min_values?: number | null;

      placeholder?: string | null;
    }

    export namespace UserSelectComponentResponse {
      export interface DefaultValue {
        id: string;

        type: 'user' | 'role' | 'channel';
      }
    }

    export interface Embed {
      type: string;

      author?: Embed.Author | null;

      color?: number | null;

      description?: string | null;

      fields?: Array<Embed.Field> | null;

      footer?: Embed.Footer | null;

      image?: Embed.Image | null;

      provider?: Embed.Provider | null;

      thumbnail?: Embed.Thumbnail | null;

      timestamp?: string | null;

      title?: string | null;

      url?: string | null;

      video?: Embed.Video | null;
    }

    export namespace Embed {
      export interface Author {
        name: string;

        icon_url?: string | null;

        proxy_icon_url?: string | null;

        url?: string | null;
      }

      export interface Field {
        inline: boolean;

        name: string;

        value: string;
      }

      export interface Footer {
        text: string;

        icon_url?: string | null;

        proxy_icon_url?: string | null;
      }

      export interface Image {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Provider {
        name: string;

        url?: string | null;
      }

      export interface Thumbnail {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Video {
        flags?: number | null;

        height?: number | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        proxy_url?: string | null;

        url?: string | null;

        width?: number | null;
      }
    }

    export interface Application {
      id: string;

      description: string;

      name: string;

      bot?: UsersAPI.User | null;

      cover_image?: string | null;

      icon?: string | null;

      primary_sku_id?: string | null;

      type?: 4 | null;
    }

    export interface Call {
      participants: Array<string>;

      ended_timestamp?: string | null;
    }

    export interface Interaction {
      id: string;

      name: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      name_localized?: string | null;

      user?: UsersAPI.User | null;
    }

    export interface ApplicationCommandInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      target_message_id?: string | null;

      target_user?: UsersAPI.User | null;

      user?: UsersAPI.User | null;
    }

    export interface MessageComponentInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      interacted_message_id: string;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }

    export interface ModalSubmitInteractionMetadataResponse {
      id: string;

      authorizing_integration_owners: Record<string, string>;

      triggering_interaction_metadata: ModalSubmitInteractionMetadataResponse.ApplicationCommandInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse.MessageComponentInteractionMetadataResponse;

      /**
       * - `1` - Sent by Discord to validate your application's interaction handler
       * - `2` - Sent when a user uses an application command
       * - `3` - Sent when a user interacts with a message component previously sent by
       *   your application
       * - `4` - Sent when a user is filling in an autocomplete option in a chat command
       * - `5` - Sent when a user submits a modal previously sent by your application
       */
      type: 1 | 2 | 3 | 4 | 5;

      original_response_message_id?: string | null;

      user?: UsersAPI.User | null;
    }

    export namespace ModalSubmitInteractionMetadataResponse {
      export interface ApplicationCommandInteractionMetadataResponse {
        id: string;

        authorizing_integration_owners: Record<string, string>;

        /**
         * - `1` - Sent by Discord to validate your application's interaction handler
         * - `2` - Sent when a user uses an application command
         * - `3` - Sent when a user interacts with a message component previously sent by
         *   your application
         * - `4` - Sent when a user is filling in an autocomplete option in a chat command
         * - `5` - Sent when a user submits a modal previously sent by your application
         */
        type: 1 | 2 | 3 | 4 | 5;

        original_response_message_id?: string | null;

        target_message_id?: string | null;

        target_user?: UsersAPI.User | null;

        user?: UsersAPI.User | null;
      }

      export interface MessageComponentInteractionMetadataResponse {
        id: string;

        authorizing_integration_owners: Record<string, string>;

        interacted_message_id: string;

        /**
         * - `1` - Sent by Discord to validate your application's interaction handler
         * - `2` - Sent when a user uses an application command
         * - `3` - Sent when a user interacts with a message component previously sent by
         *   your application
         * - `4` - Sent when a user is filling in an autocomplete option in a chat command
         * - `5` - Sent when a user submits a modal previously sent by your application
         */
        type: 1 | 2 | 3 | 4 | 5;

        original_response_message_id?: string | null;

        user?: UsersAPI.User | null;
      }
    }

    export interface MentionChannel {
      id: string;

      guild_id: string;

      name: string;

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
    }

    export interface MessageReference {
      channel_id: string;

      guild_id?: string | null;

      message_id?: string | null;

      /**
       * - `0` - Reference to a message
       */
      type?: 0 | null;
    }

    export interface MessageSnapshot {
      message?: MessageSnapshot.Message | null;
    }

    export namespace MessageSnapshot {
      export interface Message {
        attachments: Array<Message.Attachment>;

        components: Array<Message.ActionRowComponentResponse | Message.ButtonComponentResponse | Message.ChannelSelectComponentResponse | Message.MentionableSelectComponentResponse | Message.RoleSelectComponentResponse | Message.StringSelectComponentResponse | Message.TextInputComponentResponse | Message.UserSelectComponentResponse>;

        content: string;

        embeds: Array<Message.Embed>;

        flags: number;

        mention_roles: Array<string>;

        mentions: Array<UsersAPI.User>;

        timestamp: string;

        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 55;

        edited_timestamp?: string | null;

        resolved?: Message.Resolved | null;

        sticker_items?: Array<Message.StickerItem> | null;

        stickers?: Array<Shared.GuildSticker | StickersAPI.StandardSticker> | null;
      }

      export namespace Message {
        export interface Attachment {
          id: string;

          filename: string;

          proxy_url: string;

          size: number;

          url: string;

          application?: Attachment.Application | null;

          clip_created_at?: string | null;

          clip_participants?: Array<UsersAPI.User> | null;

          content_type?: string | null;

          description?: string | null;

          duration_secs?: number | null;

          ephemeral?: boolean | null;

          height?: number | null;

          title?: string | null;

          waveform?: string | null;

          width?: number | null;
        }

        export namespace Attachment {
          export interface Application {
            id: string;

            description: string;

            flags: number;

            name: string;

            verify_key: string;

            bot?: UsersAPI.User | null;

            bot_public?: boolean | null;

            bot_require_code_grant?: boolean | null;

            cover_image?: string | null;

            custom_install_url?: string | null;

            guild_id?: string | null;

            icon?: string | null;

            install_params?: Application.InstallParams | null;

            integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

            max_participants?: number | null;

            primary_sku_id?: string | null;

            privacy_policy_url?: string | null;

            rpc_origins?: Array<string | null> | null;

            slug?: string | null;

            tags?: Array<string> | null;

            terms_of_service_url?: string | null;

            type?: 4 | null;
          }

          export namespace Application {
            export interface InstallParams {
              permissions: string;

              scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
            }

            export interface IntegrationTypesConfig {
              oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
            }

            export namespace IntegrationTypesConfig {
              export interface Oauth2InstallParams {
                permissions: string;

                scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
              }
            }
          }
        }

        export interface ActionRowComponentResponse {
          id: number;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          components?: Array<ActionRowComponentResponse.ButtonComponentResponse | ActionRowComponentResponse.ChannelSelectComponentResponse | ActionRowComponentResponse.MentionableSelectComponentResponse | ActionRowComponentResponse.RoleSelectComponentResponse | ActionRowComponentResponse.StringSelectComponentResponse | ActionRowComponentResponse.TextInputComponentResponse | ActionRowComponentResponse.UserSelectComponentResponse> | null;
        }

        export namespace ActionRowComponentResponse {
          export interface ButtonComponentResponse {
            id: number;

            style: 1 | 2 | 3 | 4 | 5 | 6;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            custom_id?: string | null;

            disabled?: boolean | null;

            emoji?: ButtonComponentResponse.Emoji | null;

            label?: string | null;

            sku_id?: string | null;

            url?: string | null;
          }

          export namespace ButtonComponentResponse {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }

          export interface ChannelSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

            default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace ChannelSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface MentionableSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace MentionableSelectComponentResponse {
            export interface RoleSelectDefaultValueResponse {
              id: string;

              type: 'user' | 'role' | 'channel';
            }

            export interface UserSelectDefaultValueResponse {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface RoleSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace RoleSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }

          export interface StringSelectComponentResponse {
            id: number;

            custom_id: string;

            options: Array<StringSelectComponentResponse.Option>;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace StringSelectComponentResponse {
            export interface Option {
              label: string;

              value: string;

              default?: boolean | null;

              description?: string | null;

              emoji?: Option.Emoji | null;
            }

            export namespace Option {
              export interface Emoji {
                name: string;

                id?: string | null;

                animated?: boolean | null;
              }
            }
          }

          export interface TextInputComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Single-line input
             * - `2` - Multi-line input
             */
            style: 1 | 2;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            label?: string | null;

            max_length?: number | null;

            min_length?: number | null;

            placeholder?: string | null;

            required?: boolean | null;

            value?: string | null;
          }

          export interface UserSelectComponentResponse {
            id: number;

            custom_id: string;

            /**
             * - `1` - Container for other components
             * - `2` - Button object
             * - `3` - Select menu for picking from defined text options
             * - `4` - Text input object
             * - `5` - Select menu for users
             * - `6` - Select menu for roles
             * - `7` - Select menu for mentionables (users and roles)
             * - `8` - Select menu for channels
             */
            type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

            disabled?: boolean | null;

            max_values?: number | null;

            min_values?: number | null;

            placeholder?: string | null;
          }

          export namespace UserSelectComponentResponse {
            export interface DefaultValue {
              id: string;

              type: 'user' | 'role' | 'channel';
            }
          }
        }

        export interface ButtonComponentResponse {
          id: number;

          style: 1 | 2 | 3 | 4 | 5 | 6;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          custom_id?: string | null;

          disabled?: boolean | null;

          emoji?: ButtonComponentResponse.Emoji | null;

          label?: string | null;

          sku_id?: string | null;

          url?: string | null;
        }

        export namespace ButtonComponentResponse {
          export interface Emoji {
            name: string;

            id?: string | null;

            animated?: boolean | null;
          }
        }

        export interface ChannelSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          default_values?: Array<ChannelSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace ChannelSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface MentionableSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<MentionableSelectComponentResponse.RoleSelectDefaultValueResponse | MentionableSelectComponentResponse.UserSelectDefaultValueResponse> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace MentionableSelectComponentResponse {
          export interface RoleSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }

          export interface UserSelectDefaultValueResponse {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface RoleSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<RoleSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace RoleSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface StringSelectComponentResponse {
          id: number;

          custom_id: string;

          options: Array<StringSelectComponentResponse.Option>;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace StringSelectComponentResponse {
          export interface Option {
            label: string;

            value: string;

            default?: boolean | null;

            description?: string | null;

            emoji?: Option.Emoji | null;
          }

          export namespace Option {
            export interface Emoji {
              name: string;

              id?: string | null;

              animated?: boolean | null;
            }
          }
        }

        export interface TextInputComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Single-line input
           * - `2` - Multi-line input
           */
          style: 1 | 2;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          label?: string | null;

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }

        export interface UserSelectComponentResponse {
          id: number;

          custom_id: string;

          /**
           * - `1` - Container for other components
           * - `2` - Button object
           * - `3` - Select menu for picking from defined text options
           * - `4` - Text input object
           * - `5` - Select menu for users
           * - `6` - Select menu for roles
           * - `7` - Select menu for mentionables (users and roles)
           * - `8` - Select menu for channels
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

          default_values?: Array<UserSelectComponentResponse.DefaultValue> | null;

          disabled?: boolean | null;

          max_values?: number | null;

          min_values?: number | null;

          placeholder?: string | null;
        }

        export namespace UserSelectComponentResponse {
          export interface DefaultValue {
            id: string;

            type: 'user' | 'role' | 'channel';
          }
        }

        export interface Embed {
          type: string;

          author?: Embed.Author | null;

          color?: number | null;

          description?: string | null;

          fields?: Array<Embed.Field> | null;

          footer?: Embed.Footer | null;

          image?: Embed.Image | null;

          provider?: Embed.Provider | null;

          thumbnail?: Embed.Thumbnail | null;

          timestamp?: string | null;

          title?: string | null;

          url?: string | null;

          video?: Embed.Video | null;
        }

        export namespace Embed {
          export interface Author {
            name: string;

            icon_url?: string | null;

            proxy_icon_url?: string | null;

            url?: string | null;
          }

          export interface Field {
            inline: boolean;

            name: string;

            value: string;
          }

          export interface Footer {
            text: string;

            icon_url?: string | null;

            proxy_icon_url?: string | null;
          }

          export interface Image {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }

          export interface Provider {
            name: string;

            url?: string | null;
          }

          export interface Thumbnail {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }

          export interface Video {
            flags?: number | null;

            height?: number | null;

            placeholder?: string | null;

            placeholder_version?: number | null;

            proxy_url?: string | null;

            url?: string | null;

            width?: number | null;
          }
        }

        export interface Resolved {
          channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

          members: Record<string, MembersAPI.GuildMemberResponse>;

          roles: Record<string, RolesAPI.GuildRole>;

          users: Record<string, UsersAPI.User>;
        }

        export interface StickerItem {
          id: string;

          format_type: 1 | 2 | 3 | 4;

          name: string;
        }
      }
    }

    export interface Poll {
      allow_multiselect: boolean;

      answers: Array<Poll.Answer>;

      expiry: string;

      layout_type;

      question: Poll.Question;

      results: Poll.Results;
    }

    export namespace Poll {
      export interface Answer {
        answer_id: number;

        poll_media: Answer.PollMedia;
      }

      export namespace Answer {
        export interface PollMedia {
          emoji?: PollMedia.Emoji | null;

          text?: string | null;
        }

        export namespace PollMedia {
          export interface Emoji {
            id?: string | null;

            animated?: boolean | null;

            name?: string | null;
          }
        }
      }

      export interface Question {
        emoji?: Question.Emoji | null;

        text?: string | null;
      }

      export namespace Question {
        export interface Emoji {
          id?: string | null;

          animated?: boolean | null;

          name?: string | null;
        }
      }

      export interface Results {
        is_finalized: boolean;

        answer_counts?: Array<Results.AnswerCount> | null;
      }

      export namespace Results {
        export interface AnswerCount {
          id: number;

          count: number;

          me_voted?: boolean | null;
        }
      }
    }

    export interface PurchaseNotification {
      type: number;

      guild_product_purchase?: PurchaseNotification.GuildProductPurchase | null;
    }

    export namespace PurchaseNotification {
      export interface GuildProductPurchase {
        listing_id: string;

        product_name: string;
      }
    }

    export interface Resolved {
      channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

      members: Record<string, MembersAPI.GuildMemberResponse>;

      roles: Record<string, RolesAPI.GuildRole>;

      users: Record<string, UsersAPI.User>;
    }

    export interface RoleSubscriptionData {
      is_renewal: boolean;

      role_subscription_listing_id: string;

      tier_name: string;

      total_months_subscribed: number;
    }

    export interface StickerItem {
      id: string;

      format_type: 1 | 2 | 3 | 4;

      name: string;
    }
  }

  export interface Resolved {
    channels: Record<string, Shared.GuildChannel | UsersChannelsAPI.PrivateChannelResponse | UsersChannelsAPI.PrivateGroupChannelResponse | ChannelsAPI.Thread>;

    members: Record<string, MembersAPI.GuildMemberResponse>;

    roles: Record<string, RolesAPI.GuildRole>;

    users: Record<string, UsersAPI.User>;
  }

  export interface RoleSubscriptionData {
    is_renewal: boolean;

    role_subscription_listing_id: string;

    tier_name: string;

    total_months_subscribed: number;
  }

  export interface StickerItem {
    id: string;

    format_type: 1 | 2 | 3 | 4;

    name: string;
  }
}

export interface PrivateApplicationResponse {
  id: string;

  approximate_user_install_count: number;

  description: string;

  /**
   * - `0` - inherit guild content filter setting
   * - `1` - interactions will always be scanned
   */
  explicit_content_filter: 0 | 1;

  flags: number;

  name: string;

  owner: UsersAPI.User;

  redirect_uris: Array<string | null>;

  verify_key: string;

  approximate_guild_count?: number | null;

  bot?: UsersAPI.User | null;

  bot_public?: boolean | null;

  bot_require_code_grant?: boolean | null;

  cover_image?: string | null;

  custom_install_url?: string | null;

  guild_id?: string | null;

  icon?: string | null;

  install_params?: PrivateApplicationResponse.InstallParams | null;

  integration_types_config?: Record<string, PrivateApplicationResponse.IntegrationTypesConfig> | null;

  interactions_endpoint_url?: string | null;

  max_participants?: number | null;

  primary_sku_id?: string | null;

  privacy_policy_url?: string | null;

  role_connections_verification_url?: string | null;

  rpc_origins?: Array<string | null> | null;

  slug?: string | null;

  tags?: Array<string> | null;

  team?: PrivateApplicationResponse.Team | null;

  terms_of_service_url?: string | null;

  type?: 4 | null;
}

export namespace PrivateApplicationResponse {
  export interface InstallParams {
    permissions: string;

    scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
  }

  export interface IntegrationTypesConfig {
    oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
  }

  export namespace IntegrationTypesConfig {
    export interface Oauth2InstallParams {
      permissions: string;

      scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;
    }
  }

  export interface Team {
    id: string;

    members: Array<Team.Member>;

    name: string;

    owner_user_id: string;

    icon?: string | null;
  }

  export namespace Team {
    export interface Member {
      /**
       * - `1` - User has been invited to the team.
       * - `2` - User has accepted the team invitation.
       */
      membership_state: 1 | 2;

      team_id: string;

      user: UsersAPI.User;
    }
  }
}

export interface ThreadsResponse {
  members: Array<ThreadMembersAPI.ThreadMemberResponse>;

  threads: Array<ChannelsAPI.Thread>;

  has_more?: boolean | null;
}

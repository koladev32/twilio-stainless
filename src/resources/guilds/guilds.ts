// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as EmojisAPI from '../applications/emojis';
import * as ChannelsAPI from '../channels/channels';
import * as AuditLogsAPI from './audit-logs';
import { AuditLogRetrieveParams, AuditLogs } from './audit-logs';
import * as BansAPI from './bans';
import { BanListParams, BanListResponse, BanUpdateParams, Bans, GuildBan } from './bans';
import * as GuildsChannelsAPI from './channels';
import { ChannelCreateParams, ChannelListResponse, ChannelUpdateParams, Channels } from './channels';
import * as GuildsEmojisAPI from './emojis';
import {
  Emoji as EmojisAPIEmoji,
  EmojiCreateParams,
  EmojiListResponse,
  EmojiUpdateParams,
  Emojis,
} from './emojis';
import * as IntegrationsAPI from './integrations';
import { IntegrationListResponse, Integrations } from './integrations';
import * as InvitesAPI from './invites';
import { InviteListResponse, Invites } from './invites';
import * as NewMemberWelcomeAPI from './new-member-welcome';
import { GuildHomeSettings, NewMemberWelcome } from './new-member-welcome';
import * as OnboardingAPI from './onboarding';
import { Onboarding, OnboardingUpdateParams } from './onboarding';
import * as PreviewAPI from './preview';
import { GuildPreview, Preview } from './preview';
import * as PruneAPI from './prune';
import { GuildPrune, Prune, PruneRetrieveParams } from './prune';
import * as RegionsAPI from './regions';
import { RegionListResponse, Regions, VoiceRegion } from './regions';
import * as RolesAPI from './roles';
import {
  GuildRole,
  RoleCreateParams,
  RoleListResponse,
  RoleUpdateParams,
  RoleUpdateResponse,
  Roles,
} from './roles';
import * as SoundboardSoundsAPI from './soundboard-sounds';
import {
  SoundboardSound,
  SoundboardSoundCreateParams,
  SoundboardSoundListResponse,
  SoundboardSoundUpdateParams,
  SoundboardSounds,
} from './soundboard-sounds';
import * as StickersAPI from './stickers';
import { StickerCreateParams, StickerListResponse, StickerUpdateParams, Stickers } from './stickers';
import * as TemplatesAPI from './templates';
import {
  GuildTemplate,
  TemplateCreateParams,
  TemplateListResponse,
  TemplateUpdateParams,
  Templates,
} from './templates';
import * as ThreadsAPI from './threads';
import { Threads, ThreadsResponse } from './threads';
import * as VanityURLsAPI from './vanity-urls';
import { VanityURLs } from './vanity-urls';
import * as VoiceStatesAPI from './voice-states';
import {
  VoiceState,
  VoiceStateResponse,
  VoiceStateUpdateParams,
  VoiceStateUpdateSelfParams,
  VoiceStates,
} from './voice-states';
import * as WebhooksAPI from './webhooks';
import { WebhookListResponse, Webhooks } from './webhooks';
import * as WelcomeScreenAPI from './welcome-screen';
import { GuildWelcomeScreen, WelcomeScreen, WelcomeScreenUpdateParams } from './welcome-screen';
import * as WidgetAPI from './widget';
import { WidgetSettings, WidgetUpdateParams } from './widget';
import * as WidgetsAPI from './widgets';
import { WidgetRetrievePngParams, Widgets } from './widgets';
import * as UsersAPI from '../users/users';
import * as WebhooksWebhooksAPI from '../webhooks/webhooks';
import * as CommandsAPI from '../applications/commands/commands';
import * as AutoModerationAPI from './auto-moderation/auto-moderation';
import { AutoModeration } from './auto-moderation/auto-moderation';
import * as RulesAPI from './auto-moderation/rules';
import * as MembersAPI from './members/members';
import {
  GuildMember,
  GuildMemberResponse,
  MemberListParams,
  MemberListResponse,
  MemberSearchParams,
  MemberSearchResponse,
  MemberUpdateParams,
  Members,
  PrivateGuildMemberResponse,
} from './members/members';
import * as ScheduledEventsAPI from './scheduled-events/scheduled-events';
import {
  ExternalScheduledEvent,
  ScheduledEventCreateParams,
  ScheduledEventCreateResponse,
  ScheduledEventListParams,
  ScheduledEventListResponse,
  ScheduledEventRetrieveParams,
  ScheduledEventRetrieveResponse,
  ScheduledEventUpdateParams,
  ScheduledEventUpdateResponse,
  ScheduledEvents,
  StageScheduledEvent,
  VoiceScheduledEvent,
} from './scheduled-events/scheduled-events';

export class Guilds extends APIResource {
  scheduledEvents: ScheduledEventsAPI.ScheduledEvents = new ScheduledEventsAPI.ScheduledEvents(this._client);
  autoModeration: AutoModerationAPI.AutoModeration = new AutoModerationAPI.AutoModeration(this._client);
  voiceStates: VoiceStatesAPI.VoiceStates = new VoiceStatesAPI.VoiceStates(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  newMemberWelcome: NewMemberWelcomeAPI.NewMemberWelcome = new NewMemberWelcomeAPI.NewMemberWelcome(
    this._client,
  );
  soundboardSounds: SoundboardSoundsAPI.SoundboardSounds = new SoundboardSoundsAPI.SoundboardSounds(
    this._client,
  );
  welcomeScreen: WelcomeScreenAPI.WelcomeScreen = new WelcomeScreenAPI.WelcomeScreen(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
  onboarding: OnboardingAPI.Onboarding = new OnboardingAPI.Onboarding(this._client);
  vanityURLs: VanityURLsAPI.VanityURLs = new VanityURLsAPI.VanityURLs(this._client);
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  stickers: StickersAPI.Stickers = new StickersAPI.Stickers(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  channels: GuildsChannelsAPI.Channels = new GuildsChannelsAPI.Channels(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  emojis: GuildsEmojisAPI.Emojis = new GuildsEmojisAPI.Emojis(this._client);
  widget: WidgetAPI.Widget = new WidgetAPI.Widget(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  prune: PruneAPI.Prune = new PruneAPI.Prune(this._client);
  bans: BansAPI.Bans = new BansAPI.Bans(this._client);

  create(body: GuildCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Guild> {
    return this._client.post('/guilds', { body, ...options });
  }

  retrieve(
    guildId: string,
    query?: GuildRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GuildRetrieveResponse>;
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildRetrieveResponse>;
  retrieve(
    guildId: string,
    query: GuildRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GuildRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}`, { query, ...options });
  }

  update(
    guildId: string,
    body: GuildUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Guild> {
    return this._client.patch(`/guilds/${guildId}`, { body, ...options });
  }

  delete(guildId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  bulkBan(
    guildId: string,
    body: GuildBulkBanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkBanUsers> {
    return this._client.post(`/guilds/${guildId}/bulk-ban`, { body, ...options });
  }

  mfa(guildId: string, body: GuildMfaParams, options?: Core.RequestOptions): Core.APIPromise<GuildMfaLevel> {
    return this._client.post(`/guilds/${guildId}/mfa`, { body, ...options });
  }
}

export interface BulkBanUsers {
  banned_users: Array<string>;

  failed_users: Array<string>;
}

export interface GuildAuditLog {
  application_commands: Array<CommandsAPI.ApplicationCommandResponse>;

  audit_log_entries: Array<GuildAuditLog.AuditLogEntry>;

  auto_moderation_rules: Array<
    | RulesAPI.DefaultKeywordRuleResponse
    | RulesAPI.KeywordRuleResponse
    | RulesAPI.MlSpamRuleResponse
    | RulesAPI.MentionSpamRuleResponse
    | RulesAPI.SpamLinkRuleResponse
    | null
  >;

  guild_scheduled_events: Array<
    | ScheduledEventsAPI.ExternalScheduledEvent
    | ScheduledEventsAPI.StageScheduledEvent
    | ScheduledEventsAPI.VoiceScheduledEvent
  >;

  integrations: Array<
    | GuildAuditLog.PartialDiscordIntegrationResponse
    | GuildAuditLog.PartialExternalConnectionIntegrationResponse
    | GuildAuditLog.PartialGuildSubscriptionIntegrationResponse
  >;

  threads: Array<ChannelsAPI.Thread>;

  users: Array<UsersAPI.User>;

  webhooks: Array<
    | WebhooksWebhooksAPI.ApplicationIncomingWebhook
    | WebhooksWebhooksAPI.ChannelFollowerWebhook
    | Shared.GuildIncomingWebhook
  >;
}

export namespace GuildAuditLog {
  export interface AuditLogEntry {
    id: string;

    action_type:
      | 1
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 30
      | 31
      | 32
      | 40
      | 41
      | 42
      | 50
      | 51
      | 52
      | 60
      | 61
      | 62
      | 72
      | 73
      | 74
      | 75
      | 80
      | 81
      | 82
      | 83
      | 84
      | 85
      | 90
      | 91
      | 92
      | 100
      | 101
      | 102
      | 110
      | 111
      | 112
      | 121
      | 130
      | 131
      | 132
      | 140
      | 141
      | 142
      | 143
      | 144
      | 145
      | 146
      | 150
      | 151
      | 163
      | 164
      | 165
      | 166
      | 167
      | 171
      | 172
      | 180
      | 190
      | 191
      | 192
      | 193;

    changes?: Array<AuditLogEntry.Change> | null;

    options?: { [key: string]: string } | null;

    reason?: string | null;

    target_id?: string | null;

    user_id?: string | null;
  }

  export namespace AuditLogEntry {
    export interface Change {
      key?: string | null;

      new_value?: unknown;

      old_value?: unknown;
    }
  }

  export interface PartialDiscordIntegrationResponse {
    id: string;

    application_id: string;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';

    account?: PartialDiscordIntegrationResponse.Account | null;

    name?: string | null;
  }

  export namespace PartialDiscordIntegrationResponse {
    export interface Account {
      id: string;

      name?: string | null;
    }
  }

  export interface PartialExternalConnectionIntegrationResponse {
    id: string;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';

    account?: PartialExternalConnectionIntegrationResponse.Account | null;

    name?: string | null;
  }

  export namespace PartialExternalConnectionIntegrationResponse {
    export interface Account {
      id: string;

      name?: string | null;
    }
  }

  export interface PartialGuildSubscriptionIntegrationResponse {
    id: string;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';

    account?: PartialGuildSubscriptionIntegrationResponse.Account | null;

    name?: string | null;
  }

  export namespace PartialGuildSubscriptionIntegrationResponse {
    export interface Account {
      id: string;

      name?: string | null;
    }
  }
}

export interface GuildMfaLevel {
  /**
   * - `0` - Guild has no MFA/2FA requirement for moderation actions
   * - `1` - Guild has a 2FA requirement for moderation actions
   */
  level: 0 | 1;
}

export interface GuildOnboarding {
  default_channel_ids: Array<string>;

  enabled: boolean;

  guild_id: string;

  prompts: Array<GuildOnboarding.Prompt>;
}

export namespace GuildOnboarding {
  export interface Prompt {
    id: string;

    in_onboarding: boolean;

    options: Array<Prompt.Option>;

    required: boolean;

    single_select: boolean;

    title: string;

    /**
     * - `0` - Multiple choice options
     * - `1` - Many options shown as a dropdown
     */
    type: 0 | 1;
  }

  export namespace Prompt {
    export interface Option {
      id: string;

      channel_ids: Array<string>;

      description: string;

      emoji: Option.Emoji;

      role_ids: Array<string>;

      title: string;
    }

    export namespace Option {
      export interface Emoji {
        id?: string | null;

        animated?: boolean | null;

        name?: string | null;
      }
    }
  }
}

export interface GuildResponse {
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

  features: Array<
    | 'ANIMATED_BANNER'
    | 'ANIMATED_ICON'
    | 'APPLICATION_COMMAND_PERMISSIONS_V2'
    | 'AUTO_MODERATION'
    | 'BANNER'
    | 'COMMUNITY'
    | 'CREATOR_MONETIZABLE_PROVISIONAL'
    | 'CREATOR_STORE_PAGE'
    | 'DEVELOPER_SUPPORT_SERVER'
    | 'DISCOVERABLE'
    | 'FEATURABLE'
    | 'INVITES_DISABLED'
    | 'INVITE_SPLASH'
    | 'MEMBER_VERIFICATION_GATE_ENABLED'
    | 'MORE_STICKERS'
    | 'NEWS'
    | 'PARTNERED'
    | 'PREVIEW_ENABLED'
    | 'RAID_ALERTS_DISABLED'
    | 'ROLE_ICONS'
    | 'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE'
    | 'ROLE_SUBSCRIPTIONS_ENABLED'
    | 'TICKETED_EVENTS_ENABLED'
    | 'VANITY_URL'
    | 'VERIFIED'
    | 'VIP_REGIONS'
    | 'WELCOME_SCREEN_ENABLED'
  >;

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
  preferred_locale:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en-GB'
    | 'en-US'
    | 'es-419'
    | 'es-ES'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sv-SE'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-CN'
    | 'zh-TW';

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

  stickers: Array<Shared.GuildSticker>;

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

export interface UserGuildOnboarding {
  default_channel_ids: Array<string>;

  enabled: boolean;

  guild_id: string;

  prompts: Array<UserGuildOnboarding.Prompt>;
}

export namespace UserGuildOnboarding {
  export interface Prompt {
    id: string;

    in_onboarding: boolean;

    options: Array<Prompt.Option>;

    required: boolean;

    single_select: boolean;

    title: string;

    /**
     * - `0` - Multiple choice options
     * - `1` - Many options shown as a dropdown
     */
    type: 0 | 1;
  }

  export namespace Prompt {
    export interface Option {
      id: string;

      channel_ids: Array<string>;

      description: string;

      emoji: Option.Emoji;

      role_ids: Array<string>;

      title: string;
    }

    export namespace Option {
      export interface Emoji {
        id?: string | null;

        animated?: boolean | null;

        name?: string | null;
      }
    }
  }
}

export interface VanityURL {
  uses: number;

  code?: string | null;

  error?: VanityURL.Error | null;
}

export namespace VanityURL {
  export interface Error {
    code: number;

    message: string;
  }
}

export interface Widget {
  id: string;

  channels: Array<Widget.Channel>;

  members: Array<Widget.Member>;

  name: string;

  presence_count: number;

  instant_invite?: string | null;
}

export namespace Widget {
  export interface Channel {
    id: string;

    name: string;

    position: number;
  }

  export interface Member {
    id: string;

    avatar_url: string;

    discriminator: '0000';

    status: string;

    username: string;

    activity?: Member.Activity | null;

    avatar?: null;

    channel_id?: string | null;

    deaf?: boolean | null;

    mute?: boolean | null;

    self_deaf?: boolean | null;

    self_mute?: boolean | null;

    suppress?: boolean | null;
  }

  export namespace Member {
    export interface Activity {
      name: string;
    }
  }
}

export interface GuildRetrieveResponse {
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

  features: Array<
    | 'ANIMATED_BANNER'
    | 'ANIMATED_ICON'
    | 'APPLICATION_COMMAND_PERMISSIONS_V2'
    | 'AUTO_MODERATION'
    | 'BANNER'
    | 'COMMUNITY'
    | 'CREATOR_MONETIZABLE_PROVISIONAL'
    | 'CREATOR_STORE_PAGE'
    | 'DEVELOPER_SUPPORT_SERVER'
    | 'DISCOVERABLE'
    | 'FEATURABLE'
    | 'INVITES_DISABLED'
    | 'INVITE_SPLASH'
    | 'MEMBER_VERIFICATION_GATE_ENABLED'
    | 'MORE_STICKERS'
    | 'NEWS'
    | 'PARTNERED'
    | 'PREVIEW_ENABLED'
    | 'RAID_ALERTS_DISABLED'
    | 'ROLE_ICONS'
    | 'ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE'
    | 'ROLE_SUBSCRIPTIONS_ENABLED'
    | 'TICKETED_EVENTS_ENABLED'
    | 'VANITY_URL'
    | 'VERIFIED'
    | 'VIP_REGIONS'
    | 'WELCOME_SCREEN_ENABLED'
  >;

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
  preferred_locale:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en-GB'
    | 'en-US'
    | 'es-419'
    | 'es-ES'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sv-SE'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-CN'
    | 'zh-TW';

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

  stickers: Array<Shared.GuildSticker>;

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

  approximate_member_count?: number | null;

  approximate_presence_count?: number | null;

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

export interface GuildCreateParams {
  name: string;

  afk_channel_id?: string | null;

  afk_timeout?: 60 | 300 | 900 | 1800 | 3600 | null;

  channels?: Array<GuildCreateParams.Channel> | null;

  /**
   * - `0` - members will receive notifications for all messages by default
   * - `1` - members will receive notifications only for messages that @mention them
   *   by default
   */
  default_message_notifications?: 0 | 1 | null;

  description?: string | null;

  /**
   * - `0` - media content will not be scanned
   * - `1` - media content sent by members without roles will be scanned
   * - `2` - media content sent by all members will be scanned
   */
  explicit_content_filter?: 0 | 1 | 2 | null;

  icon?: string | null;

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
  preferred_locale?:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en-GB'
    | 'en-US'
    | 'es-419'
    | 'es-ES'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sv-SE'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-CN'
    | 'zh-TW'
    | null;

  region?: string | null;

  roles?: Array<GuildCreateParams.Role> | null;

  system_channel_flags?: number | null;

  system_channel_id?: string | null;

  /**
   * - `0` - unrestricted
   * - `1` - must have verified email on account
   * - `2` - must be registered on Discord for longer than 5 minutes
   * - `3` - must be a member of the server for longer than 10 minutes
   * - `4` - must have a verified phone number
   */
  verification_level?: 0 | 1 | 2 | 3 | 4 | null;
}

export namespace GuildCreateParams {
  export interface Channel {
    name: string;

    id?: string | null;

    available_tags?: Array<Channel.AvailableTag> | null;

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

    default_reaction_emoji?: Channel.DefaultReactionEmoji | null;

    /**
     * - `0` - Sort forum posts by activity
     * - `1` - Sort forum posts by creation time (from most recent to oldest)
     */
    default_sort_order?: 0 | 1 | null;

    default_thread_rate_limit_per_user?: number | null;

    nsfw?: boolean | null;

    parent_id?: string | null;

    permission_overwrites?: Array<Channel.PermissionOverwrite> | null;

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

  export namespace Channel {
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

  export interface Role {
    id: number;

    color?: number | null;

    hoist?: boolean | null;

    mentionable?: boolean | null;

    name?: string | null;

    permissions?: number | null;

    unicode_emoji?: string | null;
  }
}

export interface GuildRetrieveParams {
  with_counts?: boolean;
}

export interface GuildUpdateParams {
  afk_channel_id?: string | null;

  afk_timeout?: 60 | 300 | 900 | 1800 | 3600 | null;

  banner?: string | null;

  /**
   * - `0` - members will receive notifications for all messages by default
   * - `1` - members will receive notifications only for messages that @mention them
   *   by default
   */
  default_message_notifications?: 0 | 1 | null;

  description?: string | null;

  discovery_splash?: string | null;

  /**
   * - `0` - media content will not be scanned
   * - `1` - media content sent by members without roles will be scanned
   * - `2` - media content sent by all members will be scanned
   */
  explicit_content_filter?: 0 | 1 | 2 | null;

  features?: Array<string | null> | null;

  home_header?: string | null;

  icon?: string | null;

  name?: string;

  owner_id?: string;

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
  preferred_locale?:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en-GB'
    | 'en-US'
    | 'es-419'
    | 'es-ES'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sv-SE'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-CN'
    | 'zh-TW'
    | null;

  premium_progress_bar_enabled?: boolean | null;

  public_updates_channel_id?: string | null;

  region?: string | null;

  rules_channel_id?: string | null;

  safety_alerts_channel_id?: string | null;

  splash?: string | null;

  system_channel_flags?: number | null;

  system_channel_id?: string | null;

  /**
   * - `0` - unrestricted
   * - `1` - must have verified email on account
   * - `2` - must be registered on Discord for longer than 5 minutes
   * - `3` - must be a member of the server for longer than 10 minutes
   * - `4` - must have a verified phone number
   */
  verification_level?: 0 | 1 | 2 | 3 | 4 | null;
}

export interface GuildBulkBanParams {
  user_ids: Array<string>;

  delete_message_seconds?: number | null;
}

export interface GuildMfaParams {
  /**
   * - `0` - Guild has no MFA/2FA requirement for moderation actions
   * - `1` - Guild has a 2FA requirement for moderation actions
   */
  level: 0 | 1;
}

Guilds.ScheduledEvents = ScheduledEvents;
Guilds.AutoModeration = AutoModeration;
Guilds.VoiceStates = VoiceStates;
Guilds.Members = Members;
Guilds.Threads = Threads;
Guilds.Templates = Templates;
Guilds.NewMemberWelcome = NewMemberWelcome;
Guilds.SoundboardSounds = SoundboardSounds;
Guilds.WelcomeScreen = WelcomeScreen;
Guilds.Integrations = Integrations;
Guilds.Widgets = Widgets;
Guilds.Onboarding = Onboarding;
Guilds.VanityURLs = VanityURLs;
Guilds.AuditLogs = AuditLogs;
Guilds.Stickers = Stickers;
Guilds.Webhooks = Webhooks;
Guilds.Channels = Channels;
Guilds.Preview = Preview;
Guilds.Invites = Invites;
Guilds.Regions = Regions;
Guilds.Emojis = Emojis;
Guilds.Roles = Roles;
Guilds.Prune = Prune;
Guilds.Bans = Bans;

export declare namespace Guilds {
  export {
    type BulkBanUsers as BulkBanUsers,
    type GuildAuditLog as GuildAuditLog,
    type GuildMfaLevel as GuildMfaLevel,
    type GuildOnboarding as GuildOnboarding,
    type GuildResponse as GuildResponse,
    type UserGuildOnboarding as UserGuildOnboarding,
    type VanityURL as VanityURL,
    type Widget as Widget,
    type GuildRetrieveResponse as GuildRetrieveResponse,
    type GuildCreateParams as GuildCreateParams,
    type GuildRetrieveParams as GuildRetrieveParams,
    type GuildUpdateParams as GuildUpdateParams,
    type GuildBulkBanParams as GuildBulkBanParams,
    type GuildMfaParams as GuildMfaParams,
  };

  export {
    ScheduledEvents as ScheduledEvents,
    type ExternalScheduledEvent as ExternalScheduledEvent,
    type StageScheduledEvent as StageScheduledEvent,
    type VoiceScheduledEvent as VoiceScheduledEvent,
    type ScheduledEventCreateResponse as ScheduledEventCreateResponse,
    type ScheduledEventRetrieveResponse as ScheduledEventRetrieveResponse,
    type ScheduledEventUpdateResponse as ScheduledEventUpdateResponse,
    type ScheduledEventListResponse as ScheduledEventListResponse,
    type ScheduledEventCreateParams as ScheduledEventCreateParams,
    type ScheduledEventRetrieveParams as ScheduledEventRetrieveParams,
    type ScheduledEventUpdateParams as ScheduledEventUpdateParams,
    type ScheduledEventListParams as ScheduledEventListParams,
  };

  export { AutoModeration as AutoModeration };

  export {
    VoiceStates as VoiceStates,
    type VoiceState as VoiceState,
    type VoiceStateResponse as VoiceStateResponse,
    type VoiceStateUpdateParams as VoiceStateUpdateParams,
    type VoiceStateUpdateSelfParams as VoiceStateUpdateSelfParams,
  };

  export {
    Members as Members,
    type GuildMember as GuildMember,
    type GuildMemberResponse as GuildMemberResponse,
    type PrivateGuildMemberResponse as PrivateGuildMemberResponse,
    type MemberListResponse as MemberListResponse,
    type MemberSearchResponse as MemberSearchResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberSearchParams as MemberSearchParams,
  };

  export { Threads as Threads, type ThreadsResponse as ThreadsResponse };

  export {
    Templates as Templates,
    type GuildTemplate as GuildTemplate,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
  };

  export { NewMemberWelcome as NewMemberWelcome, type GuildHomeSettings as GuildHomeSettings };

  export {
    SoundboardSounds as SoundboardSounds,
    type SoundboardSound as SoundboardSound,
    type SoundboardSoundListResponse as SoundboardSoundListResponse,
    type SoundboardSoundCreateParams as SoundboardSoundCreateParams,
    type SoundboardSoundUpdateParams as SoundboardSoundUpdateParams,
  };

  export {
    WelcomeScreen as WelcomeScreen,
    type GuildWelcomeScreen as GuildWelcomeScreen,
    type WelcomeScreenUpdateParams as WelcomeScreenUpdateParams,
  };

  export { Integrations as Integrations, type IntegrationListResponse as IntegrationListResponse };

  export { Widgets as Widgets, type WidgetRetrievePngParams as WidgetRetrievePngParams };

  export { Onboarding as Onboarding, type OnboardingUpdateParams as OnboardingUpdateParams };

  export { VanityURLs as VanityURLs };

  export { AuditLogs as AuditLogs, type AuditLogRetrieveParams as AuditLogRetrieveParams };

  export {
    Stickers as Stickers,
    type StickerListResponse as StickerListResponse,
    type StickerCreateParams as StickerCreateParams,
    type StickerUpdateParams as StickerUpdateParams,
  };

  export { Webhooks as Webhooks, type WebhookListResponse as WebhookListResponse };

  export {
    Channels as Channels,
    type ChannelListResponse as ChannelListResponse,
    type ChannelCreateParams as ChannelCreateParams,
    type ChannelUpdateParams as ChannelUpdateParams,
  };

  export { Preview as Preview, type GuildPreview as GuildPreview };

  export { Invites as Invites, type InviteListResponse as InviteListResponse };

  export {
    Regions as Regions,
    type VoiceRegion as VoiceRegion,
    type RegionListResponse as RegionListResponse,
  };

  export {
    Emojis as Emojis,
    type EmojisAPIEmoji as Emoji,
    type EmojiListResponse as EmojiListResponse,
    type EmojiCreateParams as EmojiCreateParams,
    type EmojiUpdateParams as EmojiUpdateParams,
  };

  export { type WidgetSettings as WidgetSettings, type WidgetUpdateParams as WidgetUpdateParams };

  export {
    Roles as Roles,
    type GuildRole as GuildRole,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
  };

  export { Prune as Prune, type GuildPrune as GuildPrune, type PruneRetrieveParams as PruneRetrieveParams };

  export {
    Bans as Bans,
    type GuildBan as GuildBan,
    type BanListResponse as BanListResponse,
    type BanUpdateParams as BanUpdateParams,
    type BanListParams as BanListParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  InteractionCallbackParams,
  InteractionCallbackResponse,
  Interactions,
} from './resources/interactions';
import {
  InviteDeleteResponse,
  InviteRetrieveParams,
  InviteRetrieveResponse,
  Invites,
} from './resources/invites';
import {
  SoundboardDefaultSoundListResponse,
  SoundboardDefaultSounds,
  SoundboardSoundResponse,
} from './resources/soundboard-default-sounds';
import {
  StageInstance,
  StageInstanceCreateParams,
  StageInstanceResponse,
  StageInstanceUpdateParams,
  StageInstances,
} from './resources/stage-instances';
import { StickerPack, StickerPackCollectionResponse, StickerPacks } from './resources/sticker-packs';
import { StandardSticker, StickerRetrieveResponse, Stickers } from './resources/stickers';
import {
  ApplicationUpdateParams,
  Applications,
  PrivateApplication,
} from './resources/applications/applications';
import {
  ChannelDeleteResponse,
  ChannelRetrieveResponse,
  ChannelSendSoundboardSoundParams,
  ChannelUpdateParams,
  ChannelUpdateResponse,
  Channels,
  PrivateChannel,
  PrivateGroupChannel,
  Thread,
  TypingIndicator,
} from './resources/channels/channels';
import { Gateway, GatewayResponse } from './resources/gateway/gateway';
import {
  BulkBanUsers,
  GuildAuditLog,
  GuildBulkBanParams,
  GuildCreateParams,
  GuildMfaLevel,
  GuildMfaParams,
  GuildOnboarding,
  GuildResponse,
  GuildRetrieveParams,
  GuildRetrieveResponse,
  GuildUpdateParams,
  Guilds,
  UserGuildOnboarding,
  VanityURL,
  Widget,
} from './resources/guilds/guilds';
import { Oauth2, Oauth2GetAuthorizationResponse } from './resources/oauth2/oauth2';
import { User, UserPiiResponse, UserUpdateMeParams, Users } from './resources/users/users';
import { Voice } from './resources/voice/voice';
import {
  ApplicationIncomingWebhook,
  ChannelFollowerWebhook,
  WebhookCreateParams,
  WebhookRetrieveResponse,
  WebhookTokenUpdateParams,
  WebhookTokenUpdateResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
} from './resources/webhooks/webhooks';

export interface ClientOptions {
  /**
   * Discord bot token used for API key authentication
   */
  botToken?: string | undefined;

  /**
   * OAuth2 client ID
   */
  clientId?: string | undefined;

  /**
   * OAuth2 client secret
   */
  clientSecret?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DISCORD_API_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Discord API API.
 */
export class DiscordAPI extends Core.APIClient {
  botToken: string;
  clientId: string;
  clientSecret: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Discord API API.
   *
   * @param {string | undefined} [opts.botToken=process.env['BOT_TOKEN'] ?? undefined]
   * @param {string | undefined} [opts.clientId=process.env['CLIENT_ID'] ?? undefined]
   * @param {string | undefined} [opts.clientSecret=process.env['CLIENT_SECRET'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['DISCORD_API_BASE_URL'] ?? https://discord.com/api/v10] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('DISCORD_API_BASE_URL'),
    botToken = Core.readEnv('BOT_TOKEN'),
    clientId = Core.readEnv('CLIENT_ID'),
    clientSecret = Core.readEnv('CLIENT_SECRET'),
    ...opts
  }: ClientOptions = {}) {
    if (botToken === undefined) {
      throw new Errors.DiscordAPIError(
        "The BOT_TOKEN environment variable is missing or empty; either provide it, or instantiate the DiscordAPI client with an botToken option, like new DiscordAPI({ botToken: 'My Bot Token' }).",
      );
    }
    if (clientId === undefined) {
      throw new Errors.DiscordAPIError(
        "The CLIENT_ID environment variable is missing or empty; either provide it, or instantiate the DiscordAPI client with an clientId option, like new DiscordAPI({ clientId: 'My Client ID' }).",
      );
    }
    if (clientSecret === undefined) {
      throw new Errors.DiscordAPIError(
        "The CLIENT_SECRET environment variable is missing or empty; either provide it, or instantiate the DiscordAPI client with an clientSecret option, like new DiscordAPI({ clientSecret: 'My Client Secret' }).",
      );
    }

    const options: ClientOptions = {
      botToken,
      clientId,
      clientSecret,
      ...opts,
      baseURL: baseURL || `https://discord.com/api/v10`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.botToken = botToken;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  oauth2: API.Oauth2 = new API.Oauth2(this);
  users: API.Users = new API.Users(this);
  applications: API.Applications = new API.Applications(this);
  gateway: API.Gateway = new API.Gateway(this);
  voice: API.Voice = new API.Voice(this);
  soundboardDefaultSounds: API.SoundboardDefaultSounds = new API.SoundboardDefaultSounds(this);
  stageInstances: API.StageInstances = new API.StageInstances(this);
  stickerPacks: API.StickerPacks = new API.StickerPacks(this);
  guilds: API.Guilds = new API.Guilds(this);
  channels: API.Channels = new API.Channels(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  interactions: API.Interactions = new API.Interactions(this);
  stickers: API.Stickers = new API.Stickers(this);
  invites: API.Invites = new API.Invites(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: this.botToken };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static DiscordAPI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DiscordAPIError = Errors.DiscordAPIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

DiscordAPI.Oauth2 = Oauth2;
DiscordAPI.Users = Users;
DiscordAPI.Applications = Applications;
DiscordAPI.Gateway = Gateway;
DiscordAPI.Voice = Voice;
DiscordAPI.SoundboardDefaultSounds = SoundboardDefaultSounds;
DiscordAPI.StageInstances = StageInstances;
DiscordAPI.StickerPacks = StickerPacks;
DiscordAPI.Guilds = Guilds;
DiscordAPI.Channels = Channels;
DiscordAPI.Webhooks = Webhooks;
DiscordAPI.Interactions = Interactions;
DiscordAPI.Stickers = Stickers;
DiscordAPI.Invites = Invites;
export declare namespace DiscordAPI {
  export type RequestOptions = Core.RequestOptions;

  export { Oauth2 as Oauth2, type Oauth2GetAuthorizationResponse as Oauth2GetAuthorizationResponse };

  export {
    Users as Users,
    type User as User,
    type UserPiiResponse as UserPiiResponse,
    type UserUpdateMeParams as UserUpdateMeParams,
  };

  export {
    Applications as Applications,
    type PrivateApplication as PrivateApplication,
    type ApplicationUpdateParams as ApplicationUpdateParams,
  };

  export { Gateway as Gateway, type GatewayResponse as GatewayResponse };

  export { Voice as Voice };

  export {
    SoundboardDefaultSounds as SoundboardDefaultSounds,
    type SoundboardSoundResponse as SoundboardSoundResponse,
    type SoundboardDefaultSoundListResponse as SoundboardDefaultSoundListResponse,
  };

  export {
    StageInstances as StageInstances,
    type StageInstance as StageInstance,
    type StageInstanceResponse as StageInstanceResponse,
    type StageInstanceCreateParams as StageInstanceCreateParams,
    type StageInstanceUpdateParams as StageInstanceUpdateParams,
  };

  export {
    StickerPacks as StickerPacks,
    type StickerPack as StickerPack,
    type StickerPackCollectionResponse as StickerPackCollectionResponse,
  };

  export {
    Guilds as Guilds,
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
    Channels as Channels,
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

  export {
    Webhooks as Webhooks,
    type ApplicationIncomingWebhook as ApplicationIncomingWebhook,
    type ChannelFollowerWebhook as ChannelFollowerWebhook,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookTokenUpdateResponse as WebhookTokenUpdateResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookTokenUpdateParams as WebhookTokenUpdateParams,
  };

  export {
    Interactions as Interactions,
    type InteractionCallbackResponse as InteractionCallbackResponse,
    type InteractionCallbackParams as InteractionCallbackParams,
  };

  export {
    Stickers as Stickers,
    type StandardSticker as StandardSticker,
    type StickerRetrieveResponse as StickerRetrieveResponse,
  };

  export {
    Invites as Invites,
    type InviteRetrieveResponse as InviteRetrieveResponse,
    type InviteDeleteResponse as InviteDeleteResponse,
    type InviteRetrieveParams as InviteRetrieveParams,
  };

  export type FriendInvite = API.FriendInvite;
  export type GroupDmInvite = API.GroupDmInvite;
  export type Guild = API.Guild;
  export type GuildChannel = API.GuildChannel;
  export type GuildIncomingWebhook = API.GuildIncomingWebhook;
  export type GuildInvite = API.GuildInvite;
  export type GuildSticker = API.GuildSticker;
  export type Message = API.Message;
  export type MessageResponse = API.MessageResponse;
  export type MessageResponse = API.MessageResponse;
  export type PrivateApplicationResponse = API.PrivateApplicationResponse;
  export type ThreadsResponse = API.ThreadsResponse;
}

export { toFile, fileFromPath } from './uploads';
export {
  DiscordAPIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default DiscordAPI;

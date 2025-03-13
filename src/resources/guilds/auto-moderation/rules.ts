// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Rules extends APIResource {
  create(
    guildId: string,
    body: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse> {
    return this._client.post(`/guilds/${guildId}/auto-moderation/rules`, { body, ...options });
  }

  retrieve(
    guildId: string,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleRetrieveResponse> {
    return this._client.get(`/guilds/${guildId}/auto-moderation/rules/${ruleId}`, options);
  }

  update(
    guildId: string,
    ruleId: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.patch(`/guilds/${guildId}/auto-moderation/rules/${ruleId}`, { body, ...options });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<RuleListResponse | null> {
    return this._client.get(`/guilds/${guildId}/auto-moderation/rules`, options);
  }

  delete(guildId: string, ruleId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/auto-moderation/rules/${ruleId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DefaultKeywordRuleResponse {
  id: string;

  actions: Array<
    | DefaultKeywordRuleResponse.BlockMessageActionResponse
    | DefaultKeywordRuleResponse.FlagToChannelActionResponse
    | DefaultKeywordRuleResponse.QuarantineUserActionResponse
    | DefaultKeywordRuleResponse.UserCommunicationDisabledActionResponse
  >;

  creator_id: string;

  /**
   * - `1` - A user submitted a message to a channel
   * - `2` - A user is attempting to join the server or a member's properties were
   *   updated.
   */
  event_type: 1 | 2;

  guild_id: string;

  name: string;

  trigger_metadata: DefaultKeywordRuleResponse.TriggerMetadata;

  /**
   * - `1` - Check if content contains words from a list of keywords or matches regex
   * - `2` - DEPRECATED
   * - `3` - Check if content represents generic spam
   * - `4` - Check if content contains words from internal pre-defined wordsets
   * - `5` - Check if content contains more unique mentions than allowed
   */
  trigger_type: 1 | 2 | 3 | 4 | 5;

  enabled?: boolean | null;

  exempt_channels?: Array<string> | null;

  exempt_roles?: Array<string> | null;
}

export namespace DefaultKeywordRuleResponse {
  export interface BlockMessageActionResponse {
    metadata: BlockMessageActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace BlockMessageActionResponse {
    export interface Metadata {
      custom_message?: string | null;
    }
  }

  export interface FlagToChannelActionResponse {
    metadata: FlagToChannelActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace FlagToChannelActionResponse {
    export interface Metadata {
      channel_id: string;
    }
  }

  export interface QuarantineUserActionResponse {
    metadata: unknown;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export interface UserCommunicationDisabledActionResponse {
    metadata: UserCommunicationDisabledActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace UserCommunicationDisabledActionResponse {
    export interface Metadata {
      duration_seconds: number;
    }
  }

  export interface TriggerMetadata {
    allow_list: Array<string>;

    presets: Array<1 | 2 | 3>;
  }
}

export interface KeywordRuleResponse {
  id: string;

  actions: Array<
    | KeywordRuleResponse.BlockMessageActionResponse
    | KeywordRuleResponse.FlagToChannelActionResponse
    | KeywordRuleResponse.QuarantineUserActionResponse
    | KeywordRuleResponse.UserCommunicationDisabledActionResponse
  >;

  creator_id: string;

  /**
   * - `1` - A user submitted a message to a channel
   * - `2` - A user is attempting to join the server or a member's properties were
   *   updated.
   */
  event_type: 1 | 2;

  guild_id: string;

  name: string;

  trigger_metadata: KeywordRuleResponse.TriggerMetadata;

  /**
   * - `1` - Check if content contains words from a list of keywords or matches regex
   * - `2` - DEPRECATED
   * - `3` - Check if content represents generic spam
   * - `4` - Check if content contains words from internal pre-defined wordsets
   * - `5` - Check if content contains more unique mentions than allowed
   */
  trigger_type: 1 | 2 | 3 | 4 | 5;

  enabled?: boolean | null;

  exempt_channels?: Array<string> | null;

  exempt_roles?: Array<string> | null;
}

export namespace KeywordRuleResponse {
  export interface BlockMessageActionResponse {
    metadata: BlockMessageActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace BlockMessageActionResponse {
    export interface Metadata {
      custom_message?: string | null;
    }
  }

  export interface FlagToChannelActionResponse {
    metadata: FlagToChannelActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace FlagToChannelActionResponse {
    export interface Metadata {
      channel_id: string;
    }
  }

  export interface QuarantineUserActionResponse {
    metadata: unknown;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export interface UserCommunicationDisabledActionResponse {
    metadata: UserCommunicationDisabledActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace UserCommunicationDisabledActionResponse {
    export interface Metadata {
      duration_seconds: number;
    }
  }

  export interface TriggerMetadata {
    allow_list: Array<string>;

    keyword_filter: Array<string>;

    regex_patterns: Array<string>;
  }
}

export interface MentionSpamRuleResponse {
  id: string;

  actions: Array<
    | MentionSpamRuleResponse.BlockMessageActionResponse
    | MentionSpamRuleResponse.FlagToChannelActionResponse
    | MentionSpamRuleResponse.QuarantineUserActionResponse
    | MentionSpamRuleResponse.UserCommunicationDisabledActionResponse
  >;

  creator_id: string;

  /**
   * - `1` - A user submitted a message to a channel
   * - `2` - A user is attempting to join the server or a member's properties were
   *   updated.
   */
  event_type: 1 | 2;

  guild_id: string;

  name: string;

  trigger_metadata: MentionSpamRuleResponse.TriggerMetadata;

  /**
   * - `1` - Check if content contains words from a list of keywords or matches regex
   * - `2` - DEPRECATED
   * - `3` - Check if content represents generic spam
   * - `4` - Check if content contains words from internal pre-defined wordsets
   * - `5` - Check if content contains more unique mentions than allowed
   */
  trigger_type: 1 | 2 | 3 | 4 | 5;

  enabled?: boolean | null;

  exempt_channels?: Array<string> | null;

  exempt_roles?: Array<string> | null;
}

export namespace MentionSpamRuleResponse {
  export interface BlockMessageActionResponse {
    metadata: BlockMessageActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace BlockMessageActionResponse {
    export interface Metadata {
      custom_message?: string | null;
    }
  }

  export interface FlagToChannelActionResponse {
    metadata: FlagToChannelActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace FlagToChannelActionResponse {
    export interface Metadata {
      channel_id: string;
    }
  }

  export interface QuarantineUserActionResponse {
    metadata: unknown;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export interface UserCommunicationDisabledActionResponse {
    metadata: UserCommunicationDisabledActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace UserCommunicationDisabledActionResponse {
    export interface Metadata {
      duration_seconds: number;
    }
  }

  export interface TriggerMetadata {
    mention_total_limit: number;

    mention_raid_protection_enabled?: boolean | null;
  }
}

export interface MlSpamRuleResponse {
  id: string;

  actions: Array<
    | MlSpamRuleResponse.BlockMessageActionResponse
    | MlSpamRuleResponse.FlagToChannelActionResponse
    | MlSpamRuleResponse.QuarantineUserActionResponse
    | MlSpamRuleResponse.UserCommunicationDisabledActionResponse
  >;

  creator_id: string;

  /**
   * - `1` - A user submitted a message to a channel
   * - `2` - A user is attempting to join the server or a member's properties were
   *   updated.
   */
  event_type: 1 | 2;

  guild_id: string;

  name: string;

  trigger_metadata: unknown;

  /**
   * - `1` - Check if content contains words from a list of keywords or matches regex
   * - `2` - DEPRECATED
   * - `3` - Check if content represents generic spam
   * - `4` - Check if content contains words from internal pre-defined wordsets
   * - `5` - Check if content contains more unique mentions than allowed
   */
  trigger_type: 1 | 2 | 3 | 4 | 5;

  enabled?: boolean | null;

  exempt_channels?: Array<string> | null;

  exempt_roles?: Array<string> | null;
}

export namespace MlSpamRuleResponse {
  export interface BlockMessageActionResponse {
    metadata: BlockMessageActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace BlockMessageActionResponse {
    export interface Metadata {
      custom_message?: string | null;
    }
  }

  export interface FlagToChannelActionResponse {
    metadata: FlagToChannelActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace FlagToChannelActionResponse {
    export interface Metadata {
      channel_id: string;
    }
  }

  export interface QuarantineUserActionResponse {
    metadata: unknown;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export interface UserCommunicationDisabledActionResponse {
    metadata: UserCommunicationDisabledActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace UserCommunicationDisabledActionResponse {
    export interface Metadata {
      duration_seconds: number;
    }
  }
}

export interface SpamLinkRuleResponse {
  id: string;

  actions: Array<
    | SpamLinkRuleResponse.BlockMessageActionResponse
    | SpamLinkRuleResponse.FlagToChannelActionResponse
    | SpamLinkRuleResponse.QuarantineUserActionResponse
    | SpamLinkRuleResponse.UserCommunicationDisabledActionResponse
  >;

  creator_id: string;

  /**
   * - `1` - A user submitted a message to a channel
   * - `2` - A user is attempting to join the server or a member's properties were
   *   updated.
   */
  event_type: 1 | 2;

  guild_id: string;

  name: string;

  trigger_metadata: unknown;

  /**
   * - `1` - Check if content contains words from a list of keywords or matches regex
   * - `2` - DEPRECATED
   * - `3` - Check if content represents generic spam
   * - `4` - Check if content contains words from internal pre-defined wordsets
   * - `5` - Check if content contains more unique mentions than allowed
   */
  trigger_type: 1 | 2 | 3 | 4 | 5;

  enabled?: boolean | null;

  exempt_channels?: Array<string> | null;

  exempt_roles?: Array<string> | null;
}

export namespace SpamLinkRuleResponse {
  export interface BlockMessageActionResponse {
    metadata: BlockMessageActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace BlockMessageActionResponse {
    export interface Metadata {
      custom_message?: string | null;
    }
  }

  export interface FlagToChannelActionResponse {
    metadata: FlagToChannelActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace FlagToChannelActionResponse {
    export interface Metadata {
      channel_id: string;
    }
  }

  export interface QuarantineUserActionResponse {
    metadata: unknown;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export interface UserCommunicationDisabledActionResponse {
    metadata: UserCommunicationDisabledActionResponse.Metadata;

    /**
     * - `1` - Block a user's message and prevent it from being posted. A custom
     *   explanation can be specified and shown to members whenever their message is
     *   blocked
     * - `2` - Send a system message to a channel in order to log the user message that
     *   triggered the rule
     * - `3` - Temporarily disable a user's ability to communicate in the server
     *   (timeout)
     * - `4` - Prevent a user from interacting in the server
     */
    type: 1 | 2 | 3 | 4;
  }

  export namespace UserCommunicationDisabledActionResponse {
    export interface Metadata {
      duration_seconds: number;
    }
  }
}

export type RuleCreateResponse =
  | DefaultKeywordRuleResponse
  | KeywordRuleResponse
  | MlSpamRuleResponse
  | MentionSpamRuleResponse
  | SpamLinkRuleResponse;

export type RuleRetrieveResponse =
  | DefaultKeywordRuleResponse
  | KeywordRuleResponse
  | MlSpamRuleResponse
  | MentionSpamRuleResponse
  | SpamLinkRuleResponse;

export type RuleUpdateResponse =
  | DefaultKeywordRuleResponse
  | KeywordRuleResponse
  | MlSpamRuleResponse
  | MentionSpamRuleResponse
  | SpamLinkRuleResponse;

export type RuleListResponse = Array<
  | DefaultKeywordRuleResponse
  | KeywordRuleResponse
  | MlSpamRuleResponse
  | MentionSpamRuleResponse
  | SpamLinkRuleResponse
  | null
>;

export type RuleCreateParams =
  | RuleCreateParams.DefaultKeywordListUpsertRequest
  | RuleCreateParams.KeywordUpsertRequest
  | RuleCreateParams.MlSpamUpsertRequest
  | RuleCreateParams.MentionSpamUpsertRequest;

export declare namespace RuleCreateParams {
  export interface DefaultKeywordListUpsertRequest {
    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type: 1 | 2;

    name: string;

    trigger_metadata: DefaultKeywordListUpsertRequest.TriggerMetadata;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type: 1 | 2 | 3 | 4 | 5;

    actions?: Array<
      | DefaultKeywordListUpsertRequest.BlockMessageAction
      | DefaultKeywordListUpsertRequest.FlagToChannelAction
      | DefaultKeywordListUpsertRequest.QuarantineUserAction
      | DefaultKeywordListUpsertRequest.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;
  }

  export namespace DefaultKeywordListUpsertRequest {
    export interface TriggerMetadata {
      allow_list?: Array<string> | null;

      presets?: Array<1 | 2 | 3> | null;
    }

    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }
  }

  export interface KeywordUpsertRequest {
    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type: 1 | 2;

    name: string;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type: 1 | 2 | 3 | 4 | 5;

    actions?: Array<
      | KeywordUpsertRequest.BlockMessageAction
      | KeywordUpsertRequest.FlagToChannelAction
      | KeywordUpsertRequest.QuarantineUserAction
      | KeywordUpsertRequest.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    trigger_metadata?: KeywordUpsertRequest.TriggerMetadata | null;
  }

  export namespace KeywordUpsertRequest {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }

    export interface TriggerMetadata {
      allow_list?: Array<string> | null;

      keyword_filter?: Array<string> | null;

      regex_patterns?: Array<string> | null;
    }
  }

  export interface MlSpamUpsertRequest {
    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type: 1 | 2;

    name: string;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type: 1 | 2 | 3 | 4 | 5;

    actions?: Array<
      | MlSpamUpsertRequest.BlockMessageAction
      | MlSpamUpsertRequest.FlagToChannelAction
      | MlSpamUpsertRequest.QuarantineUserAction
      | MlSpamUpsertRequest.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    trigger_metadata?: unknown | null;
  }

  export namespace MlSpamUpsertRequest {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }
  }

  export interface MentionSpamUpsertRequest {
    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type: 1 | 2;

    name: string;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type: 1 | 2 | 3 | 4 | 5;

    actions?: Array<
      | MentionSpamUpsertRequest.BlockMessageAction
      | MentionSpamUpsertRequest.FlagToChannelAction
      | MentionSpamUpsertRequest.QuarantineUserAction
      | MentionSpamUpsertRequest.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    trigger_metadata?: MentionSpamUpsertRequest.TriggerMetadata | null;
  }

  export namespace MentionSpamUpsertRequest {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }

    export interface TriggerMetadata {
      mention_total_limit: number;

      mention_raid_protection_enabled?: boolean | null;
    }
  }
}

export type RuleUpdateParams =
  | RuleUpdateParams.DefaultKeywordListUpsertRequestPartial
  | RuleUpdateParams.KeywordUpsertRequestPartial
  | RuleUpdateParams.MlSpamUpsertRequestPartial
  | RuleUpdateParams.MentionSpamUpsertRequestPartial;

export declare namespace RuleUpdateParams {
  export interface DefaultKeywordListUpsertRequestPartial {
    actions?: Array<
      | DefaultKeywordListUpsertRequestPartial.BlockMessageAction
      | DefaultKeywordListUpsertRequestPartial.FlagToChannelAction
      | DefaultKeywordListUpsertRequestPartial.QuarantineUserAction
      | DefaultKeywordListUpsertRequestPartial.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type?: 1 | 2;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    name?: string;

    trigger_metadata?: DefaultKeywordListUpsertRequestPartial.TriggerMetadata;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type?: 1 | 2 | 3 | 4 | 5;
  }

  export namespace DefaultKeywordListUpsertRequestPartial {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }

    export interface TriggerMetadata {
      allow_list?: Array<string> | null;

      presets?: Array<1 | 2 | 3> | null;
    }
  }

  export interface KeywordUpsertRequestPartial {
    actions?: Array<
      | KeywordUpsertRequestPartial.BlockMessageAction
      | KeywordUpsertRequestPartial.FlagToChannelAction
      | KeywordUpsertRequestPartial.QuarantineUserAction
      | KeywordUpsertRequestPartial.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type?: 1 | 2;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    name?: string;

    trigger_metadata?: KeywordUpsertRequestPartial.TriggerMetadata | null;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type?: 1 | 2 | 3 | 4 | 5;
  }

  export namespace KeywordUpsertRequestPartial {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }

    export interface TriggerMetadata {
      allow_list?: Array<string> | null;

      keyword_filter?: Array<string> | null;

      regex_patterns?: Array<string> | null;
    }
  }

  export interface MlSpamUpsertRequestPartial {
    actions?: Array<
      | MlSpamUpsertRequestPartial.BlockMessageAction
      | MlSpamUpsertRequestPartial.FlagToChannelAction
      | MlSpamUpsertRequestPartial.QuarantineUserAction
      | MlSpamUpsertRequestPartial.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type?: 1 | 2;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    name?: string;

    trigger_metadata?: unknown | null;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type?: 1 | 2 | 3 | 4 | 5;
  }

  export namespace MlSpamUpsertRequestPartial {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }
  }

  export interface MentionSpamUpsertRequestPartial {
    actions?: Array<
      | MentionSpamUpsertRequestPartial.BlockMessageAction
      | MentionSpamUpsertRequestPartial.FlagToChannelAction
      | MentionSpamUpsertRequestPartial.QuarantineUserAction
      | MentionSpamUpsertRequestPartial.UserCommunicationDisabledAction
    > | null;

    enabled?: boolean | null;

    /**
     * - `1` - A user submitted a message to a channel
     * - `2` - A user is attempting to join the server or a member's properties were
     *   updated.
     */
    event_type?: 1 | 2;

    exempt_channels?: Array<string> | null;

    exempt_roles?: Array<string> | null;

    name?: string;

    trigger_metadata?: MentionSpamUpsertRequestPartial.TriggerMetadata | null;

    /**
     * - `1` - Check if content contains words from a list of keywords or matches regex
     * - `2` - DEPRECATED
     * - `3` - Check if content represents generic spam
     * - `4` - Check if content contains words from internal pre-defined wordsets
     * - `5` - Check if content contains more unique mentions than allowed
     */
    trigger_type?: 1 | 2 | 3 | 4 | 5;
  }

  export namespace MentionSpamUpsertRequestPartial {
    export interface BlockMessageAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: BlockMessageAction.Metadata | null;
    }

    export namespace BlockMessageAction {
      export interface Metadata {
        custom_message?: string | null;
      }
    }

    export interface FlagToChannelAction {
      metadata: FlagToChannelAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace FlagToChannelAction {
      export interface Metadata {
        channel_id: string;
      }
    }

    export interface QuarantineUserAction {
      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;

      metadata?: unknown | null;
    }

    export interface UserCommunicationDisabledAction {
      metadata: UserCommunicationDisabledAction.Metadata;

      /**
       * - `1` - Block a user's message and prevent it from being posted. A custom
       *   explanation can be specified and shown to members whenever their message is
       *   blocked
       * - `2` - Send a system message to a channel in order to log the user message that
       *   triggered the rule
       * - `3` - Temporarily disable a user's ability to communicate in the server
       *   (timeout)
       * - `4` - Prevent a user from interacting in the server
       */
      type: 1 | 2 | 3 | 4;
    }

    export namespace UserCommunicationDisabledAction {
      export interface Metadata {
        duration_seconds?: number | null;
      }
    }

    export interface TriggerMetadata {
      mention_total_limit: number;

      mention_raid_protection_enabled?: boolean | null;
    }
  }
}

export declare namespace Rules {
  export {
    type DefaultKeywordRuleResponse as DefaultKeywordRuleResponse,
    type KeywordRuleResponse as KeywordRuleResponse,
    type MentionSpamRuleResponse as MentionSpamRuleResponse,
    type MlSpamRuleResponse as MlSpamRuleResponse,
    type SpamLinkRuleResponse as SpamLinkRuleResponse,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleRetrieveResponse as RuleRetrieveResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };
}

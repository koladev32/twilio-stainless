// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as WebhooksAPI from './webhooks';
import { maybeMultipartFormRequestOptions } from '../../core';
import * as Shared from '../shared';
import * as UsersAPI from '../users/users';
import * as GitHubAPI from './github';
import { GitHub, GitHubCreateParams } from './github';
import * as MessagesAPI from './messages';
import { MessageDeleteOriginalParams, MessageDeleteParams, MessageRetrieveOriginalParams, MessageRetrieveParams, MessageUpdateOriginalParams, MessageUpdateParams, Messages } from './messages';
import * as SlackAPI from './slack';
import { Slack, SlackCreateParams, SlackCreateResponse } from './slack';

export class Webhooks extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);

  create(webhookId: string, webhookToken: string, params: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.MessageResponse> {
    const { thread_id, wait, ...body } = params;
    return this._client.post(`/webhooks/${webhookId}/${webhookToken}`, Core.maybeMultipartFormRequestOptions({ query: { thread_id, wait }, body, ...options }));
  }

  retrieve(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookRetrieveResponse> {
    return this._client.get(`/webhooks/${webhookId}`, options);
  }

  update(webhookId: string, body: WebhookUpdateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookUpdateResponse> {
    return this._client.patch(`/webhooks/${webhookId}`, { body, ...options });
  }

  delete(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/webhooks/${webhookId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  tokenUpdate(webhookId: string, webhookToken: string, body: WebhookTokenUpdateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookTokenUpdateResponse> {
    return this._client.patch(`/webhooks/${webhookId}/${webhookToken}`, { body, ...options });
  }
}

export interface ApplicationIncomingWebhook {
  id: string;

  name: string;

  /**
   * - `1` - Incoming Webhooks can post messages to channels with a generated token
   * - `2` - Channel Follower Webhooks are internal webhooks used with Channel
   *   Following to post new messages into channels
   * - `3` - Application webhooks are webhooks used with Interactions
   */
  type: 1 | 2 | 3;

  application_id?: string | null;

  avatar?: string | null;

  channel_id?: string | null;

  guild_id?: string | null;

  user?: UsersAPI.User | null;
}

export interface ChannelFollowerWebhook {
  id: string;

  name: string;

  /**
   * - `1` - Incoming Webhooks can post messages to channels with a generated token
   * - `2` - Channel Follower Webhooks are internal webhooks used with Channel
   *   Following to post new messages into channels
   * - `3` - Application webhooks are webhooks used with Interactions
   */
  type: 1 | 2 | 3;

  application_id?: string | null;

  avatar?: string | null;

  channel_id?: string | null;

  guild_id?: string | null;

  source_channel?: ChannelFollowerWebhook.SourceChannel | null;

  source_guild?: ChannelFollowerWebhook.SourceGuild | null;

  user?: UsersAPI.User | null;
}

export namespace ChannelFollowerWebhook {
  export interface SourceChannel {
    id: string;

    name: string;
  }

  export interface SourceGuild {
    id: string;

    name: string;

    icon?: string | null;
  }
}

export type WebhookRetrieveResponse = ApplicationIncomingWebhook | ChannelFollowerWebhook | Shared.GuildIncomingWebhook

export type WebhookUpdateResponse = ApplicationIncomingWebhook | ChannelFollowerWebhook | Shared.GuildIncomingWebhook

export type WebhookTokenUpdateResponse = ApplicationIncomingWebhook | ChannelFollowerWebhook | Shared.GuildIncomingWebhook

export type WebhookCreateParams = WebhookCreateParams.IncomingWebhookRequestPartial | WebhookCreateParams.IncomingWebhookUpdateRequestPartial

export declare namespace WebhookCreateParams {
  export interface IncomingWebhookRequestPartial {
    /**
     * Query param:
     */
    thread_id?: string;

    /**
     * Query param:
     */
    wait?: boolean;

    /**
     * Body param:
     */
    allowed_mentions?: IncomingWebhookRequestPartial.AllowedMentions | null;

    /**
     * Body param:
     */
    applied_tags?: Array<string> | null;

    /**
     * Body param:
     */
    attachments?: Array<IncomingWebhookRequestPartial.Attachment> | null;

    /**
     * Body param:
     */
    avatar_url?: string | null;

    /**
     * Body param:
     */
    components?: Array<IncomingWebhookRequestPartial.Component> | null;

    /**
     * Body param:
     */
    content?: string | null;

    /**
     * Body param:
     */
    embeds?: Array<IncomingWebhookRequestPartial.Embed> | null;

    /**
     * Body param:
     */
    flags?: number | null;

    /**
     * Body param:
     */
    poll?: IncomingWebhookRequestPartial.Poll | null;

    /**
     * Body param:
     */
    thread_name?: string | null;

    /**
     * Body param:
     */
    tts?: boolean | null;

    /**
     * Body param:
     */
    username?: string | null;
  }

  export namespace IncomingWebhookRequestPartial {
    export interface AllowedMentions {
      parse?: Array<'users' | 'roles' | 'everyone' | null> | null;

      replied_user?: boolean | null;

      roles?: Array<string | null> | null;

      users?: Array<string | null> | null;
    }

    export interface Attachment {
      id: string;

      description?: string | null;

      duration_secs?: number | null;

      filename?: string | null;

      is_remix?: boolean | null;

      title?: string | null;

      waveform?: string | null;
    }

    export interface Component {
      components: Array<Component.ButtonComponentForMessageRequest | Component.ChannelSelectComponentForMessageRequest | Component.MentionableSelectComponentForMessageRequest | Component.RoleSelectComponentForMessageRequest | Component.StringSelectComponentForMessageRequest | Component.UserSelectComponentForMessageRequest>;

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
    }

    export namespace Component {
      export interface ButtonComponentForMessageRequest {
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

        emoji?: ButtonComponentForMessageRequest.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentForMessageRequest {
        export interface Emoji {
          name: string;

          id?: string | null;
        }
      }

      export interface ChannelSelectComponentForMessageRequest {
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

        default_values?: Array<ChannelSelectComponentForMessageRequest.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentForMessageRequest {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentForMessageRequest {
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

        default_values?: Array<MentionableSelectComponentForMessageRequest.RoleSelectDefaultValue | MentionableSelectComponentForMessageRequest.UserSelectDefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentForMessageRequest {
        export interface RoleSelectDefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentForMessageRequest {
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

        default_values?: Array<RoleSelectComponentForMessageRequest.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentForMessageRequest {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentForMessageRequest {
        custom_id: string;

        options: Array<StringSelectComponentForMessageRequest.Option>;

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

      export namespace StringSelectComponentForMessageRequest {
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
          }
        }
      }

      export interface UserSelectComponentForMessageRequest {
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

        default_values?: Array<UserSelectComponentForMessageRequest.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentForMessageRequest {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }
    }

    export interface Embed {
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

      type?: string | null;

      url?: string | null;

      video?: Embed.Video | null;
    }

    export namespace Embed {
      export interface Author {
        icon_url?: string | null;

        name?: string | null;

        url?: string | null;
      }

      export interface Field {
        name: string;

        value: string;

        inline?: boolean | null;
      }

      export interface Footer {
        icon_url?: string | null;

        text?: string | null;
      }

      export interface Image {
        height?: number | null;

        is_animated?: boolean | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Provider {
        name?: string | null;

        url?: string | null;
      }

      export interface Thumbnail {
        height?: number | null;

        is_animated?: boolean | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Video {
        height?: number | null;

        is_animated?: boolean | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        url?: string | null;

        width?: number | null;
      }
    }

    export interface Poll {
      answers: Array<Poll.Answer>;

      question: Poll.Question;

      allow_multiselect?: boolean | null;

      duration?: number | null;

      layout_type?: number | null;
    }

    export namespace Poll {
      export interface Answer {
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
    }
  }

  export interface IncomingWebhookUpdateRequestPartial {
    /**
     * Query param:
     */
    thread_id?: string;

    /**
     * Query param:
     */
    wait?: boolean;

    /**
     * Body param:
     */
    allowed_mentions?: IncomingWebhookUpdateRequestPartial.AllowedMentions | null;

    /**
     * Body param:
     */
    attachments?: Array<IncomingWebhookUpdateRequestPartial.Attachment> | null;

    /**
     * Body param:
     */
    components?: Array<IncomingWebhookUpdateRequestPartial.Component> | null;

    /**
     * Body param:
     */
    content?: string | null;

    /**
     * Body param:
     */
    embeds?: Array<IncomingWebhookUpdateRequestPartial.Embed> | null;

    /**
     * Body param:
     */
    flags?: number | null;

    /**
     * Body param:
     */
    poll?: IncomingWebhookUpdateRequestPartial.Poll | null;
  }

  export namespace IncomingWebhookUpdateRequestPartial {
    export interface AllowedMentions {
      parse?: Array<'users' | 'roles' | 'everyone' | null> | null;

      replied_user?: boolean | null;

      roles?: Array<string | null> | null;

      users?: Array<string | null> | null;
    }

    export interface Attachment {
      id: string;

      description?: string | null;

      duration_secs?: number | null;

      filename?: string | null;

      is_remix?: boolean | null;

      title?: string | null;

      waveform?: string | null;
    }

    export interface Component {
      components: Array<Component.ButtonComponentForMessageRequest | Component.ChannelSelectComponentForMessageRequest | Component.MentionableSelectComponentForMessageRequest | Component.RoleSelectComponentForMessageRequest | Component.StringSelectComponentForMessageRequest | Component.UserSelectComponentForMessageRequest>;

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
    }

    export namespace Component {
      export interface ButtonComponentForMessageRequest {
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

        emoji?: ButtonComponentForMessageRequest.Emoji | null;

        label?: string | null;

        sku_id?: string | null;

        url?: string | null;
      }

      export namespace ButtonComponentForMessageRequest {
        export interface Emoji {
          name: string;

          id?: string | null;
        }
      }

      export interface ChannelSelectComponentForMessageRequest {
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

        default_values?: Array<ChannelSelectComponentForMessageRequest.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace ChannelSelectComponentForMessageRequest {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface MentionableSelectComponentForMessageRequest {
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

        default_values?: Array<MentionableSelectComponentForMessageRequest.RoleSelectDefaultValue | MentionableSelectComponentForMessageRequest.UserSelectDefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace MentionableSelectComponentForMessageRequest {
        export interface RoleSelectDefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }

        export interface UserSelectDefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface RoleSelectComponentForMessageRequest {
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

        default_values?: Array<RoleSelectComponentForMessageRequest.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace RoleSelectComponentForMessageRequest {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }

      export interface StringSelectComponentForMessageRequest {
        custom_id: string;

        options: Array<StringSelectComponentForMessageRequest.Option>;

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

      export namespace StringSelectComponentForMessageRequest {
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
          }
        }
      }

      export interface UserSelectComponentForMessageRequest {
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

        default_values?: Array<UserSelectComponentForMessageRequest.DefaultValue> | null;

        disabled?: boolean | null;

        max_values?: number | null;

        min_values?: number | null;

        placeholder?: string | null;
      }

      export namespace UserSelectComponentForMessageRequest {
        export interface DefaultValue {
          id: string;

          type: 'user' | 'role' | 'channel';
        }
      }
    }

    export interface Embed {
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

      type?: string | null;

      url?: string | null;

      video?: Embed.Video | null;
    }

    export namespace Embed {
      export interface Author {
        icon_url?: string | null;

        name?: string | null;

        url?: string | null;
      }

      export interface Field {
        name: string;

        value: string;

        inline?: boolean | null;
      }

      export interface Footer {
        icon_url?: string | null;

        text?: string | null;
      }

      export interface Image {
        height?: number | null;

        is_animated?: boolean | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Provider {
        name?: string | null;

        url?: string | null;
      }

      export interface Thumbnail {
        height?: number | null;

        is_animated?: boolean | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        url?: string | null;

        width?: number | null;
      }

      export interface Video {
        height?: number | null;

        is_animated?: boolean | null;

        placeholder?: string | null;

        placeholder_version?: number | null;

        url?: string | null;

        width?: number | null;
      }
    }

    export interface Poll {
      answers: Array<Poll.Answer>;

      question: Poll.Question;

      allow_multiselect?: boolean | null;

      duration?: number | null;

      layout_type?: number | null;
    }

    export namespace Poll {
      export interface Answer {
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
    }
  }
}

export interface WebhookUpdateParams {
  avatar?: string | null;

  channel_id?: string | null;

  name?: string;
}

export interface WebhookTokenUpdateParams {
  avatar?: string | null;

  name?: string;
}

Webhooks.Messages = Messages;
Webhooks.GitHub = GitHub;
Webhooks.Slack = Slack;

export declare namespace Webhooks {
  export {
    type ApplicationIncomingWebhook as ApplicationIncomingWebhook,
    type ChannelFollowerWebhook as ChannelFollowerWebhook,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookTokenUpdateResponse as WebhookTokenUpdateResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookTokenUpdateParams as WebhookTokenUpdateParams
  };

  export {
    Messages as Messages,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageDeleteOriginalParams as MessageDeleteOriginalParams,
    type MessageRetrieveOriginalParams as MessageRetrieveOriginalParams,
    type MessageUpdateOriginalParams as MessageUpdateOriginalParams
  };

  export {
    GitHub as GitHub,
    type GitHubCreateParams as GitHubCreateParams
  };

  export {
    Slack as Slack,
    type SlackCreateResponse as SlackCreateResponse,
    type SlackCreateParams as SlackCreateParams
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as ReactionsAPI from './reactions';
import { ReactionRetrieveAllParams, ReactionRetrieveAllResponse, Reactions, UserResponse } from './reactions';
import * as ThreadsAPI from './threads';
import { ThreadCreateParams, ThreadResponse, Threads } from './threads';

export class Messages extends APIResource {
  reactions: ReactionsAPI.Reactions = new ReactionsAPI.Reactions(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);

  create(
    channelId: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    return this._client.post(
      `/channels/${channelId}/messages`,
      Core.maybeMultipartFormRequestOptions({ body, ...options }),
    );
  }

  retrieve(
    channelId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    return this._client.get(`/channels/${channelId}/messages/${messageId}`, options);
  }

  update(
    channelId: string,
    messageId: string,
    body: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    return this._client.patch(
      `/channels/${channelId}/messages/${messageId}`,
      Core.maybeMultipartFormRequestOptions({ body, ...options }),
    );
  }

  list(
    channelId: string,
    query?: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse | null>;
  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<MessageListResponse | null>;
  list(
    channelId: string,
    query: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(channelId, {}, query);
    }
    return this._client.get(`/channels/${channelId}/messages`, { query, ...options });
  }

  delete(channelId: string, messageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/messages/${messageId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  bulkDelete(
    channelId: string,
    body: MessageBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/channels/${channelId}/messages/bulk-delete`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  crosspost(
    channelId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    return this._client.post(`/channels/${channelId}/messages/${messageId}/crosspost`, options);
  }
}

export type MessageListResponse = Array<Shared.MessageResponse>;

export interface MessageCreateParams {
  allowed_mentions?: MessageCreateParams.AllowedMentions | null;

  attachments?: Array<MessageCreateParams.Attachment> | null;

  components?: Array<MessageCreateParams.Component> | null;

  content?: string | null;

  embeds?: Array<MessageCreateParams.Embed> | null;

  enforce_nonce?: boolean | null;

  flags?: number | null;

  message_reference?: MessageCreateParams.MessageReference | null;

  nonce?: number | string | null;

  poll?: MessageCreateParams.Poll | null;

  sticker_ids?: Array<string> | null;

  tts?: boolean | null;
}

export namespace MessageCreateParams {
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
    components: Array<
      | Component.ButtonComponentForMessageRequest
      | Component.ChannelSelectComponentForMessageRequest
      | Component.MentionableSelectComponentForMessageRequest
      | Component.RoleSelectComponentForMessageRequest
      | Component.StringSelectComponentForMessageRequest
      | Component.UserSelectComponentForMessageRequest
    >;

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

      default_values?: Array<
        | MentionableSelectComponentForMessageRequest.RoleSelectDefaultValue
        | MentionableSelectComponentForMessageRequest.UserSelectDefaultValue
      > | null;

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

  export interface MessageReference {
    message_id: string;

    channel_id?: string | null;

    fail_if_not_exists?: boolean | null;

    guild_id?: string | null;

    /**
     * - `0` - Reference to a message
     */
    type?: 0 | null;
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

export interface MessageUpdateParams {
  allowed_mentions?: MessageUpdateParams.AllowedMentions | null;

  attachments?: Array<MessageUpdateParams.Attachment> | null;

  components?: Array<MessageUpdateParams.Component> | null;

  content?: string | null;

  embeds?: Array<MessageUpdateParams.Embed> | null;

  flags?: number | null;

  sticker_ids?: Array<string> | null;
}

export namespace MessageUpdateParams {
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
    components: Array<
      | Component.ButtonComponentForMessageRequest
      | Component.ChannelSelectComponentForMessageRequest
      | Component.MentionableSelectComponentForMessageRequest
      | Component.RoleSelectComponentForMessageRequest
      | Component.StringSelectComponentForMessageRequest
      | Component.UserSelectComponentForMessageRequest
    >;

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

      default_values?: Array<
        | MentionableSelectComponentForMessageRequest.RoleSelectDefaultValue
        | MentionableSelectComponentForMessageRequest.UserSelectDefaultValue
      > | null;

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
}

export interface MessageListParams {
  after?: string;

  around?: string;

  before?: string;

  limit?: number;
}

export interface MessageBulkDeleteParams {
  messages: Array<string>;
}

Messages.Reactions = Reactions;
Messages.Threads = Threads;

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageBulkDeleteParams as MessageBulkDeleteParams,
  };

  export {
    Reactions as Reactions,
    type UserResponse as UserResponse,
    type ReactionRetrieveAllResponse as ReactionRetrieveAllResponse,
    type ReactionRetrieveAllParams as ReactionRetrieveAllParams,
  };

  export {
    Threads as Threads,
    type ThreadResponse as ThreadResponse,
    type ThreadCreateParams as ThreadCreateParams,
  };
}

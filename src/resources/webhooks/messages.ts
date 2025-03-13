// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Messages extends APIResource {
  retrieve(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    query?: MessageRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse>;
  retrieve(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse>;
  retrieve(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    query: MessageRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(webhookId, webhookToken, messageId, {}, query);
    }
    return this._client.get(`/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, {
      query,
      ...options,
    });
  }

  update(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    params: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    const { thread_id, ...body } = params;
    return this._client.patch(
      `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`,
      Core.maybeMultipartFormRequestOptions({ query: { thread_id }, body, ...options }),
    );
  }

  delete(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    params?: MessageDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(
    webhookId: string,
    webhookToken: string,
    messageId: string,
    params: MessageDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(webhookId, webhookToken, messageId, {}, params);
    }
    const { thread_id } = params;
    return this._client.delete(`/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`, {
      query: { thread_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  deleteOriginal(
    webhookId: string,
    webhookToken: string,
    params?: MessageDeleteOriginalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  deleteOriginal(
    webhookId: string,
    webhookToken: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  deleteOriginal(
    webhookId: string,
    webhookToken: string,
    params: MessageDeleteOriginalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.deleteOriginal(webhookId, webhookToken, {}, params);
    }
    const { thread_id } = params;
    return this._client.delete(`/webhooks/${webhookId}/${webhookToken}/messages/@original`, {
      query: { thread_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  retrieveOriginal(
    webhookId: string,
    webhookToken: string,
    query?: MessageRetrieveOriginalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse>;
  retrieveOriginal(
    webhookId: string,
    webhookToken: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse>;
  retrieveOriginal(
    webhookId: string,
    webhookToken: string,
    query: MessageRetrieveOriginalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveOriginal(webhookId, webhookToken, {}, query);
    }
    return this._client.get(`/webhooks/${webhookId}/${webhookToken}/messages/@original`, {
      query,
      ...options,
    });
  }

  updateOriginal(
    webhookId: string,
    webhookToken: string,
    params: MessageUpdateOriginalParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    const { thread_id, ...body } = params;
    return this._client.patch(
      `/webhooks/${webhookId}/${webhookToken}/messages/@original`,
      Core.maybeMultipartFormRequestOptions({ query: { thread_id }, body, ...options }),
    );
  }
}

export interface MessageRetrieveParams {
  thread_id?: string;
}

export interface MessageUpdateParams {
  /**
   * Query param:
   */
  thread_id?: string;

  /**
   * Body param:
   */
  allowed_mentions?: MessageUpdateParams.AllowedMentions | null;

  /**
   * Body param:
   */
  attachments?: Array<MessageUpdateParams.Attachment> | null;

  /**
   * Body param:
   */
  components?: Array<MessageUpdateParams.Component> | null;

  /**
   * Body param:
   */
  content?: string | null;

  /**
   * Body param:
   */
  embeds?: Array<MessageUpdateParams.Embed> | null;

  /**
   * Body param:
   */
  flags?: number | null;

  /**
   * Body param:
   */
  poll?: MessageUpdateParams.Poll | null;
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

export interface MessageDeleteParams {
  thread_id?: string;
}

export interface MessageDeleteOriginalParams {
  thread_id?: string;
}

export interface MessageRetrieveOriginalParams {
  thread_id?: string;
}

export interface MessageUpdateOriginalParams {
  /**
   * Query param:
   */
  thread_id?: string;

  /**
   * Body param:
   */
  allowed_mentions?: MessageUpdateOriginalParams.AllowedMentions | null;

  /**
   * Body param:
   */
  attachments?: Array<MessageUpdateOriginalParams.Attachment> | null;

  /**
   * Body param:
   */
  components?: Array<MessageUpdateOriginalParams.Component> | null;

  /**
   * Body param:
   */
  content?: string | null;

  /**
   * Body param:
   */
  embeds?: Array<MessageUpdateOriginalParams.Embed> | null;

  /**
   * Body param:
   */
  flags?: number | null;

  /**
   * Body param:
   */
  poll?: MessageUpdateOriginalParams.Poll | null;
}

export namespace MessageUpdateOriginalParams {
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

export declare namespace Messages {
  export {
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageDeleteOriginalParams as MessageDeleteOriginalParams,
    type MessageRetrieveOriginalParams as MessageRetrieveOriginalParams,
    type MessageUpdateOriginalParams as MessageUpdateOriginalParams,
  };
}

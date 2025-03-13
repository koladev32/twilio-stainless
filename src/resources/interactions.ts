// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as InteractionsAPI from './interactions';
import { maybeMultipartFormRequestOptions } from '../core';
import * as Shared from './shared';

export class Interactions extends APIResource {
  callback(interactionId: string, interactionToken: string, params: InteractionCallbackParams, options?: Core.RequestOptions): Core.APIPromise<InteractionCallbackResponse> {
    const { with_response, ...body } = params;
    return this._client.post(`/interactions/${interactionId}/${interactionToken}/callback`, Core.maybeMultipartFormRequestOptions({ query: { with_response }, body, ...options }));
  }
}

export interface InteractionCallbackResponse {
  interaction: InteractionCallbackResponse.Interaction;

  resource?: InteractionCallbackResponse.CreateMessageInteractionCallbackResponse | InteractionCallbackResponse.LaunchActivityInteractionCallbackResponse | InteractionCallbackResponse.UpdateMessageInteractionCallbackResponse | null;
}

export namespace InteractionCallbackResponse {
  export interface Interaction {
    id: string;

    /**
     * - `1` - Sent by Discord to validate your application's interaction handler
     * - `2` - Sent when a user uses an application command
     * - `3` - Sent when a user interacts with a message component previously sent by
     *   your application
     * - `4` - Sent when a user is filling in an autocomplete option in a chat command
     * - `5` - Sent when a user submits a modal previously sent by your application
     */
    type: 1 | 2 | 3 | 4 | 5;

    channel_id?: string | null;

    guild_id?: string | null;

    response_message_ephemeral?: boolean | null;

    response_message_id?: string | null;

    response_message_loading?: boolean | null;
  }

  export interface CreateMessageInteractionCallbackResponse {
    message: Shared.MessageResponse;

    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  }

  export interface LaunchActivityInteractionCallbackResponse {
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  }

  export interface UpdateMessageInteractionCallbackResponse {
    message: Shared.MessageResponse;

    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  }
}

export type InteractionCallbackParams = InteractionCallbackParams.ApplicationCommandAutocompleteCallbackRequest | InteractionCallbackParams.CreateMessageInteractionCallbackRequest | InteractionCallbackParams.LaunchActivityInteractionCallbackRequest | InteractionCallbackParams.ModalInteractionCallbackRequest | InteractionCallbackParams.PongInteractionCallbackRequest | InteractionCallbackParams.UpdateMessageInteractionCallbackRequest

export declare namespace InteractionCallbackParams {
  export interface ApplicationCommandAutocompleteCallbackRequest {
    /**
     * Body param:
     */
    data: ApplicationCommandAutocompleteCallbackRequest.InteractionApplicationCommandAutocompleteCallbackIntegerData | ApplicationCommandAutocompleteCallbackRequest.InteractionApplicationCommandAutocompleteCallbackNumberData | ApplicationCommandAutocompleteCallbackRequest.InteractionApplicationCommandAutocompleteCallbackStringData;

    /**
     * Body param:
     */
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

    /**
     * Query param:
     */
    with_response?: boolean;
  }

  export namespace ApplicationCommandAutocompleteCallbackRequest {
    export interface InteractionApplicationCommandAutocompleteCallbackIntegerData {
      choices?: Array<InteractionApplicationCommandAutocompleteCallbackIntegerData.Choice | null> | null;
    }

    export namespace InteractionApplicationCommandAutocompleteCallbackIntegerData {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface InteractionApplicationCommandAutocompleteCallbackNumberData {
      choices?: Array<InteractionApplicationCommandAutocompleteCallbackNumberData.Choice | null> | null;
    }

    export namespace InteractionApplicationCommandAutocompleteCallbackNumberData {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface InteractionApplicationCommandAutocompleteCallbackStringData {
      choices?: Array<InteractionApplicationCommandAutocompleteCallbackStringData.Choice | null> | null;
    }

    export namespace InteractionApplicationCommandAutocompleteCallbackStringData {
      export interface Choice {
        name: string;

        value: string;

        name_localizations?: Record<string, string> | null;
      }
    }
  }

  export interface CreateMessageInteractionCallbackRequest {
    /**
     * Body param:
     */
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

    /**
     * Query param:
     */
    with_response?: boolean;

    /**
     * Body param:
     */
    data?: CreateMessageInteractionCallbackRequest.Data | null;
  }

  export namespace CreateMessageInteractionCallbackRequest {
    export interface Data {
      allowed_mentions?: Data.AllowedMentions | null;

      attachments?: Array<Data.Attachment> | null;

      components?: Array<Data.Component> | null;

      content?: string | null;

      embeds?: Array<Data.Embed> | null;

      flags?: number | null;

      poll?: Data.Poll | null;

      tts?: boolean | null;
    }

    export namespace Data {
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

  export interface LaunchActivityInteractionCallbackRequest {
    /**
     * Body param:
     */
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

    /**
     * Query param:
     */
    with_response?: boolean;
  }

  export interface ModalInteractionCallbackRequest {
    /**
     * Body param:
     */
    data: ModalInteractionCallbackRequest.Data;

    /**
     * Body param:
     */
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

    /**
     * Query param:
     */
    with_response?: boolean;
  }

  export namespace ModalInteractionCallbackRequest {
    export interface Data {
      components: Array<Data.Component>;

      custom_id: string;

      title: string;
    }

    export namespace Data {
      export interface Component {
        components: Array<Component.Component>;

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
        export interface Component {
          custom_id: string;

          label: string;

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

          max_length?: number | null;

          min_length?: number | null;

          placeholder?: string | null;

          required?: boolean | null;

          value?: string | null;
        }
      }
    }
  }

  export interface PongInteractionCallbackRequest {
    /**
     * Body param:
     */
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

    /**
     * Query param:
     */
    with_response?: boolean;
  }

  export interface UpdateMessageInteractionCallbackRequest {
    /**
     * Body param:
     */
    type: 1 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

    /**
     * Query param:
     */
    with_response?: boolean;

    /**
     * Body param:
     */
    data?: UpdateMessageInteractionCallbackRequest.Data | null;
  }

  export namespace UpdateMessageInteractionCallbackRequest {
    export interface Data {
      allowed_mentions?: Data.AllowedMentions | null;

      attachments?: Array<Data.Attachment> | null;

      components?: Array<Data.Component> | null;

      content?: string | null;

      embeds?: Array<Data.Embed> | null;

      flags?: number | null;
    }

    export namespace Data {
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
    }
  }
}

export declare namespace Interactions {
  export {
    type InteractionCallbackResponse as InteractionCallbackResponse,
    type InteractionCallbackParams as InteractionCallbackParams
  };
}

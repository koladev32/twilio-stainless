// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as ThreadsAPI from './threads';
import { maybeMultipartFormRequestOptions } from '../../../core';
import * as ThreadMembersAPI from '../thread-members/thread-members';
import * as ArchivedAPI from './archived/archived';
import { Archived } from './archived/archived';

export class Threads extends APIResource {
  archived: ArchivedAPI.Archived = new ArchivedAPI.Archived(this._client);

  create(channelId: string, body: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreatedThread> {
    return this._client.post(`/channels/${channelId}/threads`, Core.maybeMultipartFormRequestOptions({ body, ...options }));
  }
}

export interface CreatedThread {
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

  thread_metadata?: CreatedThread.ThreadMetadata | null;

  user_limit?: number | null;

  /**
   * - `1` - Discord chooses the quality for optimal performance
   * - `2` - 720p
   */
  video_quality_mode?: 1 | 2 | null;
}

export namespace CreatedThread {
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

export type ThreadCreateParams = ThreadCreateParams.CreateForumThreadRequest | ThreadCreateParams.CreateTextThreadWithoutMessageRequest

export declare namespace ThreadCreateParams {
  export interface CreateForumThreadRequest {
    message: CreateForumThreadRequest.Message;

    name: string;

    applied_tags?: Array<string> | null;

    /**
     * - `60` - One hour
     * - `1440` - One day
     * - `4320` - Three days
     * - `10080` - Seven days
     */
    auto_archive_duration?: 60 | 1440 | 4320 | 10080 | null;

    rate_limit_per_user?: number | null;
  }

  export namespace CreateForumThreadRequest {
    export interface Message {
      allowed_mentions?: Message.AllowedMentions | null;

      attachments?: Array<Message.Attachment> | null;

      components?: Array<Message.Component> | null;

      content?: string | null;

      embeds?: Array<Message.Embed> | null;

      flags?: number | null;

      poll?: Message.Poll | null;

      sticker_ids?: Array<string> | null;
    }

    export namespace Message {
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

  export interface CreateTextThreadWithoutMessageRequest {
    name: string;

    /**
     * - `60` - One hour
     * - `1440` - One day
     * - `4320` - Three days
     * - `10080` - Seven days
     */
    auto_archive_duration?: 60 | 1440 | 4320 | 10080 | null;

    invitable?: boolean | null;

    rate_limit_per_user?: number | null;

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
  }
}

Threads.Archived = Archived;

export declare namespace Threads {
  export {
    type CreatedThread as CreatedThread,
    type ThreadCreateParams as ThreadCreateParams
  };

  export {
    Archived as Archived
  };
}

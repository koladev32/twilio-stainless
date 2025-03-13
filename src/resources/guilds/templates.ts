// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as TemplatesAPI from './templates';
import * as UsersAPI from '../users/users';

export class Templates extends APIResource {
  create(guildId: string, body: TemplateCreateParams, options?: Core.RequestOptions): Core.APIPromise<GuildTemplate> {
    return this._client.post(`/guilds/${guildId}/templates`, { body, ...options });
  }

  retrieve(code: string, options?: Core.RequestOptions): Core.APIPromise<GuildTemplate> {
    return this._client.get(`/guilds/templates/${code}`, options);
  }

  update(guildId: string, code: string, body: TemplateUpdateParams, options?: Core.RequestOptions): Core.APIPromise<GuildTemplate> {
    return this._client.patch(`/guilds/${guildId}/templates/${code}`, { body, ...options });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<TemplateListResponse | null> {
    return this._client.get(`/guilds/${guildId}/templates`, options);
  }

  delete(guildId: string, code: string, options?: Core.RequestOptions): Core.APIPromise<GuildTemplate> {
    return this._client.delete(`/guilds/${guildId}/templates/${code}`, options);
  }
}

export interface GuildTemplate {
  code: string;

  created_at: string;

  creator_id: string;

  name: string;

  serialized_source_guild: GuildTemplate.SerializedSourceGuild;

  source_guild_id: string;

  updated_at: string;

  usage_count: number;

  creator?: UsersAPI.User | null;

  description?: string | null;

  is_dirty?: boolean | null;
}

export namespace GuildTemplate {
  export interface SerializedSourceGuild {
    afk_timeout: 60 | 300 | 900 | 1800 | 3600;

    channels: Array<SerializedSourceGuild.Channel>;

    /**
     * - `0` - members will receive notifications for all messages by default
     * - `1` - members will receive notifications only for messages that @mention them
     *   by default
     */
    default_message_notifications: 0 | 1;

    /**
     * - `0` - media content will not be scanned
     * - `1` - media content sent by members without roles will be scanned
     * - `2` - media content sent by all members will be scanned
     */
    explicit_content_filter: 0 | 1 | 2;

    name: string;

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

    roles: Array<SerializedSourceGuild.Role>;

    system_channel_flags: number;

    /**
     * - `0` - unrestricted
     * - `1` - must have verified email on account
     * - `2` - must be registered on Discord for longer than 5 minutes
     * - `3` - must be a member of the server for longer than 10 minutes
     * - `4` - must have a verified phone number
     */
    verification_level: 0 | 1 | 2 | 3 | 4;

    afk_channel_id?: string | null;

    description?: string | null;

    region?: string | null;

    system_channel_id?: string | null;
  }

  export namespace SerializedSourceGuild {
    export interface Channel {
      bitrate: number;

      nsfw: boolean;

      permission_overwrites: Array<Channel.PermissionOverwrite | null>;

      rate_limit_per_user: number;

      template: string;

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

      user_limit: number;

      id?: number | null;

      available_tags?: Array<Channel.AvailableTag> | null;

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

      icon_emoji?: unknown | null;

      name?: string | null;

      parent_id?: string | null;

      position?: number | null;

      theme_color?: number | null;

      topic?: string | null;
    }

    export namespace Channel {
      export interface PermissionOverwrite {
        id: string;

        allow: string;

        deny: string;

        type: 0 | 1;
      }

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
    }

    export interface Role {
      id: number;

      color: number;

      hoist: boolean;

      mentionable: boolean;

      name: string;

      permissions: string;

      icon?: string | null;

      unicode_emoji?: string | null;
    }
  }
}

export type TemplateListResponse = Array<GuildTemplate>

export interface TemplateCreateParams {
  name: string;

  description?: string | null;
}

export interface TemplateUpdateParams {
  description?: string | null;

  name?: string;
}

export declare namespace Templates {
  export {
    type GuildTemplate as GuildTemplate,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams
  };
}

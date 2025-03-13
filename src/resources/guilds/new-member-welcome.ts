// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as NewMemberWelcomeAPI from './new-member-welcome';

export class NewMemberWelcome extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildHomeSettings> {
    return this._client.get(`/guilds/${guildId}/new-member-welcome`, options);
  }
}

export interface GuildHomeSettings {
  enabled: boolean;

  guild_id: string;

  new_member_actions?: Array<GuildHomeSettings.NewMemberAction | null> | null;

  resource_channels?: Array<GuildHomeSettings.ResourceChannel | null> | null;

  welcome_message?: GuildHomeSettings.WelcomeMessage | null;
}

export namespace GuildHomeSettings {
  export interface NewMemberAction {
    action_type: 0 | 1;

    channel_id: string;

    description: string;

    title: string;

    emoji?: NewMemberAction.Emoji | null;

    icon?: string | null;
  }

  export namespace NewMemberAction {
    export interface Emoji {
      id?: string | null;

      animated?: boolean | null;

      name?: string | null;
    }
  }

  export interface ResourceChannel {
    channel_id: string;

    description: string;

    title: string;

    emoji?: ResourceChannel.Emoji | null;

    icon?: string | null;
  }

  export namespace ResourceChannel {
    export interface Emoji {
      id?: string | null;

      animated?: boolean | null;

      name?: string | null;
    }
  }

  export interface WelcomeMessage {
    author_ids: Array<string>;

    message: string;
  }
}

export declare namespace NewMemberWelcome {
  export {
    type GuildHomeSettings as GuildHomeSettings
  };
}

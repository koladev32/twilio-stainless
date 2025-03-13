// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as OnboardingAPI from './onboarding';
import * as GuildsAPI from './guilds';

export class Onboarding extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildsAPI.UserGuildOnboarding> {
    return this._client.get(`/guilds/${guildId}/onboarding`, options);
  }

  update(guildId: string, body: OnboardingUpdateParams, options?: Core.RequestOptions): Core.APIPromise<GuildsAPI.GuildOnboarding> {
    return this._client.put(`/guilds/${guildId}/onboarding`, { body, ...options });
  }
}

export interface OnboardingUpdateParams {
  default_channel_ids?: Array<string> | null;

  enabled?: boolean | null;

  /**
   * - `0` - Only Default Channels considered in constraints
   * - `1` - Default Channels and Onboarding Prompts considered in constraints
   */
  mode?: 0 | 1 | null;

  prompts?: Array<OnboardingUpdateParams.Prompt> | null;
}

export namespace OnboardingUpdateParams {
  export interface Prompt {
    id: string;

    options: Array<Prompt.Option>;

    title: string;

    in_onboarding?: boolean | null;

    required?: boolean | null;

    single_select?: boolean | null;

    /**
     * - `0` - Multiple choice options
     * - `1` - Many options shown as a dropdown
     */
    type?: 0 | 1 | null;
  }

  export namespace Prompt {
    export interface Option {
      title: string;

      id?: string | null;

      channel_ids?: Array<string> | null;

      description?: string | null;

      emoji_animated?: boolean | null;

      emoji_id?: string | null;

      emoji_name?: string | null;

      role_ids?: Array<string> | null;
    }
  }
}

export declare namespace Onboarding {
  export {
    type OnboardingUpdateParams as OnboardingUpdateParams
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as WelcomeScreenAPI from './welcome-screen';

export class WelcomeScreen extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildWelcomeScreen> {
    return this._client.get(`/guilds/${guildId}/welcome-screen`, options);
  }

  update(guildId: string, body: WelcomeScreenUpdateParams, options?: Core.RequestOptions): Core.APIPromise<GuildWelcomeScreen> {
    return this._client.patch(`/guilds/${guildId}/welcome-screen`, { body, ...options });
  }
}

export interface GuildWelcomeScreen {
  welcome_channels: Array<GuildWelcomeScreen.WelcomeChannel>;

  description?: string | null;
}

export namespace GuildWelcomeScreen {
  export interface WelcomeChannel {
    channel_id: string;

    description: string;

    emoji_id?: string | null;

    emoji_name?: string | null;
  }
}

export interface WelcomeScreenUpdateParams {
  description?: string | null;

  enabled?: boolean | null;

  welcome_channels?: Array<WelcomeScreenUpdateParams.WelcomeChannel> | null;
}

export namespace WelcomeScreenUpdateParams {
  export interface WelcomeChannel {
    channel_id: string;

    description: string;

    emoji_id?: string | null;

    emoji_name?: string | null;
  }
}

export declare namespace WelcomeScreen {
  export {
    type GuildWelcomeScreen as GuildWelcomeScreen,
    type WelcomeScreenUpdateParams as WelcomeScreenUpdateParams
  };
}

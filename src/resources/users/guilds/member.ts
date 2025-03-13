// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as MemberAPI from './member';
import * as UsersAPI from '../users';

export class Member extends APIResource {
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<PrivateGuildMemberResponse> {
    return this._client.get(`/users/@me/guilds/${guildId}/member`, options);
  }
}

export interface PrivateGuildMemberResponse {
  deaf: boolean;

  flags: number;

  joined_at: string;

  mute: boolean;

  pending: boolean;

  roles: Array<string>;

  user: UsersAPI.User;

  avatar?: string | null;

  avatar_decoration_data?: PrivateGuildMemberResponse.AvatarDecorationData | null;

  banner?: string | null;

  communication_disabled_until?: string | null;

  nick?: string | null;

  premium_since?: string | null;
}

export namespace PrivateGuildMemberResponse {
  export interface AvatarDecorationData {
    asset: string;

    sku_id?: string | null;
  }
}

export declare namespace Member {
  export {
    type PrivateGuildMemberResponse as PrivateGuildMemberResponse
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as InvitesAPI from './invites';
import * as Shared from '../shared';

export class Invites extends APIResource {
  create(channelId: string, body: InviteCreateParams, options?: Core.RequestOptions): Core.APIPromise<InviteCreateResponse> {
    return this._client.post(`/channels/${channelId}/invites`, { body, ...options });
  }

  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<InviteListResponse | null> {
    return this._client.get(`/channels/${channelId}/invites`, options);
  }
}

export type InviteCreateResponse = Shared.FriendInvite | Shared.GroupDmInvite | Shared.GuildInvite

export type InviteListResponse = Array<Shared.FriendInvite | Shared.GroupDmInvite | Shared.GuildInvite>

export type InviteCreateParams = InviteCreateParams.CreateGroupDmInviteRequest | InviteCreateParams.CreateGuildInviteRequest

export declare namespace InviteCreateParams {
  export interface CreateGroupDmInviteRequest {
    max_age?: number | null;
  }

  export interface CreateGuildInviteRequest {
    max_age?: number | null;

    max_uses?: number | null;

    target_application_id?: string | null;

    target_type?: 1 | 2 | 3 | null;

    target_user_id?: string | null;

    temporary?: boolean | null;

    unique?: boolean | null;
  }
}

export declare namespace Invites {
  export {
    type InviteCreateResponse as InviteCreateResponse,
    type InviteListResponse as InviteListResponse,
    type InviteCreateParams as InviteCreateParams
  };
}

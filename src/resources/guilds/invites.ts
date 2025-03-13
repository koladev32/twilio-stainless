// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as InvitesAPI from './invites';
import * as Shared from '../shared';

export class Invites extends APIResource {
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<InviteListResponse | null> {
    return this._client.get(`/guilds/${guildId}/invites`, options);
  }
}

export type InviteListResponse = Array<Shared.FriendInvite | Shared.GroupDmInvite | Shared.GuildInvite>

export declare namespace Invites {
  export {
    type InviteListResponse as InviteListResponse
  };
}

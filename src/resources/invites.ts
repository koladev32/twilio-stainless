// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as InvitesAPI from './invites';
import * as Shared from './shared';

export class Invites extends APIResource {
  retrieve(code: string, query?: InviteRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<InviteRetrieveResponse>
  retrieve(code: string, options?: Core.RequestOptions): Core.APIPromise<InviteRetrieveResponse>
  retrieve(code: string, query: InviteRetrieveParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<InviteRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(code, {}, query);
    }
    return this._client.get(`/invites/${code}`, { query, ...options });
  }

  delete(code: string, options?: Core.RequestOptions): Core.APIPromise<InviteDeleteResponse> {
    return this._client.delete(`/invites/${code}`, options);
  }
}

export type InviteRetrieveResponse = Shared.FriendInvite | Shared.GroupDmInvite | Shared.GuildInvite

export type InviteDeleteResponse = Shared.FriendInvite | Shared.GroupDmInvite | Shared.GuildInvite

export interface InviteRetrieveParams {
  guild_scheduled_event_id?: string;

  with_counts?: boolean;
}

export declare namespace Invites {
  export {
    type InviteRetrieveResponse as InviteRetrieveResponse,
    type InviteDeleteResponse as InviteDeleteResponse,
    type InviteRetrieveParams as InviteRetrieveParams
  };
}

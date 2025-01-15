// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ChannelsAPI from '../channels/channels';
import * as ThreadMembersAPI from '../channels/thread-members/thread-members';

export class Threads extends APIResource {
  active(guildId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ThreadsResponse> {
    return this._client.get(`/guilds/${guildId}/threads/active`, options);
  }
}

export interface ThreadsResponse {
  members: Array<ThreadMembersAPI.ThreadMemberResponse>;

  threads: Array<ChannelsAPI.Thread>;

  has_more?: boolean | null;
}

export declare namespace Threads {
  export { type ThreadsResponse as ThreadsResponse };
}

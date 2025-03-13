// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';

export class Roles extends APIResource {
  update(guildId: string, userId: string, roleId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/guilds/${guildId}/members/${userId}/roles/${roleId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  delete(guildId: string, userId: string, roleId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/members/${userId}/roles/${roleId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

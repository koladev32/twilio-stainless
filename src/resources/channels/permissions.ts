// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PermissionsAPI from './permissions';

export class Permissions extends APIResource {
  update(channelId: string, overwriteId: string, body: PermissionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/channels/${channelId}/permissions/${overwriteId}`, { body, ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  delete(channelId: string, overwriteId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/channels/${channelId}/permissions/${overwriteId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface PermissionUpdateParams {
  allow?: number | null;

  deny?: number | null;

  type?: 0 | 1 | null;
}

export declare namespace Permissions {
  export {
    type PermissionUpdateParams as PermissionUpdateParams
  };
}

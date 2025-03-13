// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as PermissionsAPI from './permissions';
import * as CommandsAPI from '../../commands/commands';

export class Permissions extends APIResource {
  update(applicationId: string, guildId: string, commandId: string, body: PermissionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CommandsAPI.CommandPermissionsResponse> {
    return this._client.put(`/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, { body, ...options });
  }
}

export interface PermissionUpdateParams {
  permissions?: Array<PermissionUpdateParams.Permission> | null;
}

export namespace PermissionUpdateParams {
  export interface Permission {
    id: string;

    permission: boolean;

    /**
     * - `1` - This permission is for a role.
     * - `2` - This permission is for a user.
     * - `3` - This permission is for a channel.
     */
    type: 1 | 2 | 3;
  }
}

export declare namespace Permissions {
  export {
    type PermissionUpdateParams as PermissionUpdateParams
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as PermissionsAPI from './permissions';
import * as CommandsAPI from './commands';

export class Permissions extends APIResource {
  listPermissions(applicationId: string, guildId: string, options?: Core.RequestOptions): Core.APIPromise<PermissionListPermissionsResponse> {
    return this._client.get(`/applications/${applicationId}/guilds/${guildId}/commands/permissions`, options);
  }

  retrievePermissions(applicationId: string, guildId: string, commandId: string, options?: Core.RequestOptions): Core.APIPromise<CommandsAPI.CommandPermissionsResponse> {
    return this._client.get(`/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`, options);
  }
}

export type PermissionListPermissionsResponse = Array<CommandsAPI.CommandPermissionsResponse>

export declare namespace Permissions {
  export {
    type PermissionListPermissionsResponse as PermissionListPermissionsResponse
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class RoleConnections extends APIResource {
  retrieve(
    applicationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationUserRoleConnectionResponse> {
    return this._client.get(`/users/@me/applications/${applicationId}/role-connection`, options);
  }

  update(
    applicationId: string,
    body: RoleConnectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationUserRoleConnectionResponse> {
    return this._client.put(`/users/@me/applications/${applicationId}/role-connection`, { body, ...options });
  }

  remove(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/users/@me/applications/${applicationId}/role-connection`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ApplicationUserRoleConnectionResponse {
  metadata?: { [key: string]: string } | null;

  platform_name?: string | null;

  platform_username?: string | null;
}

export interface RoleConnectionUpdateParams {
  metadata?: { [key: string]: string } | null;

  platform_name?: string | null;

  platform_username?: string | null;
}

export declare namespace RoleConnections {
  export {
    type ApplicationUserRoleConnectionResponse as ApplicationUserRoleConnectionResponse,
    type RoleConnectionUpdateParams as RoleConnectionUpdateParams,
  };
}

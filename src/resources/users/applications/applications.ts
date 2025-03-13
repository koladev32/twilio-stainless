// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as RoleConnectionsAPI from './role-connections';
import { ApplicationUserRoleConnectionResponse, RoleConnectionUpdateParams, RoleConnections } from './role-connections';

export class Applications extends APIResource {
  roleConnections: RoleConnectionsAPI.RoleConnections = new RoleConnectionsAPI.RoleConnections(this._client);
}

Applications.RoleConnections = RoleConnections;

export declare namespace Applications {
  export {
    RoleConnections as RoleConnections,
    type ApplicationUserRoleConnectionResponse as ApplicationUserRoleConnectionResponse,
    type RoleConnectionUpdateParams as RoleConnectionUpdateParams
  };
}

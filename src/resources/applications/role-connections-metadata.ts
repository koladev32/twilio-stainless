// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MetadataAPI from './role-connections/metadata';

export class RoleConnectionsMetadata extends APIResource {
  update(
    applicationId: string,
    body: RoleConnectionsMetadataUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleConnectionsMetadataUpdateResponse | null> {
    return this._client.put(`/applications/${applicationId}/role-connections/metadata`, { body, ...options });
  }
}

export type RoleConnectionsMetadataUpdateResponse =
  Array<MetadataAPI.ApplicationRoleConnectionsMetadataItemResponse>;

export type RoleConnectionsMetadataUpdateParams = Array<RoleConnectionsMetadataUpdateParams.Body> | null;

export namespace RoleConnectionsMetadataUpdateParams {
  export interface Body {
    description: string;

    key: string;

    name: string;

    /**
     * - `1` - the metadata value (integer) is less than or equal to the guild's
     *   configured value (integer)
     * - `2` - the metadata value (integer) is greater than or equal to the guild's
     *   configured value (integer)
     * - `3` - the metadata value (integer) is equal to the guild's configured value
     *   (integer)
     * - `4` - the metadata value (integer) is not equal to the guild's configured
     *   value (integer)
     * - `5` - the metadata value (ISO8601 string) is less than or equal to the guild's
     *   configured value (integer; days before current date)
     * - `6` - the metadata value (ISO8601 string) is greater than or equal to the
     *   guild's configured value (integer; days before current date)
     * - `7` - the metadata value (integer) is equal to the guild's configured value
     *   (integer; 1)
     * - `8` - the metadata value (integer) is not equal to the guild's configured
     *   value (integer; 1)
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    description_localizations?: { [key: string]: string | null } | null;

    name_localizations?: { [key: string]: string | null } | null;
  }
}

export declare namespace RoleConnectionsMetadata {
  export {
    type RoleConnectionsMetadataUpdateResponse as RoleConnectionsMetadataUpdateResponse,
    type RoleConnectionsMetadataUpdateParams as RoleConnectionsMetadataUpdateParams,
  };
}

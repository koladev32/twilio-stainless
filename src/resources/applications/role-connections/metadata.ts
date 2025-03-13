// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';

export class Metadata extends APIResource {
  list(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<MetadataListResponse | null> {
    return this._client.get(`/applications/${applicationId}/role-connections/metadata`, options);
  }
}

export interface ApplicationRoleConnectionsMetadataItemResponse {
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

  description_localizations?: Record<string, string> | null;

  name_localizations?: Record<string, string> | null;
}

export type MetadataListResponse = Array<ApplicationRoleConnectionsMetadataItemResponse>

export declare namespace Metadata {
  export {
    type ApplicationRoleConnectionsMetadataItemResponse as ApplicationRoleConnectionsMetadataItemResponse,
    type MetadataListResponse as MetadataListResponse
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';
import { ApplicationRoleConnectionsMetadataItemResponse, Metadata, MetadataListResponse } from './metadata';

export class RoleConnections extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
}

RoleConnections.Metadata = Metadata;

export declare namespace RoleConnections {
  export {
    Metadata as Metadata,
    type ApplicationRoleConnectionsMetadataItemResponse as ApplicationRoleConnectionsMetadataItemResponse,
    type MetadataListResponse as MetadataListResponse
  };
}

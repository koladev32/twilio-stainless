// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Entitlements extends APIResource {
  create(
    applicationId: string,
    body: EntitlementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitlementResponse> {
    return this._client.post(`/applications/${applicationId}/entitlements`, { body, ...options });
  }

  retrieve(
    applicationId: string,
    entitlementId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitlementResponse> {
    return this._client.get(`/applications/${applicationId}/entitlements/${entitlementId}`, options);
  }

  list(
    applicationId: string,
    query: EntitlementListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitlementListResponse> {
    return this._client.get(`/applications/${applicationId}/entitlements`, { query, ...options });
  }

  delete(applicationId: string, entitlementId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/applications/${applicationId}/entitlements/${entitlementId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  consume(
    applicationId: string,
    entitlementId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/applications/${applicationId}/entitlements/${entitlementId}/consume`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EntitlementResponse {
  id: string;

  application_id: string;

  deleted: boolean;

  sku_id: string;

  type: 8 | 10;

  user_id: string;

  consumed?: boolean | null;

  ends_at?: string | null;

  fulfilled_at?: string | null;

  fulfillment_status?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;

  guild_id?: string | null;

  starts_at?: string | null;
}

export type EntitlementListResponse = Array<EntitlementResponse | null>;

export interface EntitlementCreateParams {
  owner_id: string;

  owner_type;

  sku_id: string;
}

export interface EntitlementListParams {
  sku_ids: string | Array<string | null>;

  after?: string;

  before?: string;

  exclude_deleted?: boolean;

  exclude_ended?: boolean;

  guild_id?: string;

  limit?: number;

  only_active?: boolean;

  user_id?: string;
}

export declare namespace Entitlements {
  export {
    type EntitlementResponse as EntitlementResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementListParams as EntitlementListParams,
  };
}

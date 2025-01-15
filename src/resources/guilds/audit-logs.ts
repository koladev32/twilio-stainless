// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as GuildsAPI from './guilds';

export class AuditLogs extends APIResource {
  retrieve(
    guildId: string,
    query?: AuditLogRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GuildsAPI.GuildAuditLog>;
  retrieve(guildId: string, options?: Core.RequestOptions): Core.APIPromise<GuildsAPI.GuildAuditLog>;
  retrieve(
    guildId: string,
    query: AuditLogRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GuildsAPI.GuildAuditLog> {
    if (isRequestOptions(query)) {
      return this.retrieve(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/audit-logs`, { query, ...options });
  }
}

export interface AuditLogRetrieveParams {
  action_type?: number;

  after?: string;

  before?: string;

  limit?: number;

  target_id?: string;

  user_id?: string;
}

export declare namespace AuditLogs {
  export { type AuditLogRetrieveParams as AuditLogRetrieveParams };
}

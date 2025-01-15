// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Bot extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<GatewayBotResponse> {
    return this._client.get('/gateway/bot', options);
  }
}

export interface GatewayBotResponse {
  session_start_limit: GatewayBotResponse.SessionStartLimit;

  shards: number;

  url: string;
}

export namespace GatewayBotResponse {
  export interface SessionStartLimit {
    max_concurrency: number;

    remaining: number;

    reset_after: number;

    total: number;
  }
}

export declare namespace Bot {
  export { type GatewayBotResponse as GatewayBotResponse };
}

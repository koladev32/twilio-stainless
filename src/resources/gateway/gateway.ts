// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BotAPI from './bot';
import { Bot, GatewayBotResponse } from './bot';

export class Gateway extends APIResource {
  bot: BotAPI.Bot = new BotAPI.Bot(this._client);

  retrieve(options?: Core.RequestOptions): Core.APIPromise<GatewayResponse> {
    return this._client.get('/gateway', options);
  }
}

export interface GatewayResponse {
  url: string;
}

Gateway.Bot = Bot;

export declare namespace Gateway {
  export { type GatewayResponse as GatewayResponse };

  export { Bot as Bot, type GatewayBotResponse as GatewayBotResponse };
}

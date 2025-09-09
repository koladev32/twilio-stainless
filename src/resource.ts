// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DiscordAPI } from './index';

export abstract class APIResource {
  protected _client: DiscordAPI;

  constructor(client: DiscordAPI) {
    this._client = client;
  }
}

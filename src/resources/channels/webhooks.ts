// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as WebhooksAPI from './webhooks';
import * as Shared from '../shared';
import * as WebhooksWebhooksAPI from '../webhooks/webhooks';

export class Webhooks extends APIResource {
  create(channelId: string, body: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.GuildIncomingWebhook> {
    return this._client.post(`/channels/${channelId}/webhooks`, { body, ...options });
  }

  list(channelId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse | null> {
    return this._client.get(`/channels/${channelId}/webhooks`, options);
  }
}

export type WebhookListResponse = Array<WebhooksWebhooksAPI.ApplicationIncomingWebhook | WebhooksWebhooksAPI.ChannelFollowerWebhook | Shared.GuildIncomingWebhook>

export interface WebhookCreateParams {
  name: string;

  avatar?: string | null;
}

export declare namespace Webhooks {
  export {
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams
  };
}

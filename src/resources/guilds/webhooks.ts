// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as WebhooksWebhooksAPI from '../webhooks/webhooks';

export class Webhooks extends APIResource {
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse | null> {
    return this._client.get(`/guilds/${guildId}/webhooks`, options);
  }
}

export type WebhookListResponse = Array<
  | WebhooksWebhooksAPI.ApplicationIncomingWebhook
  | WebhooksWebhooksAPI.ChannelFollowerWebhook
  | Shared.GuildIncomingWebhook
>;

export declare namespace Webhooks {
  export { type WebhookListResponse as WebhookListResponse };
}

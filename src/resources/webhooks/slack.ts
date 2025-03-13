// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Slack extends APIResource {
  create(
    webhookId: string,
    webhookToken: string,
    params: SlackCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { thread_id, wait, ...body } = params;
    return this._client.post(
      `/webhooks/${webhookId}/${webhookToken}/slack`,
      Core.maybeMultipartFormRequestOptions({ query: { thread_id, wait }, body, ...options }),
    );
  }
}

export type SlackCreateResponse = string | null;

export interface SlackCreateParams {
  /**
   * Query param:
   */
  thread_id?: string;

  /**
   * Query param:
   */
  wait?: boolean;

  /**
   * Body param:
   */
  attachments?: Array<SlackCreateParams.Attachment> | null;

  /**
   * Body param:
   */
  icon_url?: string | null;

  /**
   * Body param:
   */
  text?: string | null;

  /**
   * Body param:
   */
  username?: string | null;
}

export namespace SlackCreateParams {
  export interface Attachment {
    author_icon?: string | null;

    author_link?: string | null;

    author_name?: string | null;

    color?: string | null;

    fields?: Array<Attachment.Field> | null;

    footer?: string | null;

    footer_icon?: string | null;

    image_url?: string | null;

    pretext?: string | null;

    text?: string | null;

    thumb_url?: string | null;

    title?: string | null;

    title_link?: string | null;

    ts?: number | null;
  }

  export namespace Attachment {
    export interface Field {
      inline?: boolean | null;

      name?: string | null;

      value?: string | null;
    }
  }
}

export declare namespace Slack {
  export { type SlackCreateResponse as SlackCreateResponse, type SlackCreateParams as SlackCreateParams };
}

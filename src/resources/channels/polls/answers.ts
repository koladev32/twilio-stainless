// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as AnswersAPI from './answers';
import * as PollsAPI from './polls';

export class Answers extends APIResource {
  retrieve(channelId: string, messageId: string, answerId: number, query?: AnswerRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<PollsAPI.PollAnswerDetailsResponse>
  retrieve(channelId: string, messageId: string, answerId: number, options?: Core.RequestOptions): Core.APIPromise<PollsAPI.PollAnswerDetailsResponse>
  retrieve(channelId: string, messageId: string, answerId: number, query: AnswerRetrieveParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<PollsAPI.PollAnswerDetailsResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(channelId, messageId, answerId, {}, query);
    }
    return this._client.get(`/channels/${channelId}/polls/${messageId}/answers/${answerId}`, { query, ...options });
  }
}

export interface AnswerRetrieveParams {
  after?: string;

  limit?: number;
}

export declare namespace Answers {
  export {
    type AnswerRetrieveParams as AnswerRetrieveParams
  };
}

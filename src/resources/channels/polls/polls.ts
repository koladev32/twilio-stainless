// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as UsersAPI from '../../users/users';
import * as AnswersAPI from './answers';
import { AnswerRetrieveParams, Answers } from './answers';

export class Polls extends APIResource {
  answers: AnswersAPI.Answers = new AnswersAPI.Answers(this._client);

  expire(
    channelId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MessageResponse> {
    return this._client.post(`/channels/${channelId}/polls/${messageId}/expire`, options);
  }
}

export interface PollAnswerDetailsResponse {
  users?: Array<UsersAPI.User> | null;
}

Polls.Answers = Answers;

export declare namespace Polls {
  export { type PollAnswerDetailsResponse as PollAnswerDetailsResponse };

  export { Answers as Answers, type AnswerRetrieveParams as AnswerRetrieveParams };
}

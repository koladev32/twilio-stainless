// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ThreadsAPI from './threads/threads';
import { Threads } from './threads/threads';

export class Users extends APIResource {
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

Users.Threads = Threads;

export declare namespace Users {
  export { Threads as Threads };
}

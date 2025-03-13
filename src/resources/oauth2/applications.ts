// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Applications extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Shared.PrivateApplicationResponse> {
    return this._client.get('/oauth2/applications/@me', options);
  }
}

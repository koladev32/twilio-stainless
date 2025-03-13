// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as PrivateAPI from './private';
import { Private, PrivateListParams } from './private';

export class Archived extends APIResource {
  private: PrivateAPI.Private = new PrivateAPI.Private(this._client);
}

Archived.Private = Private;

export declare namespace Archived {
  export {
    Private as Private,
    type PrivateListParams as PrivateListParams
  };
}

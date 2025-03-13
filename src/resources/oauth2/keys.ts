// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as KeysAPI from './keys';

export class Keys extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<Oauth2GetKeys> {
    return this._client.get('/oauth2/keys', options);
  }
}

export interface Oauth2GetKeys {
  keys: Array<Oauth2GetKeys.Key>;
}

export namespace Oauth2GetKeys {
  export interface Key {
    alg: string;

    e: string;

    kid: string;

    kty: string;

    n: string;

    use: string;
  }
}

export declare namespace Keys {
  export {
    type Oauth2GetKeys as Oauth2GetKeys
  };
}

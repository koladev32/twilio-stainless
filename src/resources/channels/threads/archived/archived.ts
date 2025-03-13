// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as PrivateAPI from './private';
import { Private, PrivateListParams } from './private';
import * as PublicAPI from './public';
import { Public, PublicListParams } from './public';

export class Archived extends APIResource {
  private: PrivateAPI.Private = new PrivateAPI.Private(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
}

Archived.Private = Private;
Archived.Public = Public;

export declare namespace Archived {
  export { Private as Private, type PrivateListParams as PrivateListParams };

  export { Public as Public, type PublicListParams as PublicListParams };
}

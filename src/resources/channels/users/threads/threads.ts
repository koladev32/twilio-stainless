// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ArchivedAPI from './archived/archived';
import { Archived } from './archived/archived';

export class Threads extends APIResource {
  archived: ArchivedAPI.Archived = new ArchivedAPI.Archived(this._client);
}

Threads.Archived = Archived;

export declare namespace Threads {
  export { Archived as Archived };
}

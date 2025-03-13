// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ActivityInstances extends APIResource {
  retrieve(
    applicationId: string,
    instanceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmbeddedActivityInstance> {
    return this._client.get(`/applications/${applicationId}/activity-instances/${instanceId}`, options);
  }
}

export interface EmbeddedActivityInstance {
  application_id: string;

  instance_id: string;

  launch_id: string;

  users: Array<string>;

  location?:
    | EmbeddedActivityInstance.GuildChannelLocation
    | EmbeddedActivityInstance.PrivateChannelLocation
    | null;
}

export namespace EmbeddedActivityInstance {
  export interface GuildChannelLocation {
    id: string;

    channel_id: string;

    guild_id: string;

    /**
     * - `gc` - guild channel
     * - `pc` - private channel
     */
    kind: 'gc' | 'pc';
  }

  export interface PrivateChannelLocation {
    id: string;

    channel_id: string;

    /**
     * - `gc` - guild channel
     * - `pc` - private channel
     */
    kind: 'gc' | 'pc';
  }
}

export declare namespace ActivityInstances {
  export { type EmbeddedActivityInstance as EmbeddedActivityInstance };
}

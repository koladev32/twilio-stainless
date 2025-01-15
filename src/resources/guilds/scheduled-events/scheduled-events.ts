// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from '../../users/users';
import * as ScheduledEventsUsersAPI from './users';
import { ScheduledEventUserResponse, UserListParams, UserListResponse, Users } from './users';

export class ScheduledEvents extends APIResource {
  users: ScheduledEventsUsersAPI.Users = new ScheduledEventsUsersAPI.Users(this._client);

  create(
    guildId: string,
    body: ScheduledEventCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventCreateResponse> {
    return this._client.post(`/guilds/${guildId}/scheduled-events`, { body, ...options });
  }

  retrieve(
    guildId: string,
    guildScheduledEventId: string,
    query?: ScheduledEventRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventRetrieveResponse>;
  retrieve(
    guildId: string,
    guildScheduledEventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventRetrieveResponse>;
  retrieve(
    guildId: string,
    guildScheduledEventId: string,
    query: ScheduledEventRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(guildId, guildScheduledEventId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, {
      query,
      ...options,
    });
  }

  update(
    guildId: string,
    guildScheduledEventId: string,
    body: ScheduledEventUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventUpdateResponse> {
    return this._client.patch(`/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, {
      body,
      ...options,
    });
  }

  list(
    guildId: string,
    query?: ScheduledEventListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventListResponse | null>;
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<ScheduledEventListResponse | null>;
  list(
    guildId: string,
    query: ScheduledEventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(guildId, {}, query);
    }
    return this._client.get(`/guilds/${guildId}/scheduled-events`, { query, ...options });
  }

  delete(
    guildId: string,
    guildScheduledEventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ExternalScheduledEvent {
  id: string;

  entity_metadata: ExternalScheduledEvent.EntityMetadata;

  entity_type: 0 | 1 | 2 | 3;

  guild_id: string;

  name: string;

  /**
   * the scheduled event is only accessible to guild members
   */
  privacy_level: 2;

  scheduled_start_time: string;

  status: 1 | 2 | 3 | 4;

  channel_id?: string | null;

  creator?: UsersAPI.User | null;

  creator_id?: string | null;

  description?: string | null;

  entity_id?: string | null;

  image?: string | null;

  scheduled_end_time?: string | null;

  user_count?: number | null;

  user_rsvp?: ScheduledEventsUsersAPI.ScheduledEventUserResponse | null;
}

export namespace ExternalScheduledEvent {
  export interface EntityMetadata {
    location: string;
  }
}

export interface StageScheduledEvent {
  id: string;

  entity_type: 0 | 1 | 2 | 3;

  guild_id: string;

  name: string;

  /**
   * the scheduled event is only accessible to guild members
   */
  privacy_level: 2;

  scheduled_start_time: string;

  status: 1 | 2 | 3 | 4;

  channel_id?: string | null;

  creator?: UsersAPI.User | null;

  creator_id?: string | null;

  description?: string | null;

  entity_id?: string | null;

  entity_metadata?: unknown | null;

  image?: string | null;

  scheduled_end_time?: string | null;

  user_count?: number | null;

  user_rsvp?: ScheduledEventsUsersAPI.ScheduledEventUserResponse | null;
}

export interface VoiceScheduledEvent {
  id: string;

  entity_type: 0 | 1 | 2 | 3;

  guild_id: string;

  name: string;

  /**
   * the scheduled event is only accessible to guild members
   */
  privacy_level: 2;

  scheduled_start_time: string;

  status: 1 | 2 | 3 | 4;

  channel_id?: string | null;

  creator?: UsersAPI.User | null;

  creator_id?: string | null;

  description?: string | null;

  entity_id?: string | null;

  entity_metadata?: unknown | null;

  image?: string | null;

  scheduled_end_time?: string | null;

  user_count?: number | null;

  user_rsvp?: ScheduledEventsUsersAPI.ScheduledEventUserResponse | null;
}

export type ScheduledEventCreateResponse = ExternalScheduledEvent | StageScheduledEvent | VoiceScheduledEvent;

export type ScheduledEventRetrieveResponse =
  | ExternalScheduledEvent
  | StageScheduledEvent
  | VoiceScheduledEvent;

export type ScheduledEventUpdateResponse = ExternalScheduledEvent | StageScheduledEvent | VoiceScheduledEvent;

export type ScheduledEventListResponse = Array<
  ExternalScheduledEvent | StageScheduledEvent | VoiceScheduledEvent
>;

export type ScheduledEventCreateParams =
  | ScheduledEventCreateParams.ExternalScheduledEventCreateRequest
  | ScheduledEventCreateParams.StageScheduledEventCreateRequest
  | ScheduledEventCreateParams.VoiceScheduledEventCreateRequest;

export declare namespace ScheduledEventCreateParams {
  export interface ExternalScheduledEventCreateRequest {
    entity_metadata: ScheduledEventCreateParams.ExternalScheduledEventCreateRequest.EntityMetadata;

    entity_type: 0 | 1 | 2 | 3;

    name: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level: 2;

    scheduled_start_time: string;

    channel_id?: string | null;

    description?: string | null;

    image?: string | null;

    scheduled_end_time?: string | null;
  }

  export namespace ExternalScheduledEventCreateRequest {
    export interface EntityMetadata {
      location: string;
    }
  }

  export interface StageScheduledEventCreateRequest {
    entity_type: 0 | 1 | 2 | 3;

    name: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level: 2;

    scheduled_start_time: string;

    channel_id?: string | null;

    description?: string | null;

    entity_metadata?: unknown | null;

    image?: string | null;

    scheduled_end_time?: string | null;
  }

  export interface VoiceScheduledEventCreateRequest {
    entity_type: 0 | 1 | 2 | 3;

    name: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level: 2;

    scheduled_start_time: string;

    channel_id?: string | null;

    description?: string | null;

    entity_metadata?: unknown | null;

    image?: string | null;

    scheduled_end_time?: string | null;
  }
}

export interface ScheduledEventRetrieveParams {
  with_user_count?: boolean;
}

export type ScheduledEventUpdateParams =
  | ScheduledEventUpdateParams.ExternalScheduledEventPatchRequestPartial
  | ScheduledEventUpdateParams.StageScheduledEventPatchRequestPartial
  | ScheduledEventUpdateParams.VoiceScheduledEventPatchRequestPartial;

export declare namespace ScheduledEventUpdateParams {
  export interface ExternalScheduledEventPatchRequestPartial {
    channel_id?: string | null;

    description?: string | null;

    entity_metadata?: ScheduledEventUpdateParams.ExternalScheduledEventPatchRequestPartial.EntityMetadata;

    entity_type?: 0 | 1 | 2 | 3 | null;

    image?: string | null;

    name?: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level?: 2;

    scheduled_end_time?: string | null;

    scheduled_start_time?: string;

    status?: 1 | 2 | 3 | 4 | null;
  }

  export namespace ExternalScheduledEventPatchRequestPartial {
    export interface EntityMetadata {
      location: string;
    }
  }

  export interface StageScheduledEventPatchRequestPartial {
    channel_id?: string | null;

    description?: string | null;

    entity_metadata?: unknown | null;

    entity_type?: 0 | 1 | 2 | 3 | null;

    image?: string | null;

    name?: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level?: 2;

    scheduled_end_time?: string | null;

    scheduled_start_time?: string;

    status?: 1 | 2 | 3 | 4 | null;
  }

  export interface VoiceScheduledEventPatchRequestPartial {
    channel_id?: string | null;

    description?: string | null;

    entity_metadata?: unknown | null;

    entity_type?: 0 | 1 | 2 | 3 | null;

    image?: string | null;

    name?: string;

    /**
     * the scheduled event is only accessible to guild members
     */
    privacy_level?: 2;

    scheduled_end_time?: string | null;

    scheduled_start_time?: string;

    status?: 1 | 2 | 3 | 4 | null;
  }
}

export interface ScheduledEventListParams {
  with_user_count?: boolean;
}

ScheduledEvents.Users = Users;

export declare namespace ScheduledEvents {
  export {
    type ExternalScheduledEvent as ExternalScheduledEvent,
    type StageScheduledEvent as StageScheduledEvent,
    type VoiceScheduledEvent as VoiceScheduledEvent,
    type ScheduledEventCreateResponse as ScheduledEventCreateResponse,
    type ScheduledEventRetrieveResponse as ScheduledEventRetrieveResponse,
    type ScheduledEventUpdateResponse as ScheduledEventUpdateResponse,
    type ScheduledEventListResponse as ScheduledEventListResponse,
    type ScheduledEventCreateParams as ScheduledEventCreateParams,
    type ScheduledEventRetrieveParams as ScheduledEventRetrieveParams,
    type ScheduledEventUpdateParams as ScheduledEventUpdateParams,
    type ScheduledEventListParams as ScheduledEventListParams,
  };

  export {
    Users as Users,
    type ScheduledEventUserResponse as ScheduledEventUserResponse,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };
}

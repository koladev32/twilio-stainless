// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MembersAPI from './members/members';

export class VoiceStates extends APIResource {
  retrieve(
    guildId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VoiceStateResponse> {
    return this._client.get(`/guilds/${guildId}/voice-states/${userId}`, options);
  }

  update(
    guildId: string,
    userId: string,
    body: VoiceStateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch(`/guilds/${guildId}/voice-states/${userId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  retrieveSelf(guildId: string, options?: Core.RequestOptions): Core.APIPromise<VoiceStateResponse> {
    return this._client.get(`/guilds/${guildId}/voice-states/@me`, options);
  }

  updateSelf(
    guildId: string,
    body: VoiceStateUpdateSelfParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch(`/guilds/${guildId}/voice-states/@me`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface VoiceState {
  deaf: boolean;

  mute: boolean;

  self_deaf: boolean;

  self_mute: boolean;

  self_video: boolean;

  session_id: string;

  suppress: boolean;

  user_id: string;

  channel_id?: string | null;

  guild_id?: string | null;

  member?: MembersAPI.GuildMemberResponse | null;

  request_to_speak_timestamp?: string | null;

  self_stream?: boolean | null;
}

export interface VoiceStateResponse {
  deaf: boolean;

  mute: boolean;

  self_deaf: boolean;

  self_mute: boolean;

  self_video: boolean;

  session_id: string;

  suppress: boolean;

  user_id: string;

  channel_id?: string | null;

  guild_id?: string | null;

  member?: MembersAPI.GuildMemberResponse | null;

  request_to_speak_timestamp?: string | null;

  self_stream?: boolean | null;
}

export interface VoiceStateUpdateParams {
  channel_id?: string | null;

  suppress?: boolean | null;
}

export interface VoiceStateUpdateSelfParams {
  channel_id?: string | null;

  request_to_speak_timestamp?: string | null;

  suppress?: boolean | null;
}

export declare namespace VoiceStates {
  export {
    type VoiceState as VoiceState,
    type VoiceStateResponse as VoiceStateResponse,
    type VoiceStateUpdateParams as VoiceStateUpdateParams,
    type VoiceStateUpdateSelfParams as VoiceStateUpdateSelfParams,
  };
}

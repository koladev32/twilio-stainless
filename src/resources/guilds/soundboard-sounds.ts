// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SoundboardDefaultSoundsAPI from '../soundboard-default-sounds';
import * as UsersAPI from '../users/users';

export class SoundboardSounds extends APIResource {
  create(
    guildId: string,
    body: SoundboardSoundCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SoundboardDefaultSoundsAPI.SoundboardSoundResponse> {
    return this._client.post(`/guilds/${guildId}/soundboard-sounds`, { body, ...options });
  }

  retrieve(
    guildId: string,
    soundId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SoundboardDefaultSoundsAPI.SoundboardSoundResponse> {
    return this._client.get(`/guilds/${guildId}/soundboard-sounds/${soundId}`, options);
  }

  update(
    guildId: string,
    soundId: string,
    body: SoundboardSoundUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SoundboardDefaultSoundsAPI.SoundboardSoundResponse> {
    return this._client.patch(`/guilds/${guildId}/soundboard-sounds/${soundId}`, { body, ...options });
  }

  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<SoundboardSoundListResponse> {
    return this._client.get(`/guilds/${guildId}/soundboard-sounds`, options);
  }

  delete(guildId: string, soundId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/soundboard-sounds/${soundId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SoundboardSound {
  available: boolean;

  name: string;

  sound_id: string;

  volume: number;

  emoji_id?: string | null;

  emoji_name?: string | null;

  guild_id?: string | null;

  user?: UsersAPI.User | null;
}

export interface SoundboardSoundListResponse {
  items: Array<SoundboardDefaultSoundsAPI.SoundboardSoundResponse>;
}

export interface SoundboardSoundCreateParams {
  name: string;

  sound: string;

  emoji_id?: string | null;

  emoji_name?: string | null;

  volume?: number | null;
}

export interface SoundboardSoundUpdateParams {
  emoji_id?: string | null;

  emoji_name?: string | null;

  name?: string;

  volume?: number | null;
}

export declare namespace SoundboardSounds {
  export {
    type SoundboardSound as SoundboardSound,
    type SoundboardSoundListResponse as SoundboardSoundListResponse,
    type SoundboardSoundCreateParams as SoundboardSoundCreateParams,
    type SoundboardSoundUpdateParams as SoundboardSoundUpdateParams,
  };
}

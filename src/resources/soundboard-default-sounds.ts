// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UsersAPI from './users/users';

export class SoundboardDefaultSounds extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<SoundboardDefaultSoundListResponse> {
    return this._client.get('/soundboard-default-sounds', options);
  }
}

export interface SoundboardSoundResponse {
  available: boolean;

  name: string;

  sound_id: string;

  volume: number;

  emoji_id?: string | null;

  emoji_name?: string | null;

  guild_id?: string | null;

  user?: UsersAPI.User | null;
}

export type SoundboardDefaultSoundListResponse = Array<SoundboardSoundResponse>;

export declare namespace SoundboardDefaultSounds {
  export {
    type SoundboardSoundResponse as SoundboardSoundResponse,
    type SoundboardDefaultSoundListResponse as SoundboardDefaultSoundListResponse,
  };
}

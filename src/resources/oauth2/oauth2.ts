// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ApplicationsAPI from './applications';
import { Applications } from './applications';
import * as KeysAPI from './keys';
import { Keys, Oauth2GetKeys } from './keys';
import * as UsersAPI from '../users/users';

export class Oauth2 extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  retrieve(options?: Core.RequestOptions): Core.APIPromise<Oauth2GetAuthorizationResponse> {
    return this._client.get('/oauth2/@me', options);
  }
}

export interface Oauth2GetAuthorizationResponse {
  application: Oauth2GetAuthorizationResponse.Application;

  expires: string;

  scopes: Array<
    | 'identify'
    | 'email'
    | 'connections'
    | 'guilds'
    | 'guilds.join'
    | 'guilds.members.read'
    | 'gdm.join'
    | 'bot'
    | 'rpc'
    | 'rpc.notifications.read'
    | 'rpc.voice.read'
    | 'rpc.voice.write'
    | 'rpc.video.read'
    | 'rpc.video.write'
    | 'rpc.screenshare.read'
    | 'rpc.screenshare.write'
    | 'rpc.activities.write'
    | 'webhook.incoming'
    | 'messages.read'
    | 'applications.builds.upload'
    | 'applications.builds.read'
    | 'applications.commands'
    | 'applications.commands.permissions.update'
    | 'applications.commands.update'
    | 'applications.store.update'
    | 'applications.entitlements'
    | 'activities.read'
    | 'activities.write'
    | 'activities.invites.write'
    | 'relationships.read'
    | 'voice'
    | 'dm_channels.read'
    | 'role_connections.write'
    | 'openid'
  >;

  user?: UsersAPI.User | null;
}

export namespace Oauth2GetAuthorizationResponse {
  export interface Application {
    id: string;

    description: string;

    flags: number;

    name: string;

    verify_key: string;

    bot?: UsersAPI.User | null;

    bot_public?: boolean | null;

    bot_require_code_grant?: boolean | null;

    cover_image?: string | null;

    custom_install_url?: string | null;

    guild_id?: string | null;

    icon?: string | null;

    install_params?: Application.InstallParams | null;

    integration_types_config?: { [key: string]: Application.IntegrationTypesConfig } | null;

    max_participants?: number | null;

    primary_sku_id?: string | null;

    privacy_policy_url?: string | null;

    rpc_origins?: Array<string | null> | null;

    slug?: string | null;

    tags?: Array<string> | null;

    terms_of_service_url?: string | null;

    type?: 4 | null;
  }

  export namespace Application {
    export interface InstallParams {
      permissions: string;

      scopes: Array<
        | 'identify'
        | 'email'
        | 'connections'
        | 'guilds'
        | 'guilds.join'
        | 'guilds.members.read'
        | 'gdm.join'
        | 'bot'
        | 'rpc'
        | 'rpc.notifications.read'
        | 'rpc.voice.read'
        | 'rpc.voice.write'
        | 'rpc.video.read'
        | 'rpc.video.write'
        | 'rpc.screenshare.read'
        | 'rpc.screenshare.write'
        | 'rpc.activities.write'
        | 'webhook.incoming'
        | 'messages.read'
        | 'applications.builds.upload'
        | 'applications.builds.read'
        | 'applications.commands'
        | 'applications.commands.permissions.update'
        | 'applications.commands.update'
        | 'applications.store.update'
        | 'applications.entitlements'
        | 'activities.read'
        | 'activities.write'
        | 'activities.invites.write'
        | 'relationships.read'
        | 'voice'
        | 'dm_channels.read'
        | 'role_connections.write'
        | 'openid'
      >;
    }

    export interface IntegrationTypesConfig {
      oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
    }

    export namespace IntegrationTypesConfig {
      export interface Oauth2InstallParams {
        permissions: string;

        scopes: Array<
          | 'identify'
          | 'email'
          | 'connections'
          | 'guilds'
          | 'guilds.join'
          | 'guilds.members.read'
          | 'gdm.join'
          | 'bot'
          | 'rpc'
          | 'rpc.notifications.read'
          | 'rpc.voice.read'
          | 'rpc.voice.write'
          | 'rpc.video.read'
          | 'rpc.video.write'
          | 'rpc.screenshare.read'
          | 'rpc.screenshare.write'
          | 'rpc.activities.write'
          | 'webhook.incoming'
          | 'messages.read'
          | 'applications.builds.upload'
          | 'applications.builds.read'
          | 'applications.commands'
          | 'applications.commands.permissions.update'
          | 'applications.commands.update'
          | 'applications.store.update'
          | 'applications.entitlements'
          | 'activities.read'
          | 'activities.write'
          | 'activities.invites.write'
          | 'relationships.read'
          | 'voice'
          | 'dm_channels.read'
          | 'role_connections.write'
          | 'openid'
        >;
      }
    }
  }
}

Oauth2.Applications = Applications;
Oauth2.Keys = Keys;

export declare namespace Oauth2 {
  export { type Oauth2GetAuthorizationResponse as Oauth2GetAuthorizationResponse };

  export { Applications as Applications };

  export { Keys as Keys, type Oauth2GetKeys as Oauth2GetKeys };
}

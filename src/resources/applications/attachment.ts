// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from '../users/users';

export class Attachment extends APIResource {
  create(
    applicationId: string,
    body: AttachmentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActivitiesAttachmentResponse> {
    return this._client.post(
      `/applications/${applicationId}/attachment`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface ActivitiesAttachmentResponse {
  attachment: ActivitiesAttachmentResponse.Attachment;
}

export namespace ActivitiesAttachmentResponse {
  export interface Attachment {
    id: string;

    filename: string;

    proxy_url: string;

    size: number;

    url: string;

    application?: Attachment.Application | null;

    clip_created_at?: string | null;

    clip_participants?: Array<UsersAPI.User> | null;

    content_type?: string | null;

    description?: string | null;

    duration_secs?: number | null;

    ephemeral?: boolean | null;

    height?: number | null;

    title?: string | null;

    waveform?: string | null;

    width?: number | null;
  }

  export namespace Attachment {
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

      integration_types_config?: Record<string, Application.IntegrationTypesConfig> | null;

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
}

export interface AttachmentCreateParams {
  file: string;
}

export declare namespace Attachment {
  export {
    type ActivitiesAttachmentResponse as ActivitiesAttachmentResponse,
    type AttachmentCreateParams as AttachmentCreateParams,
  };
}

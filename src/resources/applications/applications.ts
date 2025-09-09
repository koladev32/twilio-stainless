// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ActivityInstancesAPI from './activity-instances';
import { ActivityInstances, EmbeddedActivityInstance } from './activity-instances';
import * as AttachmentAPI from './attachment';
import { ActivitiesAttachmentResponse, Attachment, AttachmentCreateParams } from './attachment';
import * as EmojisAPI from './emojis';
import {
  EmojiCreateParams,
  EmojiResponse,
  EmojiUpdateParams,
  Emojis,
  ListApplicationEmojisResponse,
} from './emojis';
import * as EntitlementsAPI from './entitlements';
import {
  EntitlementCreateParams,
  EntitlementListParams,
  EntitlementListResponse,
  EntitlementResponse,
  Entitlements,
} from './entitlements';
import * as RoleConnectionsMetadataAPI from './role-connections-metadata';
import {
  RoleConnectionsMetadata,
  RoleConnectionsMetadataUpdateParams,
  RoleConnectionsMetadataUpdateResponse,
} from './role-connections-metadata';
import * as UsersAPI from '../users/users';
import * as CommandsAPI from './commands/commands';
import {
  ApplicationCommandResponse,
  CommandCreateParams,
  CommandListParams,
  CommandListResponse,
  CommandPermissionsResponse,
  CommandUpdateParams,
  CommandUpdateResponse,
  Commands,
} from './commands/commands';
import * as GuildsAPI from './guilds/guilds';
import { Guilds } from './guilds/guilds';
import * as RoleConnectionsAPI from './role-connections/role-connections';
import { RoleConnections } from './role-connections/role-connections';

export class Applications extends APIResource {
  commands: CommandsAPI.Commands = new CommandsAPI.Commands(this._client);
  guilds: GuildsAPI.Guilds = new GuildsAPI.Guilds(this._client);
  roleConnections: RoleConnectionsAPI.RoleConnections = new RoleConnectionsAPI.RoleConnections(this._client);
  roleConnectionsMetadata: RoleConnectionsMetadataAPI.RoleConnectionsMetadata =
    new RoleConnectionsMetadataAPI.RoleConnectionsMetadata(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  activityInstances: ActivityInstancesAPI.ActivityInstances = new ActivityInstancesAPI.ActivityInstances(
    this._client,
  );
  attachment: AttachmentAPI.Attachment = new AttachmentAPI.Attachment(this._client);
  emojis: EmojisAPI.Emojis = new EmojisAPI.Emojis(this._client);

  retrieve(
    applicationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PrivateApplicationResponse> {
    return this._client.get(`/applications/${applicationId}`, options);
  }

  update(
    applicationId: string,
    body: ApplicationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PrivateApplicationResponse> {
    return this._client.patch(`/applications/${applicationId}`, { body, ...options });
  }
}

export interface PrivateApplication {
  id: string;

  approximate_user_install_count: number;

  description: string;

  /**
   * - `0` - inherit guild content filter setting
   * - `1` - interactions will always be scanned
   */
  explicit_content_filter: 0 | 1;

  flags: number;

  name: string;

  owner: UsersAPI.User;

  redirect_uris: Array<string | null>;

  verify_key: string;

  approximate_guild_count?: number | null;

  bot?: UsersAPI.User | null;

  bot_public?: boolean | null;

  bot_require_code_grant?: boolean | null;

  cover_image?: string | null;

  custom_install_url?: string | null;

  guild_id?: string | null;

  icon?: string | null;

  install_params?: PrivateApplication.InstallParams | null;

  integration_types_config?: { [key: string]: PrivateApplication.IntegrationTypesConfig } | null;

  interactions_endpoint_url?: string | null;

  max_participants?: number | null;

  primary_sku_id?: string | null;

  privacy_policy_url?: string | null;

  role_connections_verification_url?: string | null;

  rpc_origins?: Array<string | null> | null;

  slug?: string | null;

  tags?: Array<string> | null;

  team?: PrivateApplication.Team | null;

  terms_of_service_url?: string | null;

  type?: 4 | null;
}

export namespace PrivateApplication {
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

  export interface Team {
    id: string;

    members: Array<Team.Member>;

    name: string;

    owner_user_id: string;

    icon?: string | null;
  }

  export namespace Team {
    export interface Member {
      /**
       * - `1` - User has been invited to the team.
       * - `2` - User has accepted the team invitation.
       */
      membership_state: 1 | 2;

      team_id: string;

      user: UsersAPI.User;
    }
  }
}

export interface ApplicationUpdateParams {
  cover_image?: string | null;

  custom_install_url?: string | null;

  description?: ApplicationUpdateParams.Description | null;

  /**
   * - `0` - inherit guild content filter setting
   * - `1` - interactions will always be scanned
   */
  explicit_content_filter?: 0 | 1 | null;

  flags?: number | null;

  icon?: string | null;

  install_params?: ApplicationUpdateParams.InstallParams | null;

  integration_types_config?: { [key: string]: ApplicationUpdateParams.IntegrationTypesConfig | null } | null;

  interactions_endpoint_url?: string | null;

  max_participants?: number | null;

  role_connections_verification_url?: string | null;

  tags?: Array<string> | null;

  team_id?: string | null;

  type?: 4 | null;
}

export namespace ApplicationUpdateParams {
  export interface Description {
    default: string;

    localizations?: { [key: string]: string } | null;
  }

  export interface InstallParams {
    permissions?: number | null;

    scopes?: Array<
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
    > | null;
  }

  export interface IntegrationTypesConfig {
    oauth2_install_params?: IntegrationTypesConfig.Oauth2InstallParams | null;
  }

  export namespace IntegrationTypesConfig {
    export interface Oauth2InstallParams {
      permissions?: number | null;

      scopes?: Array<
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
      > | null;
    }
  }
}

Applications.Commands = Commands;
Applications.Guilds = Guilds;
Applications.RoleConnections = RoleConnections;
Applications.RoleConnectionsMetadata = RoleConnectionsMetadata;
Applications.Entitlements = Entitlements;
Applications.ActivityInstances = ActivityInstances;
Applications.Attachment = Attachment;
Applications.Emojis = Emojis;

export declare namespace Applications {
  export {
    type PrivateApplication as PrivateApplication,
    type ApplicationUpdateParams as ApplicationUpdateParams,
  };

  export {
    Commands as Commands,
    type ApplicationCommandResponse as ApplicationCommandResponse,
    type CommandPermissionsResponse as CommandPermissionsResponse,
    type CommandUpdateResponse as CommandUpdateResponse,
    type CommandListResponse as CommandListResponse,
    type CommandCreateParams as CommandCreateParams,
    type CommandUpdateParams as CommandUpdateParams,
    type CommandListParams as CommandListParams,
  };

  export { Guilds as Guilds };

  export { RoleConnections as RoleConnections };

  export {
    RoleConnectionsMetadata as RoleConnectionsMetadata,
    type RoleConnectionsMetadataUpdateResponse as RoleConnectionsMetadataUpdateResponse,
    type RoleConnectionsMetadataUpdateParams as RoleConnectionsMetadataUpdateParams,
  };

  export {
    Entitlements as Entitlements,
    type EntitlementResponse as EntitlementResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementListParams as EntitlementListParams,
  };

  export {
    ActivityInstances as ActivityInstances,
    type EmbeddedActivityInstance as EmbeddedActivityInstance,
  };

  export {
    Attachment as Attachment,
    type ActivitiesAttachmentResponse as ActivitiesAttachmentResponse,
    type AttachmentCreateParams as AttachmentCreateParams,
  };

  export {
    Emojis as Emojis,
    type EmojiResponse as EmojiResponse,
    type ListApplicationEmojisResponse as ListApplicationEmojisResponse,
    type EmojiCreateParams as EmojiCreateParams,
    type EmojiUpdateParams as EmojiUpdateParams,
  };
}

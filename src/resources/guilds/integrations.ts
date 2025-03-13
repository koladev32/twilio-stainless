// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as IntegrationsAPI from './integrations';
import * as UsersAPI from '../users/users';

export class Integrations extends APIResource {
  list(guildId: string, options?: Core.RequestOptions): Core.APIPromise<IntegrationListResponse | null> {
    return this._client.get(`/guilds/${guildId}/integrations`, options);
  }

  delete(guildId: string, integrationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/guilds/${guildId}/integrations/${integrationId}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export type IntegrationListResponse = Array<IntegrationListResponse.DiscordIntegrationResponse | IntegrationListResponse.ExternalConnectionIntegrationResponse | IntegrationListResponse.GuildSubscriptionIntegrationResponse>

export namespace IntegrationListResponse {
  export interface DiscordIntegrationResponse {
    id: string;

    application: DiscordIntegrationResponse.Application;

    scopes: Array<'identify' | 'email' | 'connections' | 'guilds' | 'guilds.join' | 'guilds.members.read' | 'gdm.join' | 'bot' | 'rpc' | 'rpc.notifications.read' | 'rpc.voice.read' | 'rpc.voice.write' | 'rpc.video.read' | 'rpc.video.write' | 'rpc.screenshare.read' | 'rpc.screenshare.write' | 'rpc.activities.write' | 'webhook.incoming' | 'messages.read' | 'applications.builds.upload' | 'applications.builds.read' | 'applications.commands' | 'applications.commands.permissions.update' | 'applications.commands.update' | 'applications.store.update' | 'applications.entitlements' | 'activities.read' | 'activities.write' | 'activities.invites.write' | 'relationships.read' | 'voice' | 'dm_channels.read' | 'role_connections.write' | 'openid'>;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';

    account?: DiscordIntegrationResponse.Account | null;

    enabled?: boolean | null;

    name?: string | null;

    user?: UsersAPI.User | null;
  }

  export namespace DiscordIntegrationResponse {
    export interface Application {
      id: string;

      description: string;

      name: string;

      bot?: UsersAPI.User | null;

      cover_image?: string | null;

      icon?: string | null;

      primary_sku_id?: string | null;

      type?: 4 | null;
    }

    export interface Account {
      id: string;

      name?: string | null;
    }
  }

  export interface ExternalConnectionIntegrationResponse {
    id: string;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';

    user: UsersAPI.User;

    account?: ExternalConnectionIntegrationResponse.Account | null;

    enable_emoticons?: boolean | null;

    enabled?: boolean | null;

    /**
     * - `0` - Remove role
     * - `1` - Kick
     */
    expire_behavior?: 0 | 1 | null;

    /**
     * - `1` - 1 day
     * - `3` - 3 days
     * - `7` - 7 days
     * - `14` - 14 days
     * - `30` - 30 days
     */
    expire_grace_period?: 1 | 3 | 7 | 14 | 30 | null;

    name?: string | null;

    revoked?: boolean | null;

    role_id?: string | null;

    subscriber_count?: number | null;

    synced_at?: string | null;

    syncing?: boolean | null;
  }

  export namespace ExternalConnectionIntegrationResponse {
    export interface Account {
      id: string;

      name?: string | null;
    }
  }

  export interface GuildSubscriptionIntegrationResponse {
    id: string;

    type: 'discord' | 'twitch' | 'youtube' | 'guild_subscription';

    account?: GuildSubscriptionIntegrationResponse.Account | null;

    enabled?: boolean | null;

    name?: string | null;
  }

  export namespace GuildSubscriptionIntegrationResponse {
    export interface Account {
      id: string;

      name?: string | null;
    }
  }
}

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse
  };
}

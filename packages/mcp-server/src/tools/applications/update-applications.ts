// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/applications/{application_id}',
  operationId: 'update_application',
};

export const tool: Tool = {
  name: 'update_applications',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      cover_image: {
        type: 'string',
      },
      custom_install_url: {
        type: 'string',
      },
      description: {
        type: 'object',
        properties: {
          default: {
            type: 'string',
          },
          localizations: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['default'],
      },
      explicit_content_filter: {
        type: 'string',
        description:
          '- `0` - inherit guild content filter setting\n- `1` - interactions will always be scanned',
        enum: [0, 1],
      },
      flags: {
        type: 'integer',
      },
      icon: {
        type: 'string',
      },
      install_params: {
        type: 'object',
        properties: {
          permissions: {
            type: 'integer',
          },
          scopes: {
            type: 'array',
            items: {
              type: 'string',
              description:
                "- `identify` - allows /users/@me without email\n- `email` - enables /users/@me to return an email\n- `connections` - allows /users/@me/connections to return linked third-party accounts\n- `guilds` - allows /users/@me/guilds to return basic information about all of a user's guilds\n- `guilds.join` - allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild\n- `guilds.members.read` - allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild\n- `gdm.join` - allows your app to join users to a group dm\n- `bot` - for oauth2 bots, this puts the bot in the user's selected guild by default\n- `rpc` - for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval\n- `rpc.notifications.read` - for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval\n- `rpc.voice.read` - for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval\n- `rpc.voice.write` - for local rpc server access, this allows you to update a user's voice settings - requires Discord approval\n- `rpc.video.read` - for local rpc server access, this allows you to read a user's video status - requires Discord approval\n- `rpc.video.write` - for local rpc server access, this allows you to update a user's video settings - requires Discord approval\n- `rpc.screenshare.read` - for local rpc server access, this allows you to read a user's screenshare status- requires Discord approval\n- `rpc.screenshare.write` - for local rpc server access, this allows you to update a user's screenshare settings- requires Discord approval\n- `rpc.activities.write` - for local rpc server access, this allows you to update a user's activity - requires Discord approval\n- `webhook.incoming` - this generates a webhook that is returned in the oauth token response for authorization code grants\n- `messages.read` - for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)\n- `applications.builds.upload` - allows your app to upload/update builds for a user's applications - requires Discord approval\n- `applications.builds.read` - allows your app to read build data for a user's applications\n- `applications.commands` - allows your app to use commands in a guild\n- `applications.commands.permissions.update` - allows your app to update permissions for its commands in a guild a user has permissions to\n- `applications.commands.update` - allows your app to update its commands using a Bearer token - client credentials grant only\n- `applications.store.update` - allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications\n- `applications.entitlements` - allows your app to read entitlements for a user's applications\n- `activities.read` - allows your app to fetch data from a user's \"Now Playing/Recently Played\" list - requires Discord approval\n- `activities.write` - allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)\n- `activities.invites.write` - allows your app to send activity invites - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)\n- `relationships.read` - allows your app to know a user's friends and implicit relationships - requires Discord approval\n- `voice` - allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval\n- `dm_channels.read` - allows your app to see information about the user's DMs and group DMs - requires Discord approval\n- `role_connections.write` - allows your app to update a user's connection and metadata for the app\n- `openid` - for OpenID Connect, this allows your app to receive user id and basic profile information",
              enum: [
                'identify',
                'email',
                'connections',
                'guilds',
                'guilds.join',
                'guilds.members.read',
                'gdm.join',
                'bot',
                'rpc',
                'rpc.notifications.read',
                'rpc.voice.read',
                'rpc.voice.write',
                'rpc.video.read',
                'rpc.video.write',
                'rpc.screenshare.read',
                'rpc.screenshare.write',
                'rpc.activities.write',
                'webhook.incoming',
                'messages.read',
                'applications.builds.upload',
                'applications.builds.read',
                'applications.commands',
                'applications.commands.permissions.update',
                'applications.commands.update',
                'applications.store.update',
                'applications.entitlements',
                'activities.read',
                'activities.write',
                'activities.invites.write',
                'relationships.read',
                'voice',
                'dm_channels.read',
                'role_connections.write',
                'openid',
              ],
            },
          },
        },
      },
      integration_types_config: {
        type: 'object',
        additionalProperties: true,
      },
      interactions_endpoint_url: {
        type: 'string',
      },
      max_participants: {
        type: 'integer',
      },
      role_connections_verification_url: {
        type: 'string',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      team_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: [4],
      },
    },
    required: ['application_id'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, ...body } = args as any;
  return asTextContentResult(await client.applications.update(application_id, body));
};

export default { metadata, tool, handler };

# Discord API Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export BOT_TOKEN="My Bot Token"
export CLIENT_ID="My Client ID"
export CLIENT_SECRET="My Client Secret"
npx -y discord-api-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "discord_api_api": {
      "command": "npx",
      "args": ["-y", "discord-api-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "BOT_TOKEN": "My Bot Token",
        "CLIENT_ID": "My Client ID",
        "CLIENT_SECRET": "My Client Secret"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------- | ------------------------ | --------------- |
| `x-bot-token` | `botToken` | BotToken |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "discord_api_api": {
      "url": "http://localhost:3000",
      "headers": {
        "x-bot-token": "My Bot Token"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "discord-api-mcp/server";

// import a specific tool
import retrieveOauth2 from "discord-api-mcp/tools/oauth2/retrieve-oauth2";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveOauth2, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `oauth2`:

- `retrieve_oauth2` (`read`):

### Resource `oauth2.applications`:

- `retrieve_oauth2_applications` (`read`):

### Resource `oauth2.keys`:

- `list_oauth2_keys` (`read`):

### Resource `users`:

- `retrieve_users` (`read`):
- `retrieve_me_users` (`read`):
- `update_me_users` (`write`):

### Resource `users.connections`:

- `list_users_connections` (`read`):

### Resource `users.channels`:

- `create_users_channels` (`write`):

### Resource `users.guilds`:

- `list_users_guilds` (`read`):
- `delete_users_guilds` (`write`):

### Resource `users.guilds.member`:

- `retrieve_guilds_users_member` (`read`):

### Resource `users.applications.role_connections`:

- `retrieve_applications_users_role_connections` (`read`):
- `update_applications_users_role_connections` (`write`):
- `remove_applications_users_role_connections` (`write`):

### Resource `applications`:

- `retrieve_applications` (`read`):
- `update_applications` (`write`):

### Resource `applications.commands`:

- `create_applications_commands` (`write`):
- `retrieve_applications_commands` (`read`):
- `update_applications_commands` (`write`):
- `list_applications_commands` (`read`):
- `delete_applications_commands` (`write`):

### Resource `applications.commands.permissions`:

- `list_permissions_commands_applications_permissions` (`read`):
- `retrieve_permissions_commands_applications_permissions` (`read`):

### Resource `applications.guilds.commands`:

- `create_guilds_applications_commands` (`write`):
- `retrieve_guilds_applications_commands` (`read`):
- `update_guilds_applications_commands` (`write`):
- `list_guilds_applications_commands` (`read`):
- `delete_guilds_applications_commands` (`write`):
- `put_guilds_applications_commands` (`write`):

### Resource `applications.guilds.commands.permissions`:

- `update_commands_guilds_applications_permissions` (`write`):

### Resource `applications.role_connections.metadata`:

- `list_role_connections_applications_metadata` (`read`):

### Resource `applications.role_connections_metadata`:

- `update_applications_role_connections_metadata` (`write`):

### Resource `applications.entitlements`:

- `create_applications_entitlements` (`write`):
- `retrieve_applications_entitlements` (`read`):
- `list_applications_entitlements` (`read`):
- `delete_applications_entitlements` (`write`):
- `consume_applications_entitlements` (`write`):

### Resource `applications.activity_instances`:

- `retrieve_applications_activity_instances` (`read`):

### Resource `applications.attachment`:

- `create_applications_attachment` (`write`):

### Resource `applications.emojis`:

- `create_applications_emojis` (`write`):
- `retrieve_applications_emojis` (`read`):
- `update_applications_emojis` (`write`):
- `list_applications_emojis` (`read`):
- `delete_applications_emojis` (`write`):

### Resource `gateway`:

- `retrieve_gateway` (`read`):

### Resource `gateway.bot`:

- `retrieve_gateway_bot` (`read`):

### Resource `voice.regions`:

- `list_voice_regions` (`read`):

### Resource `soundboard_default_sounds`:

- `list_soundboard_default_sounds` (`read`):

### Resource `stage_instances`:

- `create_stage_instances` (`write`):
- `retrieve_stage_instances` (`read`):
- `update_stage_instances` (`write`):
- `delete_stage_instances` (`write`):

### Resource `sticker_packs`:

- `retrieve_sticker_packs` (`read`):
- `list_sticker_packs` (`read`):

### Resource `guilds`:

- `create_guilds` (`write`):
- `retrieve_guilds` (`read`):
- `update_guilds` (`write`):
- `delete_guilds` (`write`):
- `bulk_ban_guilds` (`write`):
- `mfa_guilds` (`write`):

### Resource `guilds.scheduled_events`:

- `create_guilds_scheduled_events` (`write`):
- `retrieve_guilds_scheduled_events` (`read`):
- `update_guilds_scheduled_events` (`write`):
- `list_guilds_scheduled_events` (`read`):
- `delete_guilds_scheduled_events` (`write`):

### Resource `guilds.scheduled_events.users`:

- `list_scheduled_events_guilds_users` (`read`):

### Resource `guilds.auto_moderation.rules`:

- `create_auto_moderation_guilds_rules` (`write`):
- `retrieve_auto_moderation_guilds_rules` (`read`):
- `update_auto_moderation_guilds_rules` (`write`):
- `list_auto_moderation_guilds_rules` (`read`):
- `delete_auto_moderation_guilds_rules` (`write`):

### Resource `guilds.voice_states`:

- `retrieve_guilds_voice_states` (`read`):
- `update_guilds_voice_states` (`write`):
- `retrieve_self_guilds_voice_states` (`read`):
- `update_self_guilds_voice_states` (`write`):

### Resource `guilds.members`:

- `retrieve_guilds_members` (`read`):
- `update_guilds_members` (`write`):
- `list_guilds_members` (`read`):
- `delete_guilds_members` (`write`):
- `search_guilds_members` (`read`):

### Resource `guilds.members.roles`:

- `update_members_guilds_roles` (`write`):
- `delete_members_guilds_roles` (`write`):

### Resource `guilds.threads`:

- `active_guilds_threads` (`read`):

### Resource `guilds.templates`:

- `create_guilds_templates` (`write`):
- `retrieve_guilds_templates` (`read`):
- `update_guilds_templates` (`write`):
- `list_guilds_templates` (`read`):
- `delete_guilds_templates` (`write`):

### Resource `guilds.new_member_welcome`:

- `retrieve_guilds_new_member_welcome` (`read`):

### Resource `guilds.soundboard_sounds`:

- `create_guilds_soundboard_sounds` (`write`):
- `retrieve_guilds_soundboard_sounds` (`read`):
- `update_guilds_soundboard_sounds` (`write`):
- `list_guilds_soundboard_sounds` (`read`):
- `delete_guilds_soundboard_sounds` (`write`):

### Resource `guilds.welcome_screen`:

- `retrieve_guilds_welcome_screen` (`read`):
- `update_guilds_welcome_screen` (`write`):

### Resource `guilds.integrations`:

- `list_guilds_integrations` (`read`):
- `delete_guilds_integrations` (`write`):

### Resource `guilds.widgets`:

- `retrieve_json_guilds_widgets` (`read`):
- `retrieve_png_guilds_widgets` (`read`):

### Resource `guilds.onboarding`:

- `retrieve_guilds_onboarding` (`read`):
- `update_guilds_onboarding` (`write`):

### Resource `guilds.vanity_urls`:

- `retrieve_guilds_vanity_urls` (`read`):

### Resource `guilds.audit_logs`:

- `retrieve_guilds_audit_logs` (`read`):

### Resource `guilds.stickers`:

- `create_guilds_stickers` (`write`):
- `retrieve_guilds_stickers` (`read`):
- `update_guilds_stickers` (`write`):
- `list_guilds_stickers` (`read`):
- `delete_guilds_stickers` (`write`):

### Resource `guilds.webhooks`:

- `list_guilds_webhooks` (`read`):

### Resource `guilds.channels`:

- `create_guilds_channels` (`write`):
- `update_guilds_channels` (`write`):
- `list_guilds_channels` (`read`):

### Resource `guilds.preview`:

- `retrieve_guilds_preview` (`read`):

### Resource `guilds.invites`:

- `list_guilds_invites` (`read`):

### Resource `guilds.regions`:

- `list_guilds_regions` (`read`):

### Resource `guilds.emojis`:

- `create_guilds_emojis` (`write`):
- `retrieve_guilds_emojis` (`read`):
- `update_guilds_emojis` (`write`):
- `list_guilds_emojis` (`read`):
- `delete_guilds_emojis` (`write`):

### Resource `guilds.widget`:

- `retrieve_guilds_widget` (`read`):
- `update_guilds_widget` (`write`):

### Resource `guilds.roles`:

- `create_guilds_roles` (`write`):
- `retrieve_guilds_roles` (`read`):
- `update_guilds_roles` (`write`):
- `list_guilds_roles` (`read`):
- `delete_guilds_roles` (`write`):

### Resource `guilds.prune`:

- `retrieve_guilds_prune` (`read`):

### Resource `guilds.bans`:

- `retrieve_guilds_bans` (`read`):
- `update_guilds_bans` (`write`):
- `list_guilds_bans` (`read`):
- `delete_guilds_bans` (`write`):

### Resource `channels`:

- `retrieve_channels` (`read`):
- `update_channels` (`write`):
- `delete_channels` (`write`):
- `send_soundboard_sound_channels` (`write`):
- `typing_channels` (`write`):

### Resource `channels.users.threads.archived.private`:

- `list_archived_threads_users_channels_private` (`read`):

### Resource `channels.messages`:

- `create_channels_messages` (`write`):
- `retrieve_channels_messages` (`read`):
- `update_channels_messages` (`write`):
- `list_channels_messages` (`read`):
- `delete_channels_messages` (`write`):
- `bulk_delete_channels_messages` (`write`):
- `crosspost_channels_messages` (`write`):

### Resource `channels.messages.reactions`:

- `add_messages_channels_reactions` (`write`):
- `clear_messages_channels_reactions` (`write`):
- `remove_messages_channels_reactions` (`write`):
- `remove_emoji_messages_channels_reactions` (`write`):
- `remove_for_user_messages_channels_reactions` (`write`):
- `retrieve_all_messages_channels_reactions` (`read`):

### Resource `channels.messages.threads`:

- `create_messages_channels_threads` (`write`):

### Resource `channels.threads`:

- `create_channels_threads` (`write`):

### Resource `channels.threads.archived.private`:

- `list_archived_threads_channels_private` (`read`):

### Resource `channels.threads.archived.public`:

- `list_archived_threads_channels_public` (`read`):

### Resource `channels.thread_members`:

- `retrieve_channels_thread_members` (`read`):
- `update_channels_thread_members` (`write`):
- `list_channels_thread_members` (`read`):
- `delete_channels_thread_members` (`write`):

### Resource `channels.thread_members.me`:

- `delete_thread_members_channels_me` (`write`):
- `put_thread_members_channels_me` (`write`):

### Resource `channels.polls`:

- `expire_channels_polls` (`write`):

### Resource `channels.polls.answers`:

- `retrieve_polls_channels_answers` (`read`):

### Resource `channels.permissions`:

- `update_channels_permissions` (`write`):
- `delete_channels_permissions` (`write`):

### Resource `channels.recipients`:

- `update_channels_recipients` (`write`):
- `delete_channels_recipients` (`write`):

### Resource `channels.followers`:

- `create_channels_followers` (`write`):

### Resource `channels.webhooks`:

- `create_channels_webhooks` (`write`):
- `list_channels_webhooks` (`read`):

### Resource `channels.invites`:

- `create_channels_invites` (`write`):
- `list_channels_invites` (`read`):

### Resource `channels.pins`:

- `update_channels_pins` (`write`):
- `list_channels_pins` (`read`):
- `delete_channels_pins` (`write`):

### Resource `webhooks`:

- `create_webhooks` (`write`):
- `retrieve_webhooks` (`read`):
- `update_webhooks` (`write`):
- `delete_webhooks` (`write`):
- `token_update_webhooks` (`write`):

### Resource `webhooks.messages`:

- `retrieve_webhooks_messages` (`read`):
- `update_webhooks_messages` (`write`):
- `delete_webhooks_messages` (`write`):
- `delete_original_webhooks_messages` (`write`):
- `retrieve_original_webhooks_messages` (`read`):
- `update_original_webhooks_messages` (`write`):

### Resource `webhooks.github`:

- `create_webhooks_github` (`write`):

### Resource `webhooks.slack`:

- `create_webhooks_slack` (`write`):

### Resource `interactions`:

- `callback_interactions` (`write`):

### Resource `stickers`:

- `retrieve_stickers` (`read`):

### Resource `invites`:

- `retrieve_invites` (`read`):
- `delete_invites` (`write`):

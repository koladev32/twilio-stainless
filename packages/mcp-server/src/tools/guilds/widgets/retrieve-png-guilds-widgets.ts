// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'guilds.widgets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/guilds/{guild_id}/widget.png',
  operationId: 'get_guild_widget_png',
};

export const tool: Tool = {
  name: 'retrieve_png_guilds_widgets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      guild_id: {
        type: 'string',
      },
      style: {
        type: 'string',
        description:
          '- `shield` - shield style widget with Discord icon and guild members online count\n- `banner1` - large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget\n- `banner2` - smaller widget style with guild icon, name and online count. Split on the right with Discord logo\n- `banner3` - large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right\n- `banner4` - large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom',
        enum: ['shield', 'banner1', 'banner2', 'banner3', 'banner4'],
      },
    },
    required: ['guild_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { guild_id, ...body } = args as any;
  return asBinaryContentResult(await client.guilds.widgets.retrievePng(guild_id, body));
};

export default { metadata, tool, handler };

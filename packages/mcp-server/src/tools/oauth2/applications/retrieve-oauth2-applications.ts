// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'oauth2.applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth2/applications/@me',
  operationId: 'get_my_oauth2_application',
};

export const tool: Tool = {
  name: 'retrieve_oauth2_applications',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.oauth2.applications.retrieve());
};

export default { metadata, tool, handler };

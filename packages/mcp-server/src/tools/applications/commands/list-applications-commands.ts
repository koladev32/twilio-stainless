// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/applications/{application_id}/commands',
  operationId: 'list_application_commands',
};

export const tool: Tool = {
  name: 'list_applications_commands',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      with_localizations: {
        type: 'boolean',
      },
    },
    required: ['application_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, ...body } = args as any;
  return asTextContentResult(await client.applications.commands.list(application_id, body));
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.attachment',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/applications/{application_id}/attachment',
  operationId: 'upload_application_attachment',
};

export const tool: Tool = {
  name: 'create_applications_attachment',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      file: {
        type: 'string',
      },
    },
    required: ['application_id', 'file'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, ...body } = args as any;
  return asTextContentResult(await client.applications.attachment.create(application_id, body));
};

export default { metadata, tool, handler };

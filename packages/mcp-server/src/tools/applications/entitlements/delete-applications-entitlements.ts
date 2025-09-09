// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'applications.entitlements',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/applications/{application_id}/entitlements/{entitlement_id}',
  operationId: 'delete_entitlement',
};

export const tool: Tool = {
  name: 'delete_applications_entitlements',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      application_id: {
        type: 'string',
      },
      entitlement_id: {
        type: 'string',
      },
    },
    required: ['application_id', 'entitlement_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { application_id, entitlement_id, ...body } = args as any;
  const response = await client.applications.entitlements.delete(application_id, entitlement_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discord-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscordAPI from 'discord-api';

export const metadata: Metadata = {
  resource: 'webhooks.github',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/webhooks/{webhook_id}/{webhook_token}/github',
  operationId: 'execute_github_compatible_webhook',
};

export const tool: Tool = {
  name: 'create_webhooks_github',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      webhook_id: {
        type: 'string',
      },
      webhook_token: {
        type: 'string',
      },
      sender: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          avatar_url: {
            type: 'string',
          },
          html_url: {
            type: 'string',
          },
          login: {
            type: 'string',
          },
        },
        required: ['id', 'avatar_url', 'html_url', 'login'],
      },
      thread_id: {
        type: 'string',
      },
      wait: {
        type: 'boolean',
      },
      action: {
        type: 'string',
      },
      answer: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          body: {
            type: 'string',
          },
          html_url: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          commit_id: {
            type: 'string',
          },
        },
        required: ['id', 'body', 'html_url', 'user'],
      },
      check_run: {
        type: 'object',
        properties: {
          check_suite: {
            type: 'object',
            properties: {
              app: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                },
                required: ['name'],
              },
              head_sha: {
                type: 'string',
              },
              conclusion: {
                type: 'string',
              },
              head_branch: {
                type: 'string',
              },
              pull_requests: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'integer',
                    },
                  },
                  required: ['number'],
                },
              },
            },
            required: ['app', 'head_sha'],
          },
          html_url: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          conclusion: {
            type: 'string',
          },
          details_url: {
            type: 'string',
          },
          output: {
            type: 'object',
            properties: {
              summary: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
            },
          },
          pull_requests: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                number: {
                  type: 'integer',
                },
              },
              required: ['number'],
            },
          },
        },
        required: ['check_suite', 'html_url', 'name'],
      },
      check_suite: {
        type: 'object',
        properties: {
          app: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
            },
            required: ['name'],
          },
          head_sha: {
            type: 'string',
          },
          conclusion: {
            type: 'string',
          },
          head_branch: {
            type: 'string',
          },
          pull_requests: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                number: {
                  type: 'integer',
                },
              },
              required: ['number'],
            },
          },
        },
        required: ['app', 'head_sha'],
      },
      comment: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          body: {
            type: 'string',
          },
          html_url: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          commit_id: {
            type: 'string',
          },
        },
        required: ['id', 'body', 'html_url', 'user'],
      },
      commits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            author: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                username: {
                  type: 'string',
                },
              },
              required: ['name'],
            },
            message: {
              type: 'string',
            },
            url: {
              type: 'string',
            },
          },
          required: ['id', 'author', 'message', 'url'],
        },
      },
      compare: {
        type: 'string',
      },
      discussion: {
        type: 'object',
        properties: {
          html_url: {
            type: 'string',
          },
          number: {
            type: 'integer',
          },
          title: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          answer_html_url: {
            type: 'string',
          },
          body: {
            type: 'string',
          },
        },
        required: ['html_url', 'number', 'title', 'user'],
      },
      forced: {
        type: 'boolean',
      },
      forkee: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          full_name: {
            type: 'string',
          },
          html_url: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        required: ['id', 'full_name', 'html_url', 'name'],
      },
      head_commit: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          author: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              username: {
                type: 'string',
              },
            },
            required: ['name'],
          },
          message: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
        },
        required: ['id', 'author', 'message', 'url'],
      },
      issue: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          html_url: {
            type: 'string',
          },
          number: {
            type: 'integer',
          },
          title: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          body: {
            type: 'string',
          },
          pull_request: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['id', 'html_url', 'number', 'title', 'user'],
      },
      member: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          avatar_url: {
            type: 'string',
          },
          html_url: {
            type: 'string',
          },
          login: {
            type: 'string',
          },
        },
        required: ['id', 'avatar_url', 'html_url', 'login'],
      },
      pull_request: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          html_url: {
            type: 'string',
          },
          number: {
            type: 'integer',
          },
          title: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          body: {
            type: 'string',
          },
          pull_request: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['id', 'html_url', 'number', 'title', 'user'],
      },
      ref: {
        type: 'string',
      },
      ref_type: {
        type: 'string',
      },
      release: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          author: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          html_url: {
            type: 'string',
          },
          tag_name: {
            type: 'string',
          },
        },
        required: ['id', 'author', 'html_url', 'tag_name'],
      },
      repository: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          full_name: {
            type: 'string',
          },
          html_url: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        required: ['id', 'full_name', 'html_url', 'name'],
      },
      review: {
        type: 'object',
        properties: {
          html_url: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              avatar_url: {
                type: 'string',
              },
              html_url: {
                type: 'string',
              },
              login: {
                type: 'string',
              },
            },
            required: ['id', 'avatar_url', 'html_url', 'login'],
          },
          body: {
            type: 'string',
          },
        },
        required: ['html_url', 'state', 'user'],
      },
    },
    required: ['webhook_id', 'webhook_token', 'sender'],
  },
  annotations: {},
};

export const handler = async (client: DiscordAPI, args: Record<string, unknown> | undefined) => {
  const { webhook_id, webhook_token, ...body } = args as any;
  const response = await client.webhooks.github.create(webhook_id, webhook_token, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

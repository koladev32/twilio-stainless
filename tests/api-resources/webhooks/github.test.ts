// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({
  botToken: 'My Bot Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource github', () => {
  test('create: only required params', async () => {
    const responsePromise = client.webhooks.github.create('891', 'webhook_token', {
      sender: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.webhooks.github.create('891', 'webhook_token', {
      sender: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
      thread_id: '891',
      wait: true,
      action: 'action',
      answer: {
        id: 0,
        body: 'body',
        html_url: 'https://example.com',
        user: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        commit_id: 'commit_id',
      },
      check_run: {
        check_suite: {
          app: { name: 'name' },
          head_sha: 'head_sha',
          conclusion: 'conclusion',
          head_branch: 'head_branch',
          pull_requests: [{ number: 0 }],
        },
        html_url: 'https://example.com',
        name: 'name',
        conclusion: 'conclusion',
        details_url: 'https://example.com',
        output: { summary: 'summary', title: 'title' },
        pull_requests: [{ number: 0 }],
      },
      check_suite: {
        app: { name: 'name' },
        head_sha: 'head_sha',
        conclusion: 'conclusion',
        head_branch: 'head_branch',
        pull_requests: [{ number: 0 }],
      },
      comment: {
        id: 0,
        body: 'body',
        html_url: 'https://example.com',
        user: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        commit_id: 'commit_id',
      },
      commits: [
        {
          id: 'id',
          author: { name: 'name', username: 'username' },
          message: 'message',
          url: 'https://example.com',
        },
      ],
      compare: 'https://example.com',
      discussion: {
        html_url: 'https://example.com',
        number: 0,
        title: 'title',
        user: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        answer_html_url: 'https://example.com',
        body: 'body',
      },
      forced: true,
      forkee: { id: 0, full_name: 'full_name', html_url: 'https://example.com', name: 'name' },
      head_commit: {
        id: 'id',
        author: { name: 'name', username: 'username' },
        message: 'message',
        url: 'https://example.com',
      },
      issue: {
        id: 0,
        html_url: 'https://example.com',
        number: 0,
        title: 'title',
        user: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        body: 'body',
        pull_request: {},
      },
      member: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
      pull_request: {
        id: 0,
        html_url: 'https://example.com',
        number: 0,
        title: 'title',
        user: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        body: 'body',
        pull_request: {},
      },
      ref: 'ref',
      ref_type: 'ref_type',
      release: {
        id: 0,
        author: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        html_url: 'https://example.com',
        tag_name: 'tag_name',
      },
      repository: { id: 0, full_name: 'full_name', html_url: 'https://example.com', name: 'name' },
      review: {
        html_url: 'https://example.com',
        state: 'state',
        user: { id: 0, avatar_url: 'https://example.com', html_url: 'https://example.com', login: 'login' },
        body: 'body',
      },
    });
  });
});

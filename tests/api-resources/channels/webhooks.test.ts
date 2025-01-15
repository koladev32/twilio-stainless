// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({
  botToken: 'My Bot Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.channels.webhooks.create('891', { name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.channels.webhooks.create('891', { name: 'x', avatar: 'avatar' });
  });

  test('list', async () => {
    const responsePromise = client.channels.webhooks.list('891');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.channels.webhooks.list('891', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      DiscordAPI.NotFoundError,
    );
  });
});

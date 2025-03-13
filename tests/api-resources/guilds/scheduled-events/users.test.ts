// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI, { toFile } from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({ botToken: 'My Bot Token', clientId: 'My Client ID', clientSecret: 'My Client Secret', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource users', () => {
  test('list', async () => {
    const responsePromise = client.guilds.scheduledEvents.users.list('891', '891');
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
    await expect(client.guilds.scheduledEvents.users.list('891', '891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.guilds.scheduledEvents.users.list('891', '891', { after: '891', before: '891', limit: 1, with_member: true }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });
});

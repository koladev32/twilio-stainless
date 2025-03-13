// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI, { toFile } from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({ botToken: 'My Bot Token', clientId: 'My Client ID', clientSecret: 'My Client Secret', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource interactions', () => {
  test('callback: only required params', async () => {
    const responsePromise = client.interactions.callback('891', 'interaction_token', { data: {}, type: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('callback: required and optional params', async () => {
    const response = await client.interactions.callback('891', 'interaction_token', { data: { choices: [{ name: 'x', value: -9007199254740991, name_localizations: { foo: 'x' } }] }, type: 1, with_response: true });
  });
});

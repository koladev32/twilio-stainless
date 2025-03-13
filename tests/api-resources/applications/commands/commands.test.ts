// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({
  botToken: 'My Bot Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commands', () => {
  test('create: only required params', async () => {
    const responsePromise = client.applications.commands.create('891', { name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.applications.commands.create('891', {
      name: 'x',
      contexts: [0],
      default_member_permissions: 0,
      description: 'description',
      description_localizations: { foo: 'x' },
      dm_permission: true,
      handler: 0,
      integration_types: [0],
      name_localizations: { foo: 'x' },
      options: [
        {
          description: 'x',
          name: 'x',
          type: 1,
          description_localizations: { foo: 'x' },
          name_localizations: { foo: 'x' },
          required: true,
        },
      ],
      type: 1,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.applications.commands.retrieve('891', '891');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.commands.retrieve('891', '891', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.applications.commands.update('891', [{ name: 'x' }]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.applications.commands.update('891', [
      {
        name: 'x',
        id: '891',
        contexts: [0],
        default_member_permissions: 0,
        description: 'description',
        description_localizations: { foo: 'x' },
        dm_permission: true,
        handler: 0,
        integration_types: [0],
        name_localizations: { foo: 'x' },
        options: [
          {
            description: 'x',
            name: 'x',
            type: 1,
            description_localizations: { foo: 'x' },
            name_localizations: { foo: 'x' },
            required: true,
          },
        ],
        type: 1,
      },
    ]);
  });

  test('list', async () => {
    const responsePromise = client.applications.commands.list('891');
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
    await expect(
      client.applications.commands.list('891', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.commands.list(
        '891',
        { with_localizations: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.applications.commands.delete('891', '891');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.commands.delete('891', '891', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });
});

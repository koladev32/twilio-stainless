// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({
  botToken: 'My Bot Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  test('retrieve', async () => {
    const responsePromise = client.guilds.members.retrieve('891', '891');
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
      client.guilds.members.retrieve('891', '891', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.guilds.members.update('891', '891', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.guilds.members.list('891');
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
    await expect(client.guilds.members.list('891', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      DiscordAPI.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.guilds.members.list('891', { after: 0, limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.guilds.members.delete('891', '891');
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
      client.guilds.members.delete('891', '891', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscordAPI.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = client.guilds.members.search('891', { limit: 1, query: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.guilds.members.search('891', { limit: 1, query: 'x' });
  });
});

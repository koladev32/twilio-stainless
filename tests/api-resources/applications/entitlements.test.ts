// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI, { toFile } from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({ botToken: 'My Bot Token', clientId: 'My Client ID', clientSecret: 'My Client Secret', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource entitlements', () => {
  test('create: only required params', async () => {
    const responsePromise = client.applications.entitlements.create('891', { owner_id: '891', owner_type: undefined, sku_id: '891' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.applications.entitlements.create('891', { owner_id: '891', owner_type: undefined, sku_id: '891' });
  });

  test('retrieve', async () => {
    const responsePromise = client.applications.entitlements.retrieve('891', '891');
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
    await expect(client.applications.entitlements.retrieve('891', '891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.applications.entitlements.list('891', { sku_ids: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.applications.entitlements.list('891', { sku_ids: 'string', after: '891', before: '891', exclude_deleted: true, exclude_ended: true, guild_id: '891', limit: 1, only_active: true, user_id: '891' });
  });

  test('delete', async () => {
    const responsePromise = client.applications.entitlements.delete('891', '891');
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
    await expect(client.applications.entitlements.delete('891', '891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });

  test('consume', async () => {
    const responsePromise = client.applications.entitlements.consume('891', '891');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('consume: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.applications.entitlements.consume('891', '891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });
});

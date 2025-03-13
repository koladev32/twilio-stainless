// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI, { toFile } from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({ botToken: 'My Bot Token', clientId: 'My Client ID', clientSecret: 'My Client Secret', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource channels', () => {
  test('create: only required params', async () => {
    const responsePromise = client.guilds.channels.create('891', { name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.guilds.channels.create('891', { name: 'x', available_tags: [{ name: 'name', emoji_id: '891', emoji_name: 'emoji_name', moderated: true }], bitrate: 8000, default_auto_archive_duration: 60, default_forum_layout: 0, default_reaction_emoji: { emoji_id: '891', emoji_name: 'emoji_name' }, default_sort_order: 0, default_thread_rate_limit_per_user: 0, nsfw: true, parent_id: '891', permission_overwrites: [{ id: '891', allow: 0, deny: 0, type: 0 }], position: 0, rate_limit_per_user: 0, rtc_region: 'rtc_region', topic: 'topic', type: 1, user_limit: 0, video_quality_mode: 1 });
  });

  test('update: only required params', async () => {
    const responsePromise = client.guilds.channels.update('891', [{}]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.guilds.channels.update('891', [{ id: '891', lock_permissions: true, parent_id: '891', position: 0 }]);
  });

  test('list', async () => {
    const responsePromise = client.guilds.channels.list('891');
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
    await expect(client.guilds.channels.list('891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });
});

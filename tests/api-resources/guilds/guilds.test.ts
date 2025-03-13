// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI, { toFile } from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({ botToken: 'My Bot Token', clientId: 'My Client ID', clientSecret: 'My Client Secret', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource guilds', () => {
  test('create: only required params', async () => {
    const responsePromise = client.guilds.create({ name: 'xx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.guilds.create({ name: 'xx', afk_channel_id: '891', afk_timeout: 60, channels: [{ name: 'x', id: '891', available_tags: [{ name: 'name', emoji_id: '891', emoji_name: 'emoji_name', moderated: true }], bitrate: 8000, default_auto_archive_duration: 60, default_forum_layout: 0, default_reaction_emoji: { emoji_id: '891', emoji_name: 'emoji_name' }, default_sort_order: 0, default_thread_rate_limit_per_user: 0, nsfw: true, parent_id: '891', permission_overwrites: [{ id: '891', allow: 0, deny: 0, type: 0 }], position: 0, rate_limit_per_user: 0, rtc_region: 'rtc_region', topic: 'topic', type: 1, user_limit: 0, video_quality_mode: 1 }], default_message_notifications: 0, description: 'description', explicit_content_filter: 0, icon: 'icon', preferred_locale: 'ar', region: 'region', roles: [{ id: 0, color: 0, hoist: true, mentionable: true, name: 'name', permissions: 0, unicode_emoji: 'unicode_emoji' }], system_channel_flags: 0, system_channel_id: '891', verification_level: 0 });
  });

  test('retrieve', async () => {
    const responsePromise = client.guilds.retrieve('891');
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
    await expect(client.guilds.retrieve('891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.guilds.retrieve('891', { with_counts: true }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.guilds.update('891', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.guilds.delete('891');
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
    await expect(client.guilds.delete('891', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(DiscordAPI.NotFoundError);
  });

  test('bulkBan: only required params', async () => {
    const responsePromise = client.guilds.bulkBan('891', { user_ids: ['891'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkBan: required and optional params', async () => {
    const response = await client.guilds.bulkBan('891', { user_ids: ['891'], delete_message_seconds: 0 });
  });

  test('mfa: only required params', async () => {
    const responsePromise = client.guilds.mfa('891', { level: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('mfa: required and optional params', async () => {
    const response = await client.guilds.mfa('891', { level: 0 });
  });
});

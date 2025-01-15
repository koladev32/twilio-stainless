// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscordAPI from 'discord-api';
import { Response } from 'node-fetch';

const client = new DiscordAPI({
  botToken: 'My Bot Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  test('create: only required params', async () => {
    const responsePromise = client.channels.threads.create('891', { message: {}, name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.channels.threads.create('891', {
      message: {
        allowed_mentions: { parse: ['users'], replied_user: true, roles: ['891'], users: ['891'] },
        attachments: [
          {
            id: '891',
            description: 'description',
            duration_secs: 0,
            filename: 'filename',
            is_remix: true,
            title: 'title',
            waveform: 'waveform',
          },
        ],
        components: [
          {
            components: [
              {
                style: 1,
                type: 1,
                custom_id: 'custom_id',
                disabled: true,
                emoji: { name: 'name', id: '891' },
                label: 'label',
                sku_id: '891',
                url: 'https://example.com',
              },
            ],
            type: 1,
          },
        ],
        content: 'content',
        embeds: [
          {
            author: { icon_url: 'https://example.com', name: 'name', url: 'https://example.com' },
            color: 0,
            description: 'description',
            fields: [{ name: 'name', value: 'value', inline: true }],
            footer: { icon_url: 'https://example.com', text: 'text' },
            image: {
              height: 0,
              is_animated: true,
              placeholder: 'placeholder',
              placeholder_version: 0,
              url: 'https://example.com',
              width: 0,
            },
            provider: { name: 'name', url: 'https://example.com' },
            thumbnail: {
              height: 0,
              is_animated: true,
              placeholder: 'placeholder',
              placeholder_version: 0,
              url: 'https://example.com',
              width: 0,
            },
            timestamp: '2019-12-27T18:11:19.117Z',
            title: 'title',
            type: 'type',
            url: 'https://example.com',
            video: {
              height: 0,
              is_animated: true,
              placeholder: 'placeholder',
              placeholder_version: 0,
              url: 'https://example.com',
              width: 0,
            },
          },
        ],
        flags: 0,
        poll: {
          answers: [{ poll_media: { emoji: { id: '891', animated: true, name: 'name' }, text: 'x' } }],
          question: { emoji: { id: '891', animated: true, name: 'name' }, text: 'x' },
          allow_multiselect: true,
          duration: 1,
          layout_type: 0,
        },
        sticker_ids: ['891'],
      },
      name: 'x',
      applied_tags: ['891'],
      auto_archive_duration: 60,
      rate_limit_per_user: 0,
    });
  });
});

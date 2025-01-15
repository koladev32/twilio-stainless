# Shared

Types:

- <code><a href="./src/resources/shared.ts">FriendInvite</a></code>
- <code><a href="./src/resources/shared.ts">GroupDmInvite</a></code>
- <code><a href="./src/resources/shared.ts">Guild</a></code>
- <code><a href="./src/resources/shared.ts">GuildChannel</a></code>
- <code><a href="./src/resources/shared.ts">GuildIncomingWebhook</a></code>
- <code><a href="./src/resources/shared.ts">GuildInvite</a></code>
- <code><a href="./src/resources/shared.ts">GuildSticker</a></code>
- <code><a href="./src/resources/shared.ts">Message</a></code>
- <code><a href="./src/resources/shared.ts">MessageResponse</a></code>
- <code><a href="./src/resources/shared.ts">MessageResponse</a></code>
- <code><a href="./src/resources/shared.ts">PrivateApplicationResponse</a></code>
- <code><a href="./src/resources/shared.ts">ThreadsResponse</a></code>

# Oauth2

Types:

- <code><a href="./src/resources/oauth2/oauth2.ts">Oauth2GetAuthorizationResponse</a></code>

Methods:

- <code title="get /oauth2/@me">client.oauth2.<a href="./src/resources/oauth2/oauth2.ts">retrieve</a>() -> Oauth2GetAuthorizationResponse</code>

## Applications

Methods:

- <code title="get /oauth2/applications/@me">client.oauth2.applications.<a href="./src/resources/oauth2/applications.ts">retrieve</a>() -> PrivateApplicationResponse</code>

## Keys

Types:

- <code><a href="./src/resources/oauth2/keys.ts">Oauth2GetKeys</a></code>

Methods:

- <code title="get /oauth2/keys">client.oauth2.keys.<a href="./src/resources/oauth2/keys.ts">list</a>() -> Oauth2GetKeys</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserPiiResponse</a></code>

Methods:

- <code title="get /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(userId) -> User</code>
- <code title="get /users/@me">client.users.<a href="./src/resources/users/users.ts">retrieveMe</a>() -> UserPiiResponse</code>
- <code title="patch /users/@me">client.users.<a href="./src/resources/users/users.ts">updateMe</a>({ ...params }) -> UserPiiResponse</code>

## Connections

Types:

- <code><a href="./src/resources/users/connections.ts">ConnectedAccountResponse</a></code>
- <code><a href="./src/resources/users/connections.ts">ConnectionListResponse</a></code>

Methods:

- <code title="get /users/@me/connections">client.users.connections.<a href="./src/resources/users/connections.ts">list</a>() -> ConnectionListResponse | null</code>

## Channels

Types:

- <code><a href="./src/resources/users/channels.ts">PrivateChannelResponse</a></code>
- <code><a href="./src/resources/users/channels.ts">PrivateGroupChannelResponse</a></code>
- <code><a href="./src/resources/users/channels.ts">ChannelCreateResponse</a></code>

Methods:

- <code title="post /users/@me/channels">client.users.channels.<a href="./src/resources/users/channels.ts">create</a>({ ...params }) -> ChannelCreateResponse</code>

## Guilds

Types:

- <code><a href="./src/resources/users/guilds/guilds.ts">MyGuildResponse</a></code>
- <code><a href="./src/resources/users/guilds/guilds.ts">GuildListResponse</a></code>

Methods:

- <code title="get /users/@me/guilds">client.users.guilds.<a href="./src/resources/users/guilds/guilds.ts">list</a>({ ...params }) -> GuildListResponse | null</code>
- <code title="delete /users/@me/guilds/{guild_id}">client.users.guilds.<a href="./src/resources/users/guilds/guilds.ts">delete</a>(guildId) -> void</code>

### Member

Types:

- <code><a href="./src/resources/users/guilds/member.ts">PrivateGuildMemberResponse</a></code>

Methods:

- <code title="get /users/@me/guilds/{guild_id}/member">client.users.guilds.member.<a href="./src/resources/users/guilds/member.ts">retrieve</a>(guildId) -> PrivateGuildMemberResponse</code>

## Applications

### RoleConnections

Types:

- <code><a href="./src/resources/users/applications/role-connections.ts">ApplicationUserRoleConnectionResponse</a></code>

Methods:

- <code title="get /users/@me/applications/{application_id}/role-connection">client.users.applications.roleConnections.<a href="./src/resources/users/applications/role-connections.ts">retrieve</a>(applicationId) -> ApplicationUserRoleConnectionResponse</code>
- <code title="put /users/@me/applications/{application_id}/role-connection">client.users.applications.roleConnections.<a href="./src/resources/users/applications/role-connections.ts">update</a>(applicationId, { ...params }) -> ApplicationUserRoleConnectionResponse</code>
- <code title="delete /users/@me/applications/{application_id}/role-connection">client.users.applications.roleConnections.<a href="./src/resources/users/applications/role-connections.ts">remove</a>(applicationId) -> void</code>

# Applications

Types:

- <code><a href="./src/resources/applications/applications.ts">PrivateApplication</a></code>

Methods:

- <code title="get /applications/{application_id}">client.applications.<a href="./src/resources/applications/applications.ts">retrieve</a>(applicationId) -> PrivateApplicationResponse</code>
- <code title="patch /applications/{application_id}">client.applications.<a href="./src/resources/applications/applications.ts">update</a>(applicationId, { ...params }) -> PrivateApplicationResponse</code>

## Commands

Types:

- <code><a href="./src/resources/applications/commands/commands.ts">ApplicationCommandResponse</a></code>
- <code><a href="./src/resources/applications/commands/commands.ts">CommandPermissionsResponse</a></code>
- <code><a href="./src/resources/applications/commands/commands.ts">CommandUpdateResponse</a></code>
- <code><a href="./src/resources/applications/commands/commands.ts">CommandListResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/commands">client.applications.commands.<a href="./src/resources/applications/commands/commands.ts">create</a>(applicationId, { ...params }) -> ApplicationCommandResponse</code>
- <code title="get /applications/{application_id}/commands/{command_id}">client.applications.commands.<a href="./src/resources/applications/commands/commands.ts">retrieve</a>(applicationId, commandId) -> ApplicationCommandResponse</code>
- <code title="put /applications/{application_id}/commands">client.applications.commands.<a href="./src/resources/applications/commands/commands.ts">update</a>(applicationId, [ ...body ]) -> CommandUpdateResponse | null</code>
- <code title="get /applications/{application_id}/commands">client.applications.commands.<a href="./src/resources/applications/commands/commands.ts">list</a>(applicationId, { ...params }) -> CommandListResponse | null</code>
- <code title="delete /applications/{application_id}/commands/{command_id}">client.applications.commands.<a href="./src/resources/applications/commands/commands.ts">delete</a>(applicationId, commandId) -> void</code>

### Permissions

Types:

- <code><a href="./src/resources/applications/commands/permissions.ts">PermissionListPermissionsResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/guilds/{guild_id}/commands/permissions">client.applications.commands.permissions.<a href="./src/resources/applications/commands/permissions.ts">listPermissions</a>(applicationId, guildId) -> PermissionListPermissionsResponse</code>
- <code title="get /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">client.applications.commands.permissions.<a href="./src/resources/applications/commands/permissions.ts">retrievePermissions</a>(applicationId, guildId, commandId) -> CommandPermissionsResponse</code>

## Guilds

### Commands

Types:

- <code><a href="./src/resources/applications/guilds/commands/commands.ts">ApplicationCommandResponse</a></code>
- <code><a href="./src/resources/applications/guilds/commands/commands.ts">CommandListResponse</a></code>
- <code><a href="./src/resources/applications/guilds/commands/commands.ts">CommandPutResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/guilds/{guild_id}/commands">client.applications.guilds.commands.<a href="./src/resources/applications/guilds/commands/commands.ts">create</a>(applicationId, guildId, { ...params }) -> ApplicationCommandResponse</code>
- <code title="get /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">client.applications.guilds.commands.<a href="./src/resources/applications/guilds/commands/commands.ts">retrieve</a>(applicationId, guildId, commandId) -> ApplicationCommandResponse</code>
- <code title="patch /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">client.applications.guilds.commands.<a href="./src/resources/applications/guilds/commands/commands.ts">update</a>(applicationId, guildId, commandId, { ...params }) -> ApplicationCommandResponse</code>
- <code title="get /applications/{application_id}/guilds/{guild_id}/commands">client.applications.guilds.commands.<a href="./src/resources/applications/guilds/commands/commands.ts">list</a>(applicationId, guildId, { ...params }) -> CommandListResponse | null</code>
- <code title="delete /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">client.applications.guilds.commands.<a href="./src/resources/applications/guilds/commands/commands.ts">delete</a>(applicationId, guildId, commandId) -> void</code>
- <code title="put /applications/{application_id}/guilds/{guild_id}/commands">client.applications.guilds.commands.<a href="./src/resources/applications/guilds/commands/commands.ts">put</a>(applicationId, guildId, [ ...body ]) -> CommandPutResponse | null</code>

#### Permissions

Methods:

- <code title="put /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">client.applications.guilds.commands.permissions.<a href="./src/resources/applications/guilds/commands/permissions.ts">update</a>(applicationId, guildId, commandId, { ...params }) -> CommandPermissionsResponse</code>

## RoleConnections

### Metadata

Types:

- <code><a href="./src/resources/applications/role-connections/metadata.ts">ApplicationRoleConnectionsMetadataItemResponse</a></code>
- <code><a href="./src/resources/applications/role-connections/metadata.ts">MetadataListResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/role-connections/metadata">client.applications.roleConnections.metadata.<a href="./src/resources/applications/role-connections/metadata.ts">list</a>(applicationId) -> MetadataListResponse | null</code>

## RoleConnectionsMetadata

Types:

- <code><a href="./src/resources/applications/role-connections-metadata.ts">RoleConnectionsMetadataUpdateResponse</a></code>

Methods:

- <code title="put /applications/{application_id}/role-connections/metadata">client.applications.roleConnectionsMetadata.<a href="./src/resources/applications/role-connections-metadata.ts">update</a>(applicationId, [ ...body ]) -> RoleConnectionsMetadataUpdateResponse | null</code>

## Entitlements

Types:

- <code><a href="./src/resources/applications/entitlements.ts">EntitlementResponse</a></code>
- <code><a href="./src/resources/applications/entitlements.ts">EntitlementListResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/entitlements">client.applications.entitlements.<a href="./src/resources/applications/entitlements.ts">create</a>(applicationId, { ...params }) -> EntitlementResponse</code>
- <code title="get /applications/{application_id}/entitlements/{entitlement_id}">client.applications.entitlements.<a href="./src/resources/applications/entitlements.ts">retrieve</a>(applicationId, entitlementId) -> EntitlementResponse</code>
- <code title="get /applications/{application_id}/entitlements">client.applications.entitlements.<a href="./src/resources/applications/entitlements.ts">list</a>(applicationId, { ...params }) -> EntitlementListResponse</code>
- <code title="delete /applications/{application_id}/entitlements/{entitlement_id}">client.applications.entitlements.<a href="./src/resources/applications/entitlements.ts">delete</a>(applicationId, entitlementId) -> void</code>
- <code title="post /applications/{application_id}/entitlements/{entitlement_id}/consume">client.applications.entitlements.<a href="./src/resources/applications/entitlements.ts">consume</a>(applicationId, entitlementId) -> void</code>

## ActivityInstances

Types:

- <code><a href="./src/resources/applications/activity-instances.ts">EmbeddedActivityInstance</a></code>

Methods:

- <code title="get /applications/{application_id}/activity-instances/{instance_id}">client.applications.activityInstances.<a href="./src/resources/applications/activity-instances.ts">retrieve</a>(applicationId, instanceId) -> EmbeddedActivityInstance</code>

## Attachment

Types:

- <code><a href="./src/resources/applications/attachment.ts">ActivitiesAttachmentResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/attachment">client.applications.attachment.<a href="./src/resources/applications/attachment.ts">create</a>(applicationId, { ...params }) -> ActivitiesAttachmentResponse</code>

## Emojis

Types:

- <code><a href="./src/resources/applications/emojis.ts">EmojiResponse</a></code>
- <code><a href="./src/resources/applications/emojis.ts">ListApplicationEmojisResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/emojis">client.applications.emojis.<a href="./src/resources/applications/emojis.ts">create</a>(applicationId, { ...params }) -> EmojiResponse</code>
- <code title="get /applications/{application_id}/emojis/{emoji_id}">client.applications.emojis.<a href="./src/resources/applications/emojis.ts">retrieve</a>(applicationId, emojiId) -> EmojiResponse</code>
- <code title="patch /applications/{application_id}/emojis/{emoji_id}">client.applications.emojis.<a href="./src/resources/applications/emojis.ts">update</a>(applicationId, emojiId, { ...params }) -> EmojiResponse</code>
- <code title="get /applications/{application_id}/emojis">client.applications.emojis.<a href="./src/resources/applications/emojis.ts">list</a>(applicationId) -> ListApplicationEmojisResponse</code>
- <code title="delete /applications/{application_id}/emojis/{emoji_id}">client.applications.emojis.<a href="./src/resources/applications/emojis.ts">delete</a>(applicationId, emojiId) -> void</code>

# Gateway

Types:

- <code><a href="./src/resources/gateway/gateway.ts">GatewayResponse</a></code>

Methods:

- <code title="get /gateway">client.gateway.<a href="./src/resources/gateway/gateway.ts">retrieve</a>() -> GatewayResponse</code>

## Bot

Types:

- <code><a href="./src/resources/gateway/bot.ts">GatewayBotResponse</a></code>

Methods:

- <code title="get /gateway/bot">client.gateway.bot.<a href="./src/resources/gateway/bot.ts">retrieve</a>() -> GatewayBotResponse</code>

# Voice

## Regions

Types:

- <code><a href="./src/resources/voice/regions.ts">VoiceRegionResponse</a></code>
- <code><a href="./src/resources/voice/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /voice/regions">client.voice.regions.<a href="./src/resources/voice/regions.ts">list</a>() -> RegionListResponse | null</code>

# SoundboardDefaultSounds

Types:

- <code><a href="./src/resources/soundboard-default-sounds.ts">SoundboardSoundResponse</a></code>
- <code><a href="./src/resources/soundboard-default-sounds.ts">SoundboardDefaultSoundListResponse</a></code>

Methods:

- <code title="get /soundboard-default-sounds">client.soundboardDefaultSounds.<a href="./src/resources/soundboard-default-sounds.ts">list</a>() -> SoundboardDefaultSoundListResponse</code>

# StageInstances

Types:

- <code><a href="./src/resources/stage-instances.ts">StageInstance</a></code>
- <code><a href="./src/resources/stage-instances.ts">StageInstanceResponse</a></code>

Methods:

- <code title="post /stage-instances">client.stageInstances.<a href="./src/resources/stage-instances.ts">create</a>({ ...params }) -> StageInstanceResponse</code>
- <code title="get /stage-instances/{channel_id}">client.stageInstances.<a href="./src/resources/stage-instances.ts">retrieve</a>(channelId) -> StageInstanceResponse</code>
- <code title="patch /stage-instances/{channel_id}">client.stageInstances.<a href="./src/resources/stage-instances.ts">update</a>(channelId, { ...params }) -> StageInstanceResponse</code>
- <code title="delete /stage-instances/{channel_id}">client.stageInstances.<a href="./src/resources/stage-instances.ts">delete</a>(channelId) -> void</code>

# StickerPacks

Types:

- <code><a href="./src/resources/sticker-packs.ts">StickerPack</a></code>
- <code><a href="./src/resources/sticker-packs.ts">StickerPackCollectionResponse</a></code>

Methods:

- <code title="get /sticker-packs/{pack_id}">client.stickerPacks.<a href="./src/resources/sticker-packs.ts">retrieve</a>(packId) -> StickerPack</code>
- <code title="get /sticker-packs">client.stickerPacks.<a href="./src/resources/sticker-packs.ts">list</a>() -> StickerPackCollectionResponse</code>

# Guilds

Types:

- <code><a href="./src/resources/guilds/guilds.ts">BulkBanUsers</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">GuildAuditLog</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">GuildMfaLevel</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">GuildOnboarding</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">GuildResponse</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">UserGuildOnboarding</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">VanityURL</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">Widget</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">GuildRetrieveResponse</a></code>

Methods:

- <code title="post /guilds">client.guilds.<a href="./src/resources/guilds/guilds.ts">create</a>({ ...params }) -> Guild</code>
- <code title="get /guilds/{guild_id}">client.guilds.<a href="./src/resources/guilds/guilds.ts">retrieve</a>(guildId, { ...params }) -> GuildRetrieveResponse</code>
- <code title="patch /guilds/{guild_id}">client.guilds.<a href="./src/resources/guilds/guilds.ts">update</a>(guildId, { ...params }) -> Guild</code>
- <code title="delete /guilds/{guild_id}">client.guilds.<a href="./src/resources/guilds/guilds.ts">delete</a>(guildId) -> void</code>
- <code title="post /guilds/{guild_id}/bulk-ban">client.guilds.<a href="./src/resources/guilds/guilds.ts">bulkBan</a>(guildId, { ...params }) -> BulkBanUsers</code>
- <code title="post /guilds/{guild_id}/mfa">client.guilds.<a href="./src/resources/guilds/guilds.ts">mfa</a>(guildId, { ...params }) -> GuildMfaLevel</code>

## ScheduledEvents

Types:

- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">ExternalScheduledEvent</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">StageScheduledEvent</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">VoiceScheduledEvent</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">ScheduledEventCreateResponse</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">ScheduledEventRetrieveResponse</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">ScheduledEventUpdateResponse</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">ScheduledEventListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/scheduled-events">client.guilds.scheduledEvents.<a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">create</a>(guildId, { ...params }) -> ScheduledEventCreateResponse</code>
- <code title="get /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">client.guilds.scheduledEvents.<a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">retrieve</a>(guildId, guildScheduledEventId, { ...params }) -> ScheduledEventRetrieveResponse</code>
- <code title="patch /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">client.guilds.scheduledEvents.<a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">update</a>(guildId, guildScheduledEventId, { ...params }) -> ScheduledEventUpdateResponse</code>
- <code title="get /guilds/{guild_id}/scheduled-events">client.guilds.scheduledEvents.<a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">list</a>(guildId, { ...params }) -> ScheduledEventListResponse | null</code>
- <code title="delete /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">client.guilds.scheduledEvents.<a href="./src/resources/guilds/scheduled-events/scheduled-events.ts">delete</a>(guildId, guildScheduledEventId) -> void</code>

### Users

Types:

- <code><a href="./src/resources/guilds/scheduled-events/users.ts">ScheduledEventUserResponse</a></code>
- <code><a href="./src/resources/guilds/scheduled-events/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users">client.guilds.scheduledEvents.users.<a href="./src/resources/guilds/scheduled-events/users.ts">list</a>(guildId, guildScheduledEventId, { ...params }) -> UserListResponse | null</code>

## AutoModeration

### Rules

Types:

- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">DefaultKeywordRuleResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">KeywordRuleResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">MentionSpamRuleResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">MlSpamRuleResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">SpamLinkRuleResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/guilds/auto-moderation/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/auto-moderation/rules">client.guilds.autoModeration.rules.<a href="./src/resources/guilds/auto-moderation/rules.ts">create</a>(guildId, { ...params }) -> RuleCreateResponse</code>
- <code title="get /guilds/{guild_id}/auto-moderation/rules/{rule_id}">client.guilds.autoModeration.rules.<a href="./src/resources/guilds/auto-moderation/rules.ts">retrieve</a>(guildId, ruleId) -> RuleRetrieveResponse</code>
- <code title="patch /guilds/{guild_id}/auto-moderation/rules/{rule_id}">client.guilds.autoModeration.rules.<a href="./src/resources/guilds/auto-moderation/rules.ts">update</a>(guildId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /guilds/{guild_id}/auto-moderation/rules">client.guilds.autoModeration.rules.<a href="./src/resources/guilds/auto-moderation/rules.ts">list</a>(guildId) -> RuleListResponse | null</code>
- <code title="delete /guilds/{guild_id}/auto-moderation/rules/{rule_id}">client.guilds.autoModeration.rules.<a href="./src/resources/guilds/auto-moderation/rules.ts">delete</a>(guildId, ruleId) -> void</code>

## VoiceStates

Types:

- <code><a href="./src/resources/guilds/voice-states.ts">VoiceState</a></code>
- <code><a href="./src/resources/guilds/voice-states.ts">VoiceStateResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/voice-states/{user_id}">client.guilds.voiceStates.<a href="./src/resources/guilds/voice-states.ts">retrieve</a>(guildId, userId) -> VoiceStateResponse</code>
- <code title="patch /guilds/{guild_id}/voice-states/{user_id}">client.guilds.voiceStates.<a href="./src/resources/guilds/voice-states.ts">update</a>(guildId, userId, { ...params }) -> void</code>
- <code title="get /guilds/{guild_id}/voice-states/@me">client.guilds.voiceStates.<a href="./src/resources/guilds/voice-states.ts">retrieveSelf</a>(guildId) -> VoiceStateResponse</code>
- <code title="patch /guilds/{guild_id}/voice-states/@me">client.guilds.voiceStates.<a href="./src/resources/guilds/voice-states.ts">updateSelf</a>(guildId, { ...params }) -> void</code>

## Members

Types:

- <code><a href="./src/resources/guilds/members/members.ts">GuildMember</a></code>
- <code><a href="./src/resources/guilds/members/members.ts">GuildMemberResponse</a></code>
- <code><a href="./src/resources/guilds/members/members.ts">PrivateGuildMemberResponse</a></code>
- <code><a href="./src/resources/guilds/members/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/guilds/members/members.ts">MemberSearchResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/members/{user_id}">client.guilds.members.<a href="./src/resources/guilds/members/members.ts">retrieve</a>(guildId, userId) -> GuildMemberResponse</code>
- <code title="patch /guilds/{guild_id}/members/{user_id}">client.guilds.members.<a href="./src/resources/guilds/members/members.ts">update</a>(guildId, userId, { ...params }) -> GuildMemberResponse</code>
- <code title="get /guilds/{guild_id}/members">client.guilds.members.<a href="./src/resources/guilds/members/members.ts">list</a>(guildId, { ...params }) -> MemberListResponse</code>
- <code title="delete /guilds/{guild_id}/members/{user_id}">client.guilds.members.<a href="./src/resources/guilds/members/members.ts">delete</a>(guildId, userId) -> void</code>
- <code title="get /guilds/{guild_id}/members/search">client.guilds.members.<a href="./src/resources/guilds/members/members.ts">search</a>(guildId, { ...params }) -> MemberSearchResponse</code>

### Roles

Methods:

- <code title="put /guilds/{guild_id}/members/{user_id}/roles/{role_id}">client.guilds.members.roles.<a href="./src/resources/guilds/members/roles.ts">update</a>(guildId, userId, roleId) -> void</code>
- <code title="delete /guilds/{guild_id}/members/{user_id}/roles/{role_id}">client.guilds.members.roles.<a href="./src/resources/guilds/members/roles.ts">delete</a>(guildId, userId, roleId) -> void</code>

## Threads

Types:

- <code><a href="./src/resources/guilds/threads.ts">ThreadsResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/threads/active">client.guilds.threads.<a href="./src/resources/guilds/threads.ts">active</a>(guildId) -> ThreadsResponse</code>

## Templates

Types:

- <code><a href="./src/resources/guilds/templates.ts">GuildTemplate</a></code>
- <code><a href="./src/resources/guilds/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/templates">client.guilds.templates.<a href="./src/resources/guilds/templates.ts">create</a>(guildId, { ...params }) -> GuildTemplate</code>
- <code title="get /guilds/templates/{code}">client.guilds.templates.<a href="./src/resources/guilds/templates.ts">retrieve</a>(code) -> GuildTemplate</code>
- <code title="patch /guilds/{guild_id}/templates/{code}">client.guilds.templates.<a href="./src/resources/guilds/templates.ts">update</a>(guildId, code, { ...params }) -> GuildTemplate</code>
- <code title="get /guilds/{guild_id}/templates">client.guilds.templates.<a href="./src/resources/guilds/templates.ts">list</a>(guildId) -> TemplateListResponse | null</code>
- <code title="delete /guilds/{guild_id}/templates/{code}">client.guilds.templates.<a href="./src/resources/guilds/templates.ts">delete</a>(guildId, code) -> GuildTemplate</code>

## NewMemberWelcome

Types:

- <code><a href="./src/resources/guilds/new-member-welcome.ts">GuildHomeSettings</a></code>

Methods:

- <code title="get /guilds/{guild_id}/new-member-welcome">client.guilds.newMemberWelcome.<a href="./src/resources/guilds/new-member-welcome.ts">retrieve</a>(guildId) -> GuildHomeSettings</code>

## SoundboardSounds

Types:

- <code><a href="./src/resources/guilds/soundboard-sounds.ts">SoundboardSound</a></code>
- <code><a href="./src/resources/guilds/soundboard-sounds.ts">SoundboardSoundListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/soundboard-sounds">client.guilds.soundboardSounds.<a href="./src/resources/guilds/soundboard-sounds.ts">create</a>(guildId, { ...params }) -> SoundboardSoundResponse</code>
- <code title="get /guilds/{guild_id}/soundboard-sounds/{sound_id}">client.guilds.soundboardSounds.<a href="./src/resources/guilds/soundboard-sounds.ts">retrieve</a>(guildId, soundId) -> SoundboardSoundResponse</code>
- <code title="patch /guilds/{guild_id}/soundboard-sounds/{sound_id}">client.guilds.soundboardSounds.<a href="./src/resources/guilds/soundboard-sounds.ts">update</a>(guildId, soundId, { ...params }) -> SoundboardSoundResponse</code>
- <code title="get /guilds/{guild_id}/soundboard-sounds">client.guilds.soundboardSounds.<a href="./src/resources/guilds/soundboard-sounds.ts">list</a>(guildId) -> SoundboardSoundListResponse</code>
- <code title="delete /guilds/{guild_id}/soundboard-sounds/{sound_id}">client.guilds.soundboardSounds.<a href="./src/resources/guilds/soundboard-sounds.ts">delete</a>(guildId, soundId) -> void</code>

## WelcomeScreen

Types:

- <code><a href="./src/resources/guilds/welcome-screen.ts">GuildWelcomeScreen</a></code>

Methods:

- <code title="get /guilds/{guild_id}/welcome-screen">client.guilds.welcomeScreen.<a href="./src/resources/guilds/welcome-screen.ts">retrieve</a>(guildId) -> GuildWelcomeScreen</code>
- <code title="patch /guilds/{guild_id}/welcome-screen">client.guilds.welcomeScreen.<a href="./src/resources/guilds/welcome-screen.ts">update</a>(guildId, { ...params }) -> GuildWelcomeScreen</code>

## Integrations

Types:

- <code><a href="./src/resources/guilds/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/integrations">client.guilds.integrations.<a href="./src/resources/guilds/integrations.ts">list</a>(guildId) -> IntegrationListResponse | null</code>
- <code title="delete /guilds/{guild_id}/integrations/{integration_id}">client.guilds.integrations.<a href="./src/resources/guilds/integrations.ts">delete</a>(guildId, integrationId) -> void</code>

## Widgets

Methods:

- <code title="get /guilds/{guild_id}/widget.json">client.guilds.widgets.<a href="./src/resources/guilds/widgets.ts">retrieveJson</a>(guildId) -> Widget</code>
- <code title="get /guilds/{guild_id}/widget.png">client.guilds.widgets.<a href="./src/resources/guilds/widgets.ts">retrievePng</a>(guildId, { ...params }) -> Response</code>

## Onboarding

Methods:

- <code title="get /guilds/{guild_id}/onboarding">client.guilds.onboarding.<a href="./src/resources/guilds/onboarding.ts">retrieve</a>(guildId) -> UserGuildOnboarding</code>
- <code title="put /guilds/{guild_id}/onboarding">client.guilds.onboarding.<a href="./src/resources/guilds/onboarding.ts">update</a>(guildId, { ...params }) -> GuildOnboarding</code>

## VanityURLs

Methods:

- <code title="get /guilds/{guild_id}/vanity-url">client.guilds.vanityURLs.<a href="./src/resources/guilds/vanity-urls.ts">retrieve</a>(guildId) -> VanityURL</code>

## AuditLogs

Methods:

- <code title="get /guilds/{guild_id}/audit-logs">client.guilds.auditLogs.<a href="./src/resources/guilds/audit-logs.ts">retrieve</a>(guildId, { ...params }) -> GuildAuditLog</code>

## Stickers

Types:

- <code><a href="./src/resources/guilds/stickers.ts">StickerListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/stickers">client.guilds.stickers.<a href="./src/resources/guilds/stickers.ts">create</a>(guildId, { ...params }) -> GuildSticker</code>
- <code title="get /guilds/{guild_id}/stickers/{sticker_id}">client.guilds.stickers.<a href="./src/resources/guilds/stickers.ts">retrieve</a>(guildId, stickerId) -> GuildSticker</code>
- <code title="patch /guilds/{guild_id}/stickers/{sticker_id}">client.guilds.stickers.<a href="./src/resources/guilds/stickers.ts">update</a>(guildId, stickerId, { ...params }) -> GuildSticker</code>
- <code title="get /guilds/{guild_id}/stickers">client.guilds.stickers.<a href="./src/resources/guilds/stickers.ts">list</a>(guildId) -> StickerListResponse</code>
- <code title="delete /guilds/{guild_id}/stickers/{sticker_id}">client.guilds.stickers.<a href="./src/resources/guilds/stickers.ts">delete</a>(guildId, stickerId) -> void</code>

## Webhooks

Types:

- <code><a href="./src/resources/guilds/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/webhooks">client.guilds.webhooks.<a href="./src/resources/guilds/webhooks.ts">list</a>(guildId) -> WebhookListResponse | null</code>

## Channels

Types:

- <code><a href="./src/resources/guilds/channels.ts">ChannelListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/channels">client.guilds.channels.<a href="./src/resources/guilds/channels.ts">create</a>(guildId, { ...params }) -> GuildChannel</code>
- <code title="patch /guilds/{guild_id}/channels">client.guilds.channels.<a href="./src/resources/guilds/channels.ts">update</a>(guildId, [ ...body ]) -> void</code>
- <code title="get /guilds/{guild_id}/channels">client.guilds.channels.<a href="./src/resources/guilds/channels.ts">list</a>(guildId) -> ChannelListResponse | null</code>

## Preview

Types:

- <code><a href="./src/resources/guilds/preview.ts">GuildPreview</a></code>

Methods:

- <code title="get /guilds/{guild_id}/preview">client.guilds.preview.<a href="./src/resources/guilds/preview.ts">retrieve</a>(guildId) -> GuildPreview</code>

## Invites

Types:

- <code><a href="./src/resources/guilds/invites.ts">InviteListResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/invites">client.guilds.invites.<a href="./src/resources/guilds/invites.ts">list</a>(guildId) -> InviteListResponse | null</code>

## Regions

Types:

- <code><a href="./src/resources/guilds/regions.ts">VoiceRegion</a></code>
- <code><a href="./src/resources/guilds/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/regions">client.guilds.regions.<a href="./src/resources/guilds/regions.ts">list</a>(guildId) -> RegionListResponse | null</code>

## Emojis

Types:

- <code><a href="./src/resources/guilds/emojis.ts">Emoji</a></code>
- <code><a href="./src/resources/guilds/emojis.ts">EmojiListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/emojis">client.guilds.emojis.<a href="./src/resources/guilds/emojis.ts">create</a>(guildId, { ...params }) -> EmojiResponse</code>
- <code title="get /guilds/{guild_id}/emojis/{emoji_id}">client.guilds.emojis.<a href="./src/resources/guilds/emojis.ts">retrieve</a>(guildId, emojiId) -> EmojiResponse</code>
- <code title="patch /guilds/{guild_id}/emojis/{emoji_id}">client.guilds.emojis.<a href="./src/resources/guilds/emojis.ts">update</a>(guildId, emojiId, { ...params }) -> EmojiResponse</code>
- <code title="get /guilds/{guild_id}/emojis">client.guilds.emojis.<a href="./src/resources/guilds/emojis.ts">list</a>(guildId) -> EmojiListResponse | null</code>
- <code title="delete /guilds/{guild_id}/emojis/{emoji_id}">client.guilds.emojis.<a href="./src/resources/guilds/emojis.ts">delete</a>(guildId, emojiId) -> void</code>

## Widget

Types:

- <code><a href="./src/resources/guilds/widget.ts">WidgetSettings</a></code>

Methods:

- <code title="get /guilds/{guild_id}/widget">client.guilds.widget.<a href="./src/resources/guilds/widget.ts">retrieve</a>(guildId) -> WidgetSettings</code>
- <code title="patch /guilds/{guild_id}/widget">client.guilds.widget.<a href="./src/resources/guilds/widget.ts">update</a>(guildId, { ...params }) -> WidgetSettings</code>

## Roles

Types:

- <code><a href="./src/resources/guilds/roles.ts">GuildRole</a></code>
- <code><a href="./src/resources/guilds/roles.ts">RoleUpdateResponse</a></code>
- <code><a href="./src/resources/guilds/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}/roles">client.guilds.roles.<a href="./src/resources/guilds/roles.ts">create</a>(guildId, { ...params }) -> GuildRole</code>
- <code title="get /guilds/{guild_id}/roles/{role_id}">client.guilds.roles.<a href="./src/resources/guilds/roles.ts">retrieve</a>(guildId, roleId) -> GuildRole</code>
- <code title="patch /guilds/{guild_id}/roles">client.guilds.roles.<a href="./src/resources/guilds/roles.ts">update</a>(guildId, [ ...body ]) -> RoleUpdateResponse</code>
- <code title="get /guilds/{guild_id}/roles">client.guilds.roles.<a href="./src/resources/guilds/roles.ts">list</a>(guildId) -> RoleListResponse</code>
- <code title="delete /guilds/{guild_id}/roles/{role_id}">client.guilds.roles.<a href="./src/resources/guilds/roles.ts">delete</a>(guildId, roleId) -> void</code>

## Prune

Types:

- <code><a href="./src/resources/guilds/prune.ts">GuildPrune</a></code>

Methods:

- <code title="get /guilds/{guild_id}/prune">client.guilds.prune.<a href="./src/resources/guilds/prune.ts">retrieve</a>(guildId, { ...params }) -> GuildPrune</code>

## Bans

Types:

- <code><a href="./src/resources/guilds/bans.ts">GuildBan</a></code>
- <code><a href="./src/resources/guilds/bans.ts">BanListResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/bans/{user_id}">client.guilds.bans.<a href="./src/resources/guilds/bans.ts">retrieve</a>(guildId, userId) -> GuildBan</code>
- <code title="put /guilds/{guild_id}/bans/{user_id}">client.guilds.bans.<a href="./src/resources/guilds/bans.ts">update</a>(guildId, userId, { ...params }) -> void</code>
- <code title="get /guilds/{guild_id}/bans">client.guilds.bans.<a href="./src/resources/guilds/bans.ts">list</a>(guildId, { ...params }) -> BanListResponse | null</code>
- <code title="delete /guilds/{guild_id}/bans/{user_id}">client.guilds.bans.<a href="./src/resources/guilds/bans.ts">delete</a>(guildId, userId) -> void</code>

# Channels

Types:

- <code><a href="./src/resources/channels/channels.ts">PrivateChannel</a></code>
- <code><a href="./src/resources/channels/channels.ts">PrivateGroupChannel</a></code>
- <code><a href="./src/resources/channels/channels.ts">Thread</a></code>
- <code><a href="./src/resources/channels/channels.ts">TypingIndicator</a></code>
- <code><a href="./src/resources/channels/channels.ts">ChannelRetrieveResponse</a></code>
- <code><a href="./src/resources/channels/channels.ts">ChannelUpdateResponse</a></code>
- <code><a href="./src/resources/channels/channels.ts">ChannelDeleteResponse</a></code>

Methods:

- <code title="get /channels/{channel_id}">client.channels.<a href="./src/resources/channels/channels.ts">retrieve</a>(channelId) -> ChannelRetrieveResponse</code>
- <code title="patch /channels/{channel_id}">client.channels.<a href="./src/resources/channels/channels.ts">update</a>(channelId, { ...params }) -> ChannelUpdateResponse</code>
- <code title="delete /channels/{channel_id}">client.channels.<a href="./src/resources/channels/channels.ts">delete</a>(channelId) -> ChannelDeleteResponse</code>
- <code title="post /channels/{channel_id}/send-soundboard-sound">client.channels.<a href="./src/resources/channels/channels.ts">sendSoundboardSound</a>(channelId, { ...params }) -> void</code>
- <code title="post /channels/{channel_id}/typing">client.channels.<a href="./src/resources/channels/channels.ts">typing</a>(channelId) -> unknown</code>

## Users

### Threads

#### Archived

##### Private

Methods:

- <code title="get /channels/{channel_id}/users/@me/threads/archived/private">client.channels.users.threads.archived.private.<a href="./src/resources/channels/users/threads/archived/private.ts">list</a>(channelId, { ...params }) -> ThreadsResponse</code>

## Messages

Types:

- <code><a href="./src/resources/channels/messages/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /channels/{channel_id}/messages">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">create</a>(channelId, { ...params }) -> MessageResponse</code>
- <code title="get /channels/{channel_id}/messages/{message_id}">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">retrieve</a>(channelId, messageId) -> MessageResponse</code>
- <code title="patch /channels/{channel_id}/messages/{message_id}">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">update</a>(channelId, messageId, { ...params }) -> MessageResponse</code>
- <code title="get /channels/{channel_id}/messages">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">list</a>(channelId, { ...params }) -> MessageListResponse | null</code>
- <code title="delete /channels/{channel_id}/messages/{message_id}">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">delete</a>(channelId, messageId) -> void</code>
- <code title="post /channels/{channel_id}/messages/bulk-delete">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">bulkDelete</a>(channelId, { ...params }) -> void</code>
- <code title="post /channels/{channel_id}/messages/{message_id}/crosspost">client.channels.messages.<a href="./src/resources/channels/messages/messages.ts">crosspost</a>(channelId, messageId) -> MessageResponse</code>

### Reactions

Types:

- <code><a href="./src/resources/channels/messages/reactions.ts">UserResponse</a></code>
- <code><a href="./src/resources/channels/messages/reactions.ts">ReactionRetrieveAllResponse</a></code>

Methods:

- <code title="put /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">client.channels.messages.reactions.<a href="./src/resources/channels/messages/reactions.ts">add</a>(channelId, messageId, emojiName) -> void</code>
- <code title="delete /channels/{channel_id}/messages/{message_id}/reactions">client.channels.messages.reactions.<a href="./src/resources/channels/messages/reactions.ts">clear</a>(channelId, messageId) -> void</code>
- <code title="delete /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">client.channels.messages.reactions.<a href="./src/resources/channels/messages/reactions.ts">remove</a>(channelId, messageId, emojiName) -> void</code>
- <code title="delete /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">client.channels.messages.reactions.<a href="./src/resources/channels/messages/reactions.ts">removeEmoji</a>(channelId, messageId, emojiName) -> void</code>
- <code title="delete /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}">client.channels.messages.reactions.<a href="./src/resources/channels/messages/reactions.ts">removeForUser</a>(channelId, messageId, emojiName, userId) -> void</code>
- <code title="get /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">client.channels.messages.reactions.<a href="./src/resources/channels/messages/reactions.ts">retrieveAll</a>(channelId, messageId, emojiName, { ...params }) -> ReactionRetrieveAllResponse</code>

### Threads

Types:

- <code><a href="./src/resources/channels/messages/threads.ts">ThreadResponse</a></code>

Methods:

- <code title="post /channels/{channel_id}/messages/{message_id}/threads">client.channels.messages.threads.<a href="./src/resources/channels/messages/threads.ts">create</a>(channelId, messageId, { ...params }) -> Thread</code>

## Threads

Types:

- <code><a href="./src/resources/channels/threads/threads.ts">CreatedThread</a></code>

Methods:

- <code title="post /channels/{channel_id}/threads">client.channels.threads.<a href="./src/resources/channels/threads/threads.ts">create</a>(channelId, { ...params }) -> CreatedThread</code>

### Archived

#### Private

Methods:

- <code title="get /channels/{channel_id}/threads/archived/private">client.channels.threads.archived.private.<a href="./src/resources/channels/threads/archived/private.ts">list</a>(channelId, { ...params }) -> ThreadsResponse</code>

#### Public

Methods:

- <code title="get /channels/{channel_id}/threads/archived/public">client.channels.threads.archived.public.<a href="./src/resources/channels/threads/archived/public.ts">list</a>(channelId, { ...params }) -> ThreadsResponse</code>

## ThreadMembers

Types:

- <code><a href="./src/resources/channels/thread-members/thread-members.ts">ThreadMemberResponse</a></code>
- <code><a href="./src/resources/channels/thread-members/thread-members.ts">ThreadMemberListResponse</a></code>

Methods:

- <code title="get /channels/{channel_id}/thread-members/{user_id}">client.channels.threadMembers.<a href="./src/resources/channels/thread-members/thread-members.ts">retrieve</a>(channelId, userId, { ...params }) -> ThreadMemberResponse</code>
- <code title="put /channels/{channel_id}/thread-members/{user_id}">client.channels.threadMembers.<a href="./src/resources/channels/thread-members/thread-members.ts">update</a>(channelId, userId) -> void</code>
- <code title="get /channels/{channel_id}/thread-members">client.channels.threadMembers.<a href="./src/resources/channels/thread-members/thread-members.ts">list</a>(channelId, { ...params }) -> ThreadMemberListResponse</code>
- <code title="delete /channels/{channel_id}/thread-members/{user_id}">client.channels.threadMembers.<a href="./src/resources/channels/thread-members/thread-members.ts">delete</a>(channelId, userId) -> void</code>

### Me

Methods:

- <code title="delete /channels/{channel_id}/thread-members/@me">client.channels.threadMembers.me.<a href="./src/resources/channels/thread-members/me.ts">delete</a>(channelId) -> void</code>
- <code title="put /channels/{channel_id}/thread-members/@me">client.channels.threadMembers.me.<a href="./src/resources/channels/thread-members/me.ts">put</a>(channelId) -> void</code>

## Polls

Types:

- <code><a href="./src/resources/channels/polls/polls.ts">PollAnswerDetailsResponse</a></code>

Methods:

- <code title="post /channels/{channel_id}/polls/{message_id}/expire">client.channels.polls.<a href="./src/resources/channels/polls/polls.ts">expire</a>(channelId, messageId) -> MessageResponse</code>

### Answers

Methods:

- <code title="get /channels/{channel_id}/polls/{message_id}/answers/{answer_id}">client.channels.polls.answers.<a href="./src/resources/channels/polls/answers.ts">retrieve</a>(channelId, messageId, answerId, { ...params }) -> PollAnswerDetailsResponse</code>

## Permissions

Methods:

- <code title="put /channels/{channel_id}/permissions/{overwrite_id}">client.channels.permissions.<a href="./src/resources/channels/permissions.ts">update</a>(channelId, overwriteId, { ...params }) -> void</code>
- <code title="delete /channels/{channel_id}/permissions/{overwrite_id}">client.channels.permissions.<a href="./src/resources/channels/permissions.ts">delete</a>(channelId, overwriteId) -> void</code>

## Recipients

Types:

- <code><a href="./src/resources/channels/recipients.ts">PrivateChannelResponse</a></code>
- <code><a href="./src/resources/channels/recipients.ts">PrivateGroupChannelResponse</a></code>
- <code><a href="./src/resources/channels/recipients.ts">RecipientUpdateResponse</a></code>

Methods:

- <code title="put /channels/{channel_id}/recipients/{user_id}">client.channels.recipients.<a href="./src/resources/channels/recipients.ts">update</a>(channelId, userId, { ...params }) -> RecipientUpdateResponse</code>
- <code title="delete /channels/{channel_id}/recipients/{user_id}">client.channels.recipients.<a href="./src/resources/channels/recipients.ts">delete</a>(channelId, userId) -> void</code>

## Followers

Types:

- <code><a href="./src/resources/channels/followers.ts">ChannelFollowerResponse</a></code>

Methods:

- <code title="post /channels/{channel_id}/followers">client.channels.followers.<a href="./src/resources/channels/followers.ts">create</a>(channelId, { ...params }) -> ChannelFollowerResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/channels/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /channels/{channel_id}/webhooks">client.channels.webhooks.<a href="./src/resources/channels/webhooks.ts">create</a>(channelId, { ...params }) -> GuildIncomingWebhook</code>
- <code title="get /channels/{channel_id}/webhooks">client.channels.webhooks.<a href="./src/resources/channels/webhooks.ts">list</a>(channelId) -> WebhookListResponse | null</code>

## Invites

Types:

- <code><a href="./src/resources/channels/invites.ts">InviteCreateResponse</a></code>
- <code><a href="./src/resources/channels/invites.ts">InviteListResponse</a></code>

Methods:

- <code title="post /channels/{channel_id}/invites">client.channels.invites.<a href="./src/resources/channels/invites.ts">create</a>(channelId, { ...params }) -> InviteCreateResponse</code>
- <code title="get /channels/{channel_id}/invites">client.channels.invites.<a href="./src/resources/channels/invites.ts">list</a>(channelId) -> InviteListResponse | null</code>

## Pins

Types:

- <code><a href="./src/resources/channels/pins.ts">PinListResponse</a></code>

Methods:

- <code title="put /channels/{channel_id}/pins/{message_id}">client.channels.pins.<a href="./src/resources/channels/pins.ts">update</a>(channelId, messageId) -> void</code>
- <code title="get /channels/{channel_id}/pins">client.channels.pins.<a href="./src/resources/channels/pins.ts">list</a>(channelId) -> PinListResponse | null</code>
- <code title="delete /channels/{channel_id}/pins/{message_id}">client.channels.pins.<a href="./src/resources/channels/pins.ts">delete</a>(channelId, messageId) -> void</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">ApplicationIncomingWebhook</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">ChannelFollowerWebhook</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookTokenUpdateResponse</a></code>

Methods:

- <code title="post /webhooks/{webhook_id}/{webhook_token}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">create</a>(webhookId, webhookToken, { ...params }) -> MessageResponse</code>
- <code title="get /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">retrieve</a>(webhookId) -> WebhookRetrieveResponse</code>
- <code title="patch /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">update</a>(webhookId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="delete /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">delete</a>(webhookId) -> void</code>
- <code title="patch /webhooks/{webhook_id}/{webhook_token}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">tokenUpdate</a>(webhookId, webhookToken, { ...params }) -> WebhookTokenUpdateResponse</code>

## Messages

Methods:

- <code title="get /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">client.webhooks.messages.<a href="./src/resources/webhooks/messages.ts">retrieve</a>(webhookId, webhookToken, messageId, { ...params }) -> MessageResponse</code>
- <code title="patch /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">client.webhooks.messages.<a href="./src/resources/webhooks/messages.ts">update</a>(webhookId, webhookToken, messageId, { ...params }) -> MessageResponse</code>
- <code title="delete /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">client.webhooks.messages.<a href="./src/resources/webhooks/messages.ts">delete</a>(webhookId, webhookToken, messageId, { ...params }) -> void</code>
- <code title="delete /webhooks/{webhook_id}/{webhook_token}/messages/@original">client.webhooks.messages.<a href="./src/resources/webhooks/messages.ts">deleteOriginal</a>(webhookId, webhookToken, { ...params }) -> void</code>
- <code title="get /webhooks/{webhook_id}/{webhook_token}/messages/@original">client.webhooks.messages.<a href="./src/resources/webhooks/messages.ts">retrieveOriginal</a>(webhookId, webhookToken, { ...params }) -> MessageResponse</code>
- <code title="patch /webhooks/{webhook_id}/{webhook_token}/messages/@original">client.webhooks.messages.<a href="./src/resources/webhooks/messages.ts">updateOriginal</a>(webhookId, webhookToken, { ...params }) -> MessageResponse</code>

## GitHub

Methods:

- <code title="post /webhooks/{webhook_id}/{webhook_token}/github">client.webhooks.github.<a href="./src/resources/webhooks/github.ts">create</a>(webhookId, webhookToken, { ...params }) -> void</code>

## Slack

Types:

- <code><a href="./src/resources/webhooks/slack.ts">SlackCreateResponse</a></code>

Methods:

- <code title="post /webhooks/{webhook_id}/{webhook_token}/slack">client.webhooks.slack.<a href="./src/resources/webhooks/slack.ts">create</a>(webhookId, webhookToken, { ...params }) -> string</code>

# Interactions

Types:

- <code><a href="./src/resources/interactions.ts">InteractionCallbackResponse</a></code>

Methods:

- <code title="post /interactions/{interaction_id}/{interaction_token}/callback">client.interactions.<a href="./src/resources/interactions.ts">callback</a>(interactionId, interactionToken, { ...params }) -> InteractionCallbackResponse</code>

# Stickers

Types:

- <code><a href="./src/resources/stickers.ts">StandardSticker</a></code>
- <code><a href="./src/resources/stickers.ts">StickerRetrieveResponse</a></code>

Methods:

- <code title="get /stickers/{sticker_id}">client.stickers.<a href="./src/resources/stickers.ts">retrieve</a>(stickerId) -> StickerRetrieveResponse</code>

# Invites

Types:

- <code><a href="./src/resources/invites.ts">InviteRetrieveResponse</a></code>
- <code><a href="./src/resources/invites.ts">InviteDeleteResponse</a></code>

Methods:

- <code title="get /invites/{code}">client.invites.<a href="./src/resources/invites.ts">retrieve</a>(code, { ...params }) -> InviteRetrieveResponse</code>
- <code title="delete /invites/{code}">client.invites.<a href="./src/resources/invites.ts">delete</a>(code) -> InviteDeleteResponse</code>

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PermissionsAPI from './permissions';
import { PermissionListPermissionsResponse, Permissions } from './permissions';

export class Commands extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  create(
    applicationId: string,
    body: CommandCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationCommandResponse> {
    return this._client.post(`/applications/${applicationId}/commands`, { body, ...options });
  }

  retrieve(
    applicationId: string,
    commandId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationCommandResponse> {
    return this._client.get(`/applications/${applicationId}/commands/${commandId}`, options);
  }

  update(
    applicationId: string,
    body: CommandUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommandUpdateResponse | null> {
    return this._client.put(`/applications/${applicationId}/commands`, { body, ...options });
  }

  list(
    applicationId: string,
    query?: CommandListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommandListResponse | null>;
  list(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<CommandListResponse | null>;
  list(
    applicationId: string,
    query: CommandListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommandListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(applicationId, {}, query);
    }
    return this._client.get(`/applications/${applicationId}/commands`, { query, ...options });
  }

  delete(applicationId: string, commandId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/applications/${applicationId}/commands/${commandId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ApplicationCommandResponse {
  id: string;

  application_id: string;

  description: string;

  name: string;

  /**
   * - `1` - Slash commands; a text-based command that shows up when a user types /
   * - `2` - A UI-based command that shows up when you right click or tap on a user
   * - `3` - A UI-based command that shows up when you right click or tap on a
   *   message
   * - `4` - A command that represents the primary way to use an application (e.g.
   *   launching an Activity)
   */
  type: 1 | 2 | 3 | 4;

  version: string;

  contexts?: Array<0 | 1 | 2> | null;

  default_member_permissions?: string | null;

  description_localizations?: Record<string, string> | null;

  description_localized?: string | null;

  dm_permission?: boolean | null;

  guild_id?: string | null;

  integration_types?: Array<0 | 1> | null;

  name_localizations?: Record<string, string> | null;

  name_localized?: string | null;

  nsfw?: boolean | null;

  options?: Array<
    | ApplicationCommandResponse.ApplicationCommandAttachmentOptionResponse
    | ApplicationCommandResponse.ApplicationCommandBooleanOptionResponse
    | ApplicationCommandResponse.ApplicationCommandChannelOptionResponse
    | ApplicationCommandResponse.ApplicationCommandIntegerOptionResponse
    | ApplicationCommandResponse.ApplicationCommandMentionableOptionResponse
    | ApplicationCommandResponse.ApplicationCommandNumberOptionResponse
    | ApplicationCommandResponse.ApplicationCommandRoleOptionResponse
    | ApplicationCommandResponse.ApplicationCommandStringOptionResponse
    | ApplicationCommandResponse.ApplicationCommandSubcommandGroupOptionResponse
    | ApplicationCommandResponse.ApplicationCommandSubcommandOptionResponse
    | ApplicationCommandResponse.ApplicationCommandUserOptionResponse
  > | null;
}

export namespace ApplicationCommandResponse {
  export interface ApplicationCommandAttachmentOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandBooleanOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandChannelOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandIntegerOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    autocomplete?: boolean | null;

    choices?: Array<ApplicationCommandIntegerOptionResponse.Choice> | null;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    max_value?: number | null;

    min_value?: number | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandIntegerOptionResponse {
    export interface Choice {
      name: string;

      value: number;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;
    }
  }

  export interface ApplicationCommandMentionableOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandNumberOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    autocomplete?: boolean | null;

    choices?: Array<ApplicationCommandNumberOptionResponse.Choice> | null;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    max_value?: number | null;

    min_value?: number | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandNumberOptionResponse {
    export interface Choice {
      name: string;

      value: number;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;
    }
  }

  export interface ApplicationCommandRoleOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandStringOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    autocomplete?: boolean | null;

    choices?: Array<ApplicationCommandStringOptionResponse.Choice> | null;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    max_length?: number | null;

    min_length?: number | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandStringOptionResponse {
    export interface Choice {
      name: string;

      value: string;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;
    }
  }

  export interface ApplicationCommandSubcommandGroupOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    options?: Array<ApplicationCommandSubcommandGroupOptionResponse.Option> | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandSubcommandGroupOptionResponse {
    export interface Option {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      options?: Array<
        | Option.ApplicationCommandAttachmentOptionResponse
        | Option.ApplicationCommandBooleanOptionResponse
        | Option.ApplicationCommandChannelOptionResponse
        | Option.ApplicationCommandIntegerOptionResponse
        | Option.ApplicationCommandMentionableOptionResponse
        | Option.ApplicationCommandNumberOptionResponse
        | Option.ApplicationCommandRoleOptionResponse
        | Option.ApplicationCommandStringOptionResponse
        | Option.ApplicationCommandUserOptionResponse
      > | null;

      required?: boolean | null;
    }

    export namespace Option {
      export interface ApplicationCommandAttachmentOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandBooleanOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandChannelOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandIntegerOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandIntegerOptionResponse.Choice> | null;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        max_value?: number | null;

        min_value?: number | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandIntegerOptionResponse {
        export interface Choice {
          name: string;

          value: number;

          name_localizations?: Record<string, string> | null;

          name_localized?: string | null;
        }
      }

      export interface ApplicationCommandMentionableOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandNumberOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandNumberOptionResponse.Choice> | null;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        max_value?: number | null;

        min_value?: number | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandNumberOptionResponse {
        export interface Choice {
          name: string;

          value: number;

          name_localizations?: Record<string, string> | null;

          name_localized?: string | null;
        }
      }

      export interface ApplicationCommandRoleOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandStringOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandStringOptionResponse.Choice> | null;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        max_length?: number | null;

        min_length?: number | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandStringOptionResponse {
        export interface Choice {
          name: string;

          value: string;

          name_localizations?: Record<string, string> | null;

          name_localized?: string | null;
        }
      }

      export interface ApplicationCommandUserOptionResponse {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        description_localized?: string | null;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;

        required?: boolean | null;
      }
    }
  }

  export interface ApplicationCommandSubcommandOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    options?: Array<
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandAttachmentOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandBooleanOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandChannelOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandIntegerOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandMentionableOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandNumberOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandRoleOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandStringOptionResponse
      | ApplicationCommandSubcommandOptionResponse.ApplicationCommandUserOptionResponse
    > | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandSubcommandOptionResponse {
    export interface ApplicationCommandAttachmentOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandBooleanOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandChannelOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandIntegerOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandIntegerOptionResponse.Choice> | null;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      max_value?: number | null;

      min_value?: number | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandIntegerOptionResponse {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;
      }
    }

    export interface ApplicationCommandMentionableOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandNumberOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandNumberOptionResponse.Choice> | null;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      max_value?: number | null;

      min_value?: number | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandNumberOptionResponse {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;
      }
    }

    export interface ApplicationCommandRoleOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandStringOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandStringOptionResponse.Choice> | null;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      max_length?: number | null;

      min_length?: number | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandStringOptionResponse {
      export interface Choice {
        name: string;

        value: string;

        name_localizations?: Record<string, string> | null;

        name_localized?: string | null;
      }
    }

    export interface ApplicationCommandUserOptionResponse {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      description_localized?: string | null;

      name_localizations?: Record<string, string> | null;

      name_localized?: string | null;

      required?: boolean | null;
    }
  }

  export interface ApplicationCommandUserOptionResponse {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    description_localized?: string | null;

    name_localizations?: Record<string, string> | null;

    name_localized?: string | null;

    required?: boolean | null;
  }
}

export interface CommandPermissionsResponse {
  id: string;

  application_id: string;

  guild_id: string;

  permissions: Array<CommandPermissionsResponse.Permission>;
}

export namespace CommandPermissionsResponse {
  export interface Permission {
    id: string;

    permission: boolean;

    /**
     * - `1` - This permission is for a role.
     * - `2` - This permission is for a user.
     * - `3` - This permission is for a channel.
     */
    type: 1 | 2 | 3;
  }
}

export type CommandUpdateResponse = Array<ApplicationCommandResponse>;

export type CommandListResponse = Array<ApplicationCommandResponse>;

export interface CommandCreateParams {
  name: string;

  contexts?: Array<0 | 1 | 2> | null;

  default_member_permissions?: number | null;

  description?: string | null;

  description_localizations?: Record<string, string> | null;

  dm_permission?: boolean | null;

  handler?: number | null;

  integration_types?: Array<0 | 1> | null;

  name_localizations?: Record<string, string> | null;

  options?: Array<
    | CommandCreateParams.ApplicationCommandAttachmentOption
    | CommandCreateParams.ApplicationCommandBooleanOption
    | CommandCreateParams.ApplicationCommandChannelOption
    | CommandCreateParams.ApplicationCommandIntegerOption
    | CommandCreateParams.ApplicationCommandMentionableOption
    | CommandCreateParams.ApplicationCommandNumberOption
    | CommandCreateParams.ApplicationCommandRoleOption
    | CommandCreateParams.ApplicationCommandStringOption
    | CommandCreateParams.ApplicationCommandSubcommandGroupOption
    | CommandCreateParams.ApplicationCommandSubcommandOption
    | CommandCreateParams.ApplicationCommandUserOption
  > | null;

  /**
   * - `1` - Slash commands; a text-based command that shows up when a user types /
   * - `2` - A UI-based command that shows up when you right click or tap on a user
   * - `3` - A UI-based command that shows up when you right click or tap on a
   *   message
   * - `4` - A command that represents the primary way to use an application (e.g.
   *   launching an Activity)
   */
  type?: 1 | 2 | 3 | 4 | null;
}

export namespace CommandCreateParams {
  export interface ApplicationCommandAttachmentOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandBooleanOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandChannelOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandIntegerOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    autocomplete?: boolean | null;

    choices?: Array<ApplicationCommandIntegerOption.Choice> | null;

    description_localizations?: Record<string, string> | null;

    max_value?: number | null;

    min_value?: number | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandIntegerOption {
    export interface Choice {
      name: string;

      value: number;

      name_localizations?: Record<string, string> | null;
    }
  }

  export interface ApplicationCommandMentionableOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandNumberOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    autocomplete?: boolean | null;

    choices?: Array<ApplicationCommandNumberOption.Choice> | null;

    description_localizations?: Record<string, string> | null;

    max_value?: number | null;

    min_value?: number | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandNumberOption {
    export interface Choice {
      name: string;

      value: number;

      name_localizations?: Record<string, string> | null;
    }
  }

  export interface ApplicationCommandRoleOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export interface ApplicationCommandStringOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    autocomplete?: boolean | null;

    choices?: Array<ApplicationCommandStringOption.Choice> | null;

    description_localizations?: Record<string, string> | null;

    max_length?: number | null;

    min_length?: number | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandStringOption {
    export interface Choice {
      name: string;

      value: string;

      name_localizations?: Record<string, string> | null;
    }
  }

  export interface ApplicationCommandSubcommandGroupOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    options?: Array<ApplicationCommandSubcommandGroupOption.Option> | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandSubcommandGroupOption {
    export interface Option {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      options?: Array<
        | Option.ApplicationCommandAttachmentOption
        | Option.ApplicationCommandBooleanOption
        | Option.ApplicationCommandChannelOption
        | Option.ApplicationCommandIntegerOption
        | Option.ApplicationCommandMentionableOption
        | Option.ApplicationCommandNumberOption
        | Option.ApplicationCommandRoleOption
        | Option.ApplicationCommandStringOption
        | Option.ApplicationCommandUserOption
      > | null;

      required?: boolean | null;
    }

    export namespace Option {
      export interface ApplicationCommandAttachmentOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandBooleanOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandChannelOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandIntegerOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandIntegerOption.Choice> | null;

        description_localizations?: Record<string, string> | null;

        max_value?: number | null;

        min_value?: number | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandIntegerOption {
        export interface Choice {
          name: string;

          value: number;

          name_localizations?: Record<string, string> | null;
        }
      }

      export interface ApplicationCommandMentionableOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandNumberOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandNumberOption.Choice> | null;

        description_localizations?: Record<string, string> | null;

        max_value?: number | null;

        min_value?: number | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandNumberOption {
        export interface Choice {
          name: string;

          value: number;

          name_localizations?: Record<string, string> | null;
        }
      }

      export interface ApplicationCommandRoleOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandStringOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandStringOption.Choice> | null;

        description_localizations?: Record<string, string> | null;

        max_length?: number | null;

        min_length?: number | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandStringOption {
        export interface Choice {
          name: string;

          value: string;

          name_localizations?: Record<string, string> | null;
        }
      }

      export interface ApplicationCommandUserOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }
    }
  }

  export interface ApplicationCommandSubcommandOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    options?: Array<
      | ApplicationCommandSubcommandOption.ApplicationCommandAttachmentOption
      | ApplicationCommandSubcommandOption.ApplicationCommandBooleanOption
      | ApplicationCommandSubcommandOption.ApplicationCommandChannelOption
      | ApplicationCommandSubcommandOption.ApplicationCommandIntegerOption
      | ApplicationCommandSubcommandOption.ApplicationCommandMentionableOption
      | ApplicationCommandSubcommandOption.ApplicationCommandNumberOption
      | ApplicationCommandSubcommandOption.ApplicationCommandRoleOption
      | ApplicationCommandSubcommandOption.ApplicationCommandStringOption
      | ApplicationCommandSubcommandOption.ApplicationCommandUserOption
    > | null;

    required?: boolean | null;
  }

  export namespace ApplicationCommandSubcommandOption {
    export interface ApplicationCommandAttachmentOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandBooleanOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandChannelOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandIntegerOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandIntegerOption.Choice> | null;

      description_localizations?: Record<string, string> | null;

      max_value?: number | null;

      min_value?: number | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandIntegerOption {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface ApplicationCommandMentionableOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandNumberOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandNumberOption.Choice> | null;

      description_localizations?: Record<string, string> | null;

      max_value?: number | null;

      min_value?: number | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandNumberOption {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface ApplicationCommandRoleOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandStringOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandStringOption.Choice> | null;

      description_localizations?: Record<string, string> | null;

      max_length?: number | null;

      min_length?: number | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandStringOption {
      export interface Choice {
        name: string;

        value: string;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface ApplicationCommandUserOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }
  }

  export interface ApplicationCommandUserOption {
    description: string;

    name: string;

    /**
     * - `1` - A sub-action within a command or group
     * - `2` - A group of subcommands
     * - `3` - A string option
     * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
     * - `5` - A boolean option
     * - `6` - A snowflake option that represents a User
     * - `7` - A snowflake option that represents a Channel. Includes all channel types
     *   and categories
     * - `8` - A snowflake option that represents a Role
     * - `9` - A snowflake option that represents anything you can mention
     * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
     * - `11` - An attachment option
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

    description_localizations?: Record<string, string> | null;

    name_localizations?: Record<string, string> | null;

    required?: boolean | null;
  }
}

export type CommandUpdateParams = Array<CommandUpdateParams.Body> | null;

export namespace CommandUpdateParams {
  export interface Body {
    name: string;

    id?: string | null;

    contexts?: Array<0 | 1 | 2> | null;

    default_member_permissions?: number | null;

    description?: string | null;

    description_localizations?: Record<string, string> | null;

    dm_permission?: boolean | null;

    handler?: number | null;

    integration_types?: Array<0 | 1> | null;

    name_localizations?: Record<string, string> | null;

    options?: Array<
      | Body.ApplicationCommandAttachmentOption
      | Body.ApplicationCommandBooleanOption
      | Body.ApplicationCommandChannelOption
      | Body.ApplicationCommandIntegerOption
      | Body.ApplicationCommandMentionableOption
      | Body.ApplicationCommandNumberOption
      | Body.ApplicationCommandRoleOption
      | Body.ApplicationCommandStringOption
      | Body.ApplicationCommandSubcommandGroupOption
      | Body.ApplicationCommandSubcommandOption
      | Body.ApplicationCommandUserOption
    > | null;

    /**
     * - `1` - Slash commands; a text-based command that shows up when a user types /
     * - `2` - A UI-based command that shows up when you right click or tap on a user
     * - `3` - A UI-based command that shows up when you right click or tap on a
     *   message
     * - `4` - A command that represents the primary way to use an application (e.g.
     *   launching an Activity)
     */
    type?: 1 | 2 | 3 | 4 | null;
  }

  export namespace Body {
    export interface ApplicationCommandAttachmentOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandBooleanOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandChannelOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandIntegerOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandIntegerOption.Choice> | null;

      description_localizations?: Record<string, string> | null;

      max_value?: number | null;

      min_value?: number | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandIntegerOption {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface ApplicationCommandMentionableOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandNumberOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandNumberOption.Choice> | null;

      description_localizations?: Record<string, string> | null;

      max_value?: number | null;

      min_value?: number | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandNumberOption {
      export interface Choice {
        name: string;

        value: number;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface ApplicationCommandRoleOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export interface ApplicationCommandStringOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      autocomplete?: boolean | null;

      choices?: Array<ApplicationCommandStringOption.Choice> | null;

      description_localizations?: Record<string, string> | null;

      max_length?: number | null;

      min_length?: number | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandStringOption {
      export interface Choice {
        name: string;

        value: string;

        name_localizations?: Record<string, string> | null;
      }
    }

    export interface ApplicationCommandSubcommandGroupOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      options?: Array<ApplicationCommandSubcommandGroupOption.Option> | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandSubcommandGroupOption {
      export interface Option {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        options?: Array<
          | Option.ApplicationCommandAttachmentOption
          | Option.ApplicationCommandBooleanOption
          | Option.ApplicationCommandChannelOption
          | Option.ApplicationCommandIntegerOption
          | Option.ApplicationCommandMentionableOption
          | Option.ApplicationCommandNumberOption
          | Option.ApplicationCommandRoleOption
          | Option.ApplicationCommandStringOption
          | Option.ApplicationCommandUserOption
        > | null;

        required?: boolean | null;
      }

      export namespace Option {
        export interface ApplicationCommandAttachmentOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          description_localizations?: Record<string, string> | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export interface ApplicationCommandBooleanOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          description_localizations?: Record<string, string> | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export interface ApplicationCommandChannelOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

          description_localizations?: Record<string, string> | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export interface ApplicationCommandIntegerOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          autocomplete?: boolean | null;

          choices?: Array<ApplicationCommandIntegerOption.Choice> | null;

          description_localizations?: Record<string, string> | null;

          max_value?: number | null;

          min_value?: number | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export namespace ApplicationCommandIntegerOption {
          export interface Choice {
            name: string;

            value: number;

            name_localizations?: Record<string, string> | null;
          }
        }

        export interface ApplicationCommandMentionableOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          description_localizations?: Record<string, string> | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export interface ApplicationCommandNumberOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          autocomplete?: boolean | null;

          choices?: Array<ApplicationCommandNumberOption.Choice> | null;

          description_localizations?: Record<string, string> | null;

          max_value?: number | null;

          min_value?: number | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export namespace ApplicationCommandNumberOption {
          export interface Choice {
            name: string;

            value: number;

            name_localizations?: Record<string, string> | null;
          }
        }

        export interface ApplicationCommandRoleOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          description_localizations?: Record<string, string> | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export interface ApplicationCommandStringOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          autocomplete?: boolean | null;

          choices?: Array<ApplicationCommandStringOption.Choice> | null;

          description_localizations?: Record<string, string> | null;

          max_length?: number | null;

          min_length?: number | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }

        export namespace ApplicationCommandStringOption {
          export interface Choice {
            name: string;

            value: string;

            name_localizations?: Record<string, string> | null;
          }
        }

        export interface ApplicationCommandUserOption {
          description: string;

          name: string;

          /**
           * - `1` - A sub-action within a command or group
           * - `2` - A group of subcommands
           * - `3` - A string option
           * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
           * - `5` - A boolean option
           * - `6` - A snowflake option that represents a User
           * - `7` - A snowflake option that represents a Channel. Includes all channel types
           *   and categories
           * - `8` - A snowflake option that represents a Role
           * - `9` - A snowflake option that represents anything you can mention
           * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
           * - `11` - An attachment option
           */
          type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

          description_localizations?: Record<string, string> | null;

          name_localizations?: Record<string, string> | null;

          required?: boolean | null;
        }
      }
    }

    export interface ApplicationCommandSubcommandOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      options?: Array<
        | ApplicationCommandSubcommandOption.ApplicationCommandAttachmentOption
        | ApplicationCommandSubcommandOption.ApplicationCommandBooleanOption
        | ApplicationCommandSubcommandOption.ApplicationCommandChannelOption
        | ApplicationCommandSubcommandOption.ApplicationCommandIntegerOption
        | ApplicationCommandSubcommandOption.ApplicationCommandMentionableOption
        | ApplicationCommandSubcommandOption.ApplicationCommandNumberOption
        | ApplicationCommandSubcommandOption.ApplicationCommandRoleOption
        | ApplicationCommandSubcommandOption.ApplicationCommandStringOption
        | ApplicationCommandSubcommandOption.ApplicationCommandUserOption
      > | null;

      required?: boolean | null;
    }

    export namespace ApplicationCommandSubcommandOption {
      export interface ApplicationCommandAttachmentOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandBooleanOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandChannelOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        channel_types?: Array<1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15> | null;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandIntegerOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandIntegerOption.Choice> | null;

        description_localizations?: Record<string, string> | null;

        max_value?: number | null;

        min_value?: number | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandIntegerOption {
        export interface Choice {
          name: string;

          value: number;

          name_localizations?: Record<string, string> | null;
        }
      }

      export interface ApplicationCommandMentionableOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandNumberOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandNumberOption.Choice> | null;

        description_localizations?: Record<string, string> | null;

        max_value?: number | null;

        min_value?: number | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandNumberOption {
        export interface Choice {
          name: string;

          value: number;

          name_localizations?: Record<string, string> | null;
        }
      }

      export interface ApplicationCommandRoleOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export interface ApplicationCommandStringOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        autocomplete?: boolean | null;

        choices?: Array<ApplicationCommandStringOption.Choice> | null;

        description_localizations?: Record<string, string> | null;

        max_length?: number | null;

        min_length?: number | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }

      export namespace ApplicationCommandStringOption {
        export interface Choice {
          name: string;

          value: string;

          name_localizations?: Record<string, string> | null;
        }
      }

      export interface ApplicationCommandUserOption {
        description: string;

        name: string;

        /**
         * - `1` - A sub-action within a command or group
         * - `2` - A group of subcommands
         * - `3` - A string option
         * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
         * - `5` - A boolean option
         * - `6` - A snowflake option that represents a User
         * - `7` - A snowflake option that represents a Channel. Includes all channel types
         *   and categories
         * - `8` - A snowflake option that represents a Role
         * - `9` - A snowflake option that represents anything you can mention
         * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
         * - `11` - An attachment option
         */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

        description_localizations?: Record<string, string> | null;

        name_localizations?: Record<string, string> | null;

        required?: boolean | null;
      }
    }

    export interface ApplicationCommandUserOption {
      description: string;

      name: string;

      /**
       * - `1` - A sub-action within a command or group
       * - `2` - A group of subcommands
       * - `3` - A string option
       * - `4` - An integer option. Any integer between -2^53 and 2^53 is a valid value
       * - `5` - A boolean option
       * - `6` - A snowflake option that represents a User
       * - `7` - A snowflake option that represents a Channel. Includes all channel types
       *   and categories
       * - `8` - A snowflake option that represents a Role
       * - `9` - A snowflake option that represents anything you can mention
       * - `10` - A number option. Any double between -2^53 and 2^53 is a valid value
       * - `11` - An attachment option
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

      description_localizations?: Record<string, string> | null;

      name_localizations?: Record<string, string> | null;

      required?: boolean | null;
    }
  }
}

export interface CommandListParams {
  with_localizations?: boolean;
}

Commands.Permissions = Permissions;

export declare namespace Commands {
  export {
    type ApplicationCommandResponse as ApplicationCommandResponse,
    type CommandPermissionsResponse as CommandPermissionsResponse,
    type CommandUpdateResponse as CommandUpdateResponse,
    type CommandListResponse as CommandListResponse,
    type CommandCreateParams as CommandCreateParams,
    type CommandUpdateParams as CommandUpdateParams,
    type CommandListParams as CommandListParams,
  };

  export {
    Permissions as Permissions,
    type PermissionListPermissionsResponse as PermissionListPermissionsResponse,
  };
}

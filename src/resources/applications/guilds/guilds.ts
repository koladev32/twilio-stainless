// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as CommandsAPI from './commands/commands';
import { ApplicationCommandResponse, CommandCreateParams, CommandListParams, CommandListResponse, CommandPutParams, CommandPutResponse, CommandUpdateParams, Commands } from './commands/commands';

export class Guilds extends APIResource {
  commands: CommandsAPI.Commands = new CommandsAPI.Commands(this._client);
}

Guilds.Commands = Commands;

export declare namespace Guilds {
  export {
    Commands as Commands,
    type ApplicationCommandResponse as ApplicationCommandResponse,
    type CommandListResponse as CommandListResponse,
    type CommandPutResponse as CommandPutResponse,
    type CommandCreateParams as CommandCreateParams,
    type CommandUpdateParams as CommandUpdateParams,
    type CommandListParams as CommandListParams,
    type CommandPutParams as CommandPutParams
  };
}

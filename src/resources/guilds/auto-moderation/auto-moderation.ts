// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RulesAPI from './rules';
import {
  DefaultKeywordRuleResponse,
  KeywordRuleResponse,
  MentionSpamRuleResponse,
  MlSpamRuleResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleListResponse,
  RuleRetrieveResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
  SpamLinkRuleResponse,
} from './rules';

export class AutoModeration extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

AutoModeration.Rules = Rules;

export declare namespace AutoModeration {
  export {
    Rules as Rules,
    type DefaultKeywordRuleResponse as DefaultKeywordRuleResponse,
    type KeywordRuleResponse as KeywordRuleResponse,
    type MentionSpamRuleResponse as MentionSpamRuleResponse,
    type MlSpamRuleResponse as MlSpamRuleResponse,
    type SpamLinkRuleResponse as SpamLinkRuleResponse,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleRetrieveResponse as RuleRetrieveResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as GitHubAPI from './github';

export class GitHub extends APIResource {
  create(webhookId: string, webhookToken: string, params: GitHubCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { thread_id, wait, ...body } = params;
    return this._client.post(`/webhooks/${webhookId}/${webhookToken}/github`, { query: { thread_id, wait }, body, ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface GitHubCreateParams {
  /**
   * Body param:
   */
  sender: GitHubCreateParams.Sender;

  /**
   * Query param:
   */
  thread_id?: string;

  /**
   * Query param:
   */
  wait?: boolean;

  /**
   * Body param:
   */
  action?: string | null;

  /**
   * Body param:
   */
  answer?: GitHubCreateParams.Answer | null;

  /**
   * Body param:
   */
  check_run?: GitHubCreateParams.CheckRun | null;

  /**
   * Body param:
   */
  check_suite?: GitHubCreateParams.CheckSuite | null;

  /**
   * Body param:
   */
  comment?: GitHubCreateParams.Comment | null;

  /**
   * Body param:
   */
  commits?: Array<GitHubCreateParams.Commit> | null;

  /**
   * Body param:
   */
  compare?: string | null;

  /**
   * Body param:
   */
  discussion?: GitHubCreateParams.Discussion | null;

  /**
   * Body param:
   */
  forced?: boolean | null;

  /**
   * Body param:
   */
  forkee?: GitHubCreateParams.Forkee | null;

  /**
   * Body param:
   */
  head_commit?: GitHubCreateParams.HeadCommit | null;

  /**
   * Body param:
   */
  issue?: GitHubCreateParams.Issue | null;

  /**
   * Body param:
   */
  member?: GitHubCreateParams.Member | null;

  /**
   * Body param:
   */
  pull_request?: GitHubCreateParams.PullRequest | null;

  /**
   * Body param:
   */
  ref?: string | null;

  /**
   * Body param:
   */
  ref_type?: string | null;

  /**
   * Body param:
   */
  release?: GitHubCreateParams.Release | null;

  /**
   * Body param:
   */
  repository?: GitHubCreateParams.Repository | null;

  /**
   * Body param:
   */
  review?: GitHubCreateParams.Review | null;
}

export namespace GitHubCreateParams {
  export interface Sender {
    id: number;

    avatar_url: string;

    html_url: string;

    login: string;
  }

  export interface Answer {
    id: number;

    body: string;

    html_url: string;

    user: Answer.User;

    commit_id?: string | null;
  }

  export namespace Answer {
    export interface User {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }

  export interface CheckRun {
    check_suite: CheckRun.CheckSuite;

    html_url: string;

    name: string;

    conclusion?: string | null;

    details_url?: string | null;

    output?: CheckRun.Output | null;

    pull_requests?: Array<CheckRun.PullRequest> | null;
  }

  export namespace CheckRun {
    export interface CheckSuite {
      app: CheckSuite.App;

      head_sha: string;

      conclusion?: string | null;

      head_branch?: string | null;

      pull_requests?: Array<CheckSuite.PullRequest> | null;
    }

    export namespace CheckSuite {
      export interface App {
        name: string;
      }

      export interface PullRequest {
        number: number;
      }
    }

    export interface Output {
      summary?: string | null;

      title?: string | null;
    }

    export interface PullRequest {
      number: number;
    }
  }

  export interface CheckSuite {
    app: CheckSuite.App;

    head_sha: string;

    conclusion?: string | null;

    head_branch?: string | null;

    pull_requests?: Array<CheckSuite.PullRequest> | null;
  }

  export namespace CheckSuite {
    export interface App {
      name: string;
    }

    export interface PullRequest {
      number: number;
    }
  }

  export interface Comment {
    id: number;

    body: string;

    html_url: string;

    user: Comment.User;

    commit_id?: string | null;
  }

  export namespace Comment {
    export interface User {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }

  export interface Commit {
    id: string;

    author: Commit.Author;

    message: string;

    url: string;
  }

  export namespace Commit {
    export interface Author {
      name: string;

      username?: string | null;
    }
  }

  export interface Discussion {
    html_url: string;

    number: number;

    title: string;

    user: Discussion.User;

    answer_html_url?: string | null;

    body?: string | null;
  }

  export namespace Discussion {
    export interface User {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }

  export interface Forkee {
    id: number;

    full_name: string;

    html_url: string;

    name: string;
  }

  export interface HeadCommit {
    id: string;

    author: HeadCommit.Author;

    message: string;

    url: string;
  }

  export namespace HeadCommit {
    export interface Author {
      name: string;

      username?: string | null;
    }
  }

  export interface Issue {
    id: number;

    html_url: string;

    number: number;

    title: string;

    user: Issue.User;

    body?: string | null;

    pull_request?: unknown;
  }

  export namespace Issue {
    export interface User {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }

  export interface Member {
    id: number;

    avatar_url: string;

    html_url: string;

    login: string;
  }

  export interface PullRequest {
    id: number;

    html_url: string;

    number: number;

    title: string;

    user: PullRequest.User;

    body?: string | null;

    pull_request?: unknown;
  }

  export namespace PullRequest {
    export interface User {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }

  export interface Release {
    id: number;

    author: Release.Author;

    html_url: string;

    tag_name: string;
  }

  export namespace Release {
    export interface Author {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }

  export interface Repository {
    id: number;

    full_name: string;

    html_url: string;

    name: string;
  }

  export interface Review {
    html_url: string;

    state: string;

    user: Review.User;

    body?: string | null;
  }

  export namespace Review {
    export interface User {
      id: number;

      avatar_url: string;

      html_url: string;

      login: string;
    }
  }
}

export declare namespace GitHub {
  export {
    type GitHubCreateParams as GitHubCreateParams
  };
}

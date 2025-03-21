import { createApiRef } from '@backstage/core-plugin-api';
import {
  Issue,
  JiraResponse,
} from '@axis-backstage/plugin-jira-dashboard-common';

/**
 * The apiref for the Jira dashboard plugin.
 *
 * @public
 */
export const jiraDashboardApiRef = createApiRef<JiraDashboardApi>({
  id: 'plugin.jira-dashboard',
});

/**
 * The Jira dashboard API.
 * @public
 */
export type JiraDashboardApi = {
  getJiraResponseByEntity(entityRef: string): Promise<JiraResponse>;
  getLoggedInUserIssues(
    maxResults: number,
    filterName: string,
  ): Promise<Issue[]>;
  getProjectAvatar(entityRef: string): any;
};

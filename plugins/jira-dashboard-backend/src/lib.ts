import {
  COMPONENTS_NAME,
  PROJECT_KEY_NAME,
  FILTERS_NAME,
  INCOMING_ISSUES_STATUS,
} from '@axis-backstage/plugin-jira-dashboard-common';

import type { ConfigInstance, JiraConfig } from './config';

export const getAnnotations = (config: JiraConfig) => {
  const prefix = config.annotationPrefix;

  const projectKeyAnnotation = `${prefix}/${PROJECT_KEY_NAME}`;
  const componentsAnnotation = `${prefix}/${COMPONENTS_NAME}`;
  const filtersAnnotation = `${prefix}/${FILTERS_NAME}`;
  const incomingIssuesAnnotation = `${prefix}/${INCOMING_ISSUES_STATUS}`;

  /*   Adding support for Roadie's component annotation */
  const componentRoadieAnnotation = `${prefix}/component`;

  return {
    projectKeyAnnotation,
    componentsAnnotation,
    filtersAnnotation,
    incomingIssuesAnnotation,
    componentRoadieAnnotation,
  };
};

export interface JiraProject {
  instance: ConfigInstance;
  fullProjectKey: string;
  projectKey: string;
}

/**
 * Splits a project key "instance/key" into a config instance and a project
 * key, falling back to 'default' for unprefixed keys
 */
export function splitProjectKey(
  config: JiraConfig,
  fullProjectKey: string,
): JiraProject {
  const [instance, projectKey] = fullProjectKey.split('/');
  if (!projectKey) {
    // No specific instance specified - use default
    return {
      instance: config.getInstance(),
      fullProjectKey,
      projectKey: instance,
    };
  }

  return {
    instance: config.getInstance(instance),
    fullProjectKey,
    projectKey,
  };
}

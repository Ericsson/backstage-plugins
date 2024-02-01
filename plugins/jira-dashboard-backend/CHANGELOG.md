# @axis-backstage/plugin-jira-dashboard-backend

## 0.5.0

### Minor Changes

- 97f5bf4: Created optional ANNOTATION_PREFIX config in backend to make it possible to define custom annotations. The jira.com annotation is still used if no config value is provided. Also removed check for annotation in frontend and only return error message 'Could not fetch Jira Dashboard content for defined project key' if no Jira data is returned from backend.

### Patch Changes

- Updated dependencies [97f5bf4]
  - @axis-backstage/plugin-jira-dashboard-common@0.4.0

## 0.4.0

### Minor Changes

- 864d983: Bumped Backstage version to v.1.22.0

### Patch Changes

- 1248d02: Removed the single quotes from documentation config strings
- Updated dependencies [864d983]
  - @axis-backstage/plugin-jira-dashboard-common@0.3.0

## 0.3.0

### Minor Changes

- 23ff76a: Bumped Backstage version to v.1.21.0 in whole monorepo

### Patch Changes

- Updated dependencies [23ff76a]
  - @axis-backstage/plugin-jira-dashboard-common@0.2.0

## 0.2.0

### Minor Changes

- a67c963: Bumped Backstage to version 1.20.3

### Patch Changes

- 1e7ee53: Added missing config.d.ts file to package.json
- Updated dependencies [9cf5ab1]
  - @axis-backstage/plugin-jira-dashboard-common@0.1.1
## Branch Naming Convention

To maintain consistency and facilitate better collaboration, we follow a specific branch naming convention. Please adhere to the following guidelines when creating branches:

- **Feature Branches:** Start with the prefix `feature/` followed by the Jira issue key and a descriptive name. Example: `feature/TIC-20_branch_name`.

- **Hotfix Branches:** Start with the prefix `hotfix/` followed by the Jira issue key and a descriptive name. Example: `hotfix/TIC-21_fix_bug`.

- **Release Branches:** Start with the prefix `release/` followed by the version number or a descriptive name. Example: `release/1.0.0` or `release/beta`.

Make sure to replace `TIC-20` and `branch_name` with the appropriate Jira issue key and a descriptive name for feature branches.

### Branch Linting Configuration

To enforce the branch naming convention, we use a linting tool. The configuration for this tool you can find in `.branchlintrc.json` and `.husky/pre-push` files.


## Commit Message Linting Configuration

To maintain a consistent and meaningful history of commits, we use linting for commit messages. Follow these guidelines when writing commit messages:

### Jira Ticket Prefix

Commit messages should start with a Jira ticket prefix to associate them with the corresponding issue.
The prefix is dynamically extracted from the branch name using the provided configuration.

If your branch name is `feature/TIC-20_branch_name`, the commit message should start with `TIC-20:`.
This ensures that commits are linked to the relevant Jira issue.

The linting configuration ensures that commit messages adhere to the specified Jira ticket prefix.
If a commit message doesn't start with the expected prefix, you will receive an error prompting you to follow the correct format.

The configuration for this tool you can find in `commitlint.config.js` and `.husky/commit-msg` files.

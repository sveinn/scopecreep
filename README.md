# Scope: Getting Started

An starter React project instrumented with Scope through GitHub Actions.

This starter project is based on:

- [Create React App](https://github.com/facebook/create-react-app)

## How it works

The project includes unit tests run by [Jest](https://jestjs.io/), end to end tests run by [Cypress](https://www.cypress.io/) and the necessary configuration for the Scope Javascript Agent.

For more information please refer to the documentation at [https://docs.scope.dev/docs/javascript-installation](https://docs.scope.dev/docs/javascript-installation).

## Running Scope on GitHub Actions

1. Click on `Use this template` button and create the repository in your namespace.
2. Access to [app.scope.dev](https://app.scope.dev).
3. Add/Modify your namespace to include your new repository.
4. Get the API Key for your new repository.
5. Go to your repository on GitHub.
6. Sign up for [GitHub Actions](https://github.com/features/actions) if you have not already done so.
7. Go to `Settings` -> `Secrets`.
8. Add your API Key secret.

- Name: `SCOPE_APIKEY`
- Value: `<<your APIKEY>>`

9. Click on `Actions` button and access to the workflow.
10. Click on `Re-run checks`.

Once GitHub Workflow has finished, you can check the test executions report on [app.scope.dev](https://app.scope.dev).

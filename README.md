# Ortogoloso - Registro fatture

[Monorepo generated with Nx.dev](https://nx.dev). An Angular demo app for storing invoices. The app is in Italian language.

## Requirements

- Node 20.10.0

## Installation

```sh
npm install
```

In case of problems with the installation with another node version, remove the `package.json` file, the `node_modules` directory and retry.

## Configurations

Environment.ts contains:

- Company name
- IVA\VAT percentage
- Payment modes list
- Payment solutions list


## Install Nx Console (optional but reommended)

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Docker

```sh
docker compose build
docker compose up
```

## Technologies

- Angular 19
- Jest
- Sass
- Bootstrap 5

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve ortogoloso
```

To create a production bundle:

```sh
npx nx build ortogoloso
```

To see all available targets to run for a project, run:

```sh
npx nx show project ortogoloso
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Finish the CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/sx3X637Yrv)


## TODO

Many further improvements are possible:

- Internationalization
- Backend interaction
- Improve data models
- Testing integration
- Browser automation tests

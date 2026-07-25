# REST and GraphQL Comparison Client

A Vue 3 application for fetching the same event-shaped data through REST and GraphQL, then comparing request and parsing timings. It uses Vite, Vuetify 3, Vue Router 4, and Pinia.

## Workspace Relationship

This project is the browser client for the two backend projects in this workspace. They are separate Node.js applications with separate dependency installations; there is no package-level workspace dependency between them.

| Project                                  | Role              | Default local endpoint used by this client |
| ---------------------------------------- | ----------------- | ------------------------------------------ |
| [`../people-api`](../people-api)          | REST event API    | `http://localhost:5000/events`             |
| [`../graphql-server`](../graphql-server)  | GraphQL event API | `http://localhost:8000/api`                |

The client initially uses deployed API URLs. Open the Settings dialog in the app and select the local URLs above after starting the two backends. The selected URIs live in the Pinia store for the current browser session. A Docker Compose build supplies same-origin defaults (`/rest/events` and `/graphql/api`) through `VITE_REST_URI` and `VITE_GRAPHQL_URI`.

For a local end-to-end setup, configure both backend projects with their MongoDB environment variables, start each one independently, then start this Vite application. Both backend servers enable CORS, so the browser client can call them from its Vite origin.

The Events view makes a `GET` request to the REST endpoint and a `POST` GraphQL request to the GraphQL endpoint. The GraphQL request asks for `events { id title price description date }`, so changes to either backend's event contract should be coordinated with this project.

## Docker Compose

When checked out as a submodule of the `rest-graphql-comparison` integration repository, run Docker Compose from that parent directory. The frontend is available at `http://localhost:8080`; it proxies same-origin REST and GraphQL requests to the sibling backend containers.

## Setup

```bash
npm install
```

## Development

Start the Vite dev server:

```bash
npm run dev
```

`npm run serve` is kept as an alias for the same Vite command.

## Production build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint:

```bash
npm run lint
```

## Formatting

Format the repository with Oxfmt:

```bash
npm run format
```

Check formatting without writing changes:

```bash
npm run format:check
```

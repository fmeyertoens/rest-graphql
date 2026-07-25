# AI Development Guide

## Purpose and boundaries

`rest-graphql` is a Vue 3/Vite browser client that compares event fetch timings from two independently deployed backends:

- REST: `GET /events` from the sibling `../people-api` project.
- GraphQL: `POST /api` on the sibling `../graphql-server` project, using the `events` query.

These are separate projects, not package dependencies. They are composed by the parent `rest-graphql-comparison` integration repository. Do not change their API contracts, ports, or environment configuration as part of a frontend-only task. When a change requires a contract update, update the relevant backend, all three READMEs, and the parent integration documentation.

## Architecture

- `src/views/Events.vue` composes one `EventFetch` component for each protocol and injects the current endpoint settings.
- `src/components/EventFetch.vue` performs requests, records receive/parse timing, and renders data through child components.
- `src/store.ts` is the Pinia source of truth for REST and GraphQL endpoint URIs.
- `src/utils/restOptions.ts` and `src/utils/graphqlOptions.ts` define protocol-specific request options and response extraction.
- Use the `@` alias for imports from `src`.

## Working conventions

- Use TypeScript and Vue's existing component style; preserve the current composition/options API choice within the file being edited.
- Keep request and response handling protocol-specific. REST responses are event arrays; GraphQL responses are unwrapped from `data.events`.
- Preserve the event fields required by the UI: `id`, `title`, `price`, `description`, and `date`.
- Keep endpoint choices configurable through the Pinia store. Do not hard-code local URLs into view logic.
- Use browser-visible, same-origin paths for Docker Compose defaults; browser code must not use Docker service names.
- Do not commit secrets, `.env` files, generated build output, or `node_modules`.

## Validation

After relevant changes, run the narrowest applicable checks from this directory:

1. `npm run typecheck` for TypeScript and Vue template changes.
2. `npm run lint` for linting.
3. `npm run format:check` for formatting.
4. `npm run build` when changing production-facing application configuration or integration code.

For container changes, also validate the parent repository's Docker Compose configuration and the frontend proxy paths.

There is no automated test script. For changes affecting API calls, manually verify the Events page against the configured REST and GraphQL endpoints.
